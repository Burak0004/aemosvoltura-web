import { useState, useEffect } from 'react';
import { useSmoothScroll } from "@/hooks/use-smooth-scroll";
import Logo from "@/components/ui/logo";

export default function Navbar() {
  const { scrollToSection } = useSmoothScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) setIsScrolled(true);
      else setIsScrolled(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-30 px-6 md:px-8 transition-all duration-300 ${isScrolled ? 'bg-[#0A192F] shadow-lg py-3' : 'bg-transparent py-5'}`}>
<div className="w-full flex items-center justify-between">

<div className="flex-shrink-0">
<button 
onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
className="hover:opacity-80 transition-opacity"
>
<Logo width={240} height={82} />
</button>
</div>

        <div className="flex items-center space-x-6">
          <nav className="hidden md:flex items-center space-x-7"> 
    <button 
    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
    className="text-gray-300 hover:text-white transition-colors font-medium text-sm whitespace-nowrap"
    >
    Ana Sayfa
    </button>
    <button 
    onClick={() => scrollToSection('solutions')} 
    className="text-gray-300 hover:text-white transition-colors font-medium text-sm whitespace-nowrap"
    >
    Çözümler
    </button>
            <button 
              onClick={() => scrollToSection('investors')}
              className="text-gray-300 hover:text-white transition-colors font-medium text-sm whitespace-nowrap"
            >
              Yatırımcılar
            </button>
    <button 
    onClick={() => scrollToSection('cbam')} 
    className="text-gray-300 hover:text-white transition-colors font-medium text-sm whitespace-nowrap"
    >
    CBAM & Karbon
    </button>
    <button 
    onClick={() => scrollToSection('about')} 
    className="text-gray-300 hover:text-white transition-colors font-medium text-sm whitespace-nowrap"
    >
    Hakkımızda
    </button>
    <button 
    onClick={() => scrollToSection('contact')} 
    className="text-gray-300 hover:text-white transition-colors font-medium text-sm whitespace-nowrap"
    >
    İletişim
    </button>
    </nav>

    <div>
    <button 
    onClick={() => scrollToSection('contact')} 
    className="border border-aemos-aqua text-aemos-aqua hover:bg-aemos-aqua/10 font-bold py-2 px-5 rounded-lg transition-all duration-300 text-sm whitespace-nowrap"
    >
    Demo Al
    </button>
    </div>
        </div>
</div>
</header>
);
}