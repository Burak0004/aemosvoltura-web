import { Cpu, Cloud, Shield, Server, Brain, Database } from "lucide-react";
import { Reveal } from "@/utils/scrollAnimations";

export default function PlatformOverview() {
  const features = [
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "Edge Computing",
      description: "NVIDIA Jetson tabanlı Edge Gateway'ler ile milisaniyeler içinde gerçek zamanlı kontrol ve veri toplama.",
      color: "bg-primary"
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Bulut Altyapısı",
      description: "Kubernetes üzerinde mikroservis mimarisi, Apache Kafka olay akışı ve TimescaleDB ile ölçeklenebilir veri yönetimi.",
      color: "bg-accent"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Güvenlik & Uyumluluk",
      description: "Çoklu kiracılık, end-to-end şifreleme ve CBAM/ESG raporlama ile tam yasal uyumluluk.",
      color: "bg-primary"
    }
  ];

  return (
    <section id="platform" className="bg-white">
      <div className="container">
        <Reveal>
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
              Platform <span className="text-gradient">Mimarisi</span>
            </h2>
            <p className="text-subhero text-gray-600 max-w-2xl mx-auto">
              Mikroservis tabanlı, bulut-yerel mimari ile edge computing ve AI teknolojilerini 
              bir araya getiren endüstriyel enerji yönetimi çözümü
            </p>
          </div>
        </Reveal>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <Reveal key={index} delay={index * 0.1}>
              <div className="climate-card p-8 text-center">
                <div className={`w-20 h-20 ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-6 text-white`}>
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
        
        <Reveal delay={0.4}>
          <div className="text-center">
            <div className="inline-flex items-center justify-center space-x-6 bg-gradient-voltura text-white px-12 py-6 rounded-2xl climate-card">
              <Server className="w-10 h-10" />
              <span className="text-2xl font-light">+</span>
              <Brain className="w-10 h-10" />
              <span className="text-2xl font-light">+</span>
              <Database className="w-10 h-10" />
              <span className="text-2xl font-light">=</span>
              <span className="text-2xl font-semibold">Hibrit Mimari</span>
            </div>
            <p className="mt-6 text-gray-600">Edge + Cloud + AI = Gerçek Zamanlı İşleme</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
