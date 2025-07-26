import { Zap, Cpu, DollarSign, ClipboardCheck } from "lucide-react";
import { Reveal } from "@/utils/scrollAnimations";

const features = [
  { 
    icon: Zap, 
    title: 'Gerçek‑Zamanlı Optimizasyon', 
    desc: 'Saniyelik veri → %15 kayıp düşüşü', 
    link: '/modules/realtime' 
  },
  { 
    icon: Cpu, 
    title: 'AI Destekli Dijital İkiz', 
    desc: '%95+ tahmin doğruluğu', 
    link: '/modules/digital-twin' 
  },
  { 
    icon: DollarSign, 
    title: 'Blokzincir P2P Pazaryeri', 
    desc: '≤30 sn eşleşme', 
    link: '/modules/p2p' 
  },
  { 
    icon: ClipboardCheck, 
    title: 'CBAM & ESG Raporu', 
    desc: 'ISO 14064 çıktıları', 
    link: '/modules/cbam' 
  },
];

export default function FeatureGrid() {
  return (
    <section className="bg-aemos-light-gray py-20">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-aemos-navy mb-4">
            Platform Özellikleri
          </h2>
          <p className="text-xl text-aemos-gray max-w-2xl mx-auto">
            Endüstriyel enerji verimliliğinizi artıran temel özellikler
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <Reveal key={index} delay={index * 0.1}>
              <article className="aemos-card hover:shadow-xl transition-all duration-300 hover:border-aemos-aqua/20">
                <div className="bg-aemos-aqua/10 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="h-6 w-6 text-aemos-navy" />
                </div>
                <h3 className="text-lg font-bold text-aemos-navy mb-3">{feature.title}</h3>
                <p className="text-aemos-gray mb-4 leading-relaxed">{feature.desc}</p>
                <a 
                  href={feature.link} 
                  className="text-aemos-aqua font-medium hover:text-aemos-aqua/80 transition-colors inline-flex items-center"
                >
                  Daha Fazla 
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}