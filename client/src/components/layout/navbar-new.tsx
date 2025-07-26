import { useSmoothScroll } from "@/hooks/use-smooth-scroll";
import Logo from "@/components/ui/logo";
import { useState, useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const { scrollToSection } = useSmoothScroll();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Dropdown dışında tıklama durumunu ele al
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Scroll durumunu takip et
  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 50);
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 px-8 transition-all duration-300 ${
      isScrolled ? 'py-2 bg-[#0A192F]/95 backdrop-blur-lg border-b border-white/10' : 'py-3'
    }`}>
      <div className="w-full flex items-center justify-between">

        {/* Logo */}
        <div>
          <Link href="/" className="hover:opacity-80 transition-opacity">
            <Logo width={isScrolled ? 200 : 300} height={isScrolled ? 65 : 100} />
          </Link>
        </div>

        {/* Navigation */}
        <div className="flex items-center space-x-10">
          <nav className="hidden md:flex items-center space-x-7">
            <Link 
              href="/" 
              className="text-gray-300 hover:text-white transition-colors font-medium text-sm"
            >
              Ana Sayfa
            </Link>
            <div className="relative" ref={dropdownRef}>
              <button 
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="text-gray-300 hover:text-white transition-colors font-medium text-sm flex items-center"
              >
                Çözümler
                <ChevronDown className={`w-4 h-4 ml-1 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isDropdownOpen && (
                <div className="dropdown-menu absolute top-full left-0 mt-2 w-56 z-50">
                  <Link 
                    href="/reactive-power" 
                    className="dropdown-item block text-sm text-gray-700 hover:text-[#00C853] first:rounded-t-lg"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    Reaktif Güç Optimizasyonu
                  </Link>
                  <Link 
                    href="/p2p-energy" 
                    className="dropdown-item block text-sm text-gray-700 hover:text-[#00C853]"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    P2P Enerji Ticareti
                  </Link>
                  <Link 
                    href="/cbam" 
                    className="dropdown-item block text-sm text-gray-700 hover:text-[#00C853] last:rounded-b-lg"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    CBAM & ESG Uyumu
                  </Link>
                </div>
              )}
            </div>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-gray-300 hover:text-white transition-colors font-medium text-sm"
            >
              Hakkımızda
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-gray-300 hover:text-white transition-colors font-medium text-sm"
            >
              İletişim
            </button>
          </nav>
          
          {/* CTA Button */}
          <div>
            <Button
              variant="secondary"
              size="sm"
              onClick={() => scrollToSection('contact')}
              className="font-bold text-white"
            >
              Demo Al
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}