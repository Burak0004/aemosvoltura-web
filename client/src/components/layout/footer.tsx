import { Link } from "wouter";
import { Linkedin, Twitter, Youtube } from "lucide-react";

export default function Footer() {
  const platformLinks = [
    { name: "Teknik Mimari", href: "/platform" },
    { name: "Modüller", href: "/modules" },
    { name: "Entegrasyonlar", href: "/platform#integrations" },
    { name: "API Dokümantasyonu", href: "/docs" }
  ];

  const solutionLinks = [
    { name: "Çimento Sanayi", href: "/solutions/cement" },
    { name: "Demir-Çelik", href: "/solutions/steel" },
    { name: "Gıda İşleme", href: "/solutions/food" },
    { name: "Kimya Sanayi", href: "/solutions/chemical" }
  ];

  const supportLinks = [
    { name: "Dokümantasyon", href: "/docs" },
    { name: "Blog", href: "/blog" },
    { name: "Sistem Durumu", href: "/status" },
    { name: "İletişim", href: "/contact" },
    { name: "Yatırımcılar", href: "/investors" }
  ];

  const socialLinks = [
    { name: "LinkedIn", href: "#", icon: <Linkedin className="w-5 h-5" /> },
    { name: "Twitter", href: "#", icon: <Twitter className="w-5 h-5" /> },
    { name: "YouTube", href: "#", icon: <Youtube className="w-5 h-5" /> }
  ];

  return (
    <footer className="bg-aemos-navy text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <img 
              src="/logo.svg" 
              alt="AEMOS Voltura Logo" 
              className="h-8 w-auto mb-6 filter brightness-0 invert"
            />
            <p className="text-gray-400 mb-6 leading-relaxed">
              Endüstriyel enerji yönetiminde yeni paradigma. 
              AI, IoT ve blokzincir teknolojileri ile geleceği inşa ediyoruz.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-400 hover:text-aemos-aqua transition-colors"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Platform</h4>
            <ul className="space-y-3">
              {platformLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-aemos-aqua transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Çözümler</h4>
            <ul className="space-y-3">
              {solutionLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-aemos-aqua transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Destek</h4>
            <ul className="space-y-3">
              {supportLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className={`text-gray-400 transition-colors ${
                    link.name === 'Yatırımcılar' ? 'hover:text-aemos-aqua font-medium' : 'hover:text-aemos-aqua'
                  }`}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 AEMOS Voltura. Tüm hakları saklıdır. | {" "}
            <Link href="/privacy" className="hover:text-aemos-aqua transition-colors">
              Gizlilik Politikası
            </Link>
            {" "} | {" "}
            <Link href="/terms" className="hover:text-voltura-green transition-colors">
              Kullanım Koşulları
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
