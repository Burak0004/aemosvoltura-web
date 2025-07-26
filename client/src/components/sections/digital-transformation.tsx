import { Reveal } from "@/utils/scrollAnimations";
import { Cpu, Database, Globe, Zap, Shield, BarChart3 } from "lucide-react";

const features = [
  {
    icon: Cpu,
    title: "AI Destekli Analiz",
    description: "Yapay zeka algoritmaları ile gerçek zamanlı enerji tüketimi analizi ve optimizasyon önerileri"
  },
  {
    icon: Database,
    title: "Dijital İkiz Teknolojisi",
    description: "Tesislerinizin sanal kopyaları üzerinden simülasyon ve optimizasyon çalışmaları"
  },
  {
    icon: Globe,
    title: "P2P Enerji Ticareti",
    description: "Blockchain tabanlı peer-to-peer enerji ticareti ile fazla enerjiyi 30 saniyede satma"
  },
  {
    icon: Zap,
    title: "Gerçek Zamanlı İzleme",
    description: "IoT sensörleri ile saniye bazında enerji tüketimi ve üretimi takibi"
  },
  {
    icon: Shield,
    title: "CBAM Uyumluluğu",
    description: "Karbon Sınır Düzenleme Mekanizması için otomatik raporlama ve uyumluluk"
  },
  {
    icon: BarChart3,
    title: "Tahminleme Motoru",
    description: "Makine öğrenmesi ile enerji tüketimi ve üretimi tahminleri"
  }
];

export default function DigitalTransformation() {
  return (
    <section className="bg-white py-20">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Reveal>
            <h2 className="text-4xl md:text-5xl font-bold text-aemos-navy mb-6">
              AEMOS Voltura ile <span className="text-aemos-aqua">Dijital Dönüşüm</span>
            </h2>
            <p className="text-xl text-aemos-gray max-w-3xl mx-auto">
              Yeni nesil enerji izleme sistemi ile endüstriyel tesislerinizi geleceğe taşıyın
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Reveal key={index} delay={index * 0.1}>
              <div className="aemos-card hover:shadow-xl transition-all duration-300">
                <div className="bg-aemos-aqua/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-aemos-navy" />
                </div>
                <h3 className="text-xl font-bold text-aemos-navy mb-4">{feature.title}</h3>
                <p className="text-aemos-gray leading-relaxed">{feature.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}