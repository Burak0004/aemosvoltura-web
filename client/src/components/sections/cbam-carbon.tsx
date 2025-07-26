import { Reveal } from "@/utils/scrollAnimations";
import { Shield, FileText, TrendingUp, Globe } from "lucide-react";

export default function CBAMCarbon() {
  const features = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "CBAM Uyumluluk",
      description: "Avrupa Birliği Karbon Sınır Düzenleme Mekanizması'na tam uyumlu raporlama ve izleme sistemi."
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Otomatik Raporlama",
      description: "Karbon emisyonu hesaplamaları ve raporları otomatik olarak oluşturulur ve güncellenir."
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Emisyon Azaltma",
      description: "AI destekli optimizasyon ile karbon ayak izinizi %25'e kadar azaltın."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Küresel Standartlar",
      description: "ISO 14064, GHG Protocol ve CBAM gereksinimlerine tam uyum sağlar."
    }
  ];

  return (
    <section id="cbam" className="bg-white py-20">
      <div className="container px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-aemos-navy mb-6">
              CBAM & <span className="text-aemos-green">Karbon Yönetimi</span>
            </h2>
            <p className="text-xl text-aemos-gray max-w-3xl mx-auto">
              Avrupa'ya ihracat yapan endüstriyel tesisler için zorunlu karbon 
              raporlama ve emisyon yönetimi çözümleri.
            </p>
          </div>
        </Reveal>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <Reveal key={index} delay={index * 0.1}>
              <div className="aemos-card text-center hover:shadow-lg transition-all duration-300">
                <div className="text-aemos-aqua mb-4 flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-aemos-navy mb-3">{feature.title}</h3>
                <p className="text-aemos-gray leading-relaxed">{feature.description}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.5}>
          <div className="aemos-card max-w-4xl mx-auto bg-gradient-to-br from-aemos-green/10 to-aemos-aqua/10 border-2 border-aemos-green/20">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-aemos-navy mb-4">
                2026 CBAM Yükümlülüğü
              </h3>
              <p className="text-aemos-gray mb-6">
                Çimento, demir-çelik, alüminyum, gübre ve elektrik sektörlerinde 
                faaliyet gösteren ve AB'ye ihracat yapan şirketler için zorunlu.
              </p>
              <button className="aemos-button-accent">
                CBAM Hazırlık Danışmanlığı
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}