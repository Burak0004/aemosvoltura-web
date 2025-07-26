import { Helmet } from "react-helmet-async";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { Reveal } from "@/utils/scrollAnimations";
import { motion } from "framer-motion";
import { Zap, Cpu, DollarSign, ClipboardCheck, Brain, ArrowRightLeft } from "lucide-react";

export default function Modules() {
  const modules = [
    {
      icon: Zap,
      title: "Gerçek‑Zamanlı Optimizasyon",
      description: "Saniyelik IoT verisi ile anlık enerji optimizasyonu",
      features: ["Reactive power control", "Load balancing", "Peak shaving"],
      benefit: "%15 kayıp azalması"
    },
    {
      icon: Cpu,
      title: "AI Destekli Dijital İkiz",
      description: "Machine learning ile tahmin ve optimizasyon",
      features: ["Predictive analytics", "Anomaly detection", "Process optimization"],
      benefit: "%95+ tahmin doğruluğu"
    },
    {
      icon: DollarSign,
      title: "Blokzincir P2P Pazaryeri",
      description: "Fazla enerjinin otomatik satışı",
      features: ["Smart contracts", "Automated trading", "Price optimization"],
      benefit: "≤30 sn eşleşme"
    },
    {
      icon: ClipboardCheck,
      title: "CBAM & ESG Raporu",
      description: "Karbon ayak izi ve sürdürülebilirlik raporlama",
      features: ["Carbon tracking", "ISO 14064 compliance", "ESG reporting"],
      benefit: "ISO 14064 çıktıları"
    },
    {
      icon: Brain,
      title: "Makine Öğrenmesi",
      description: "Sürekli öğrenen AI algoritmaları",
      features: ["Pattern recognition", "Adaptive learning", "Performance improvement"],
      benefit: "Sürekli iyileştirme"
    },
    {
      icon: ArrowRightLeft,
      title: "Sistem Entegrasyonu",
      description: "Mevcut sistemlerle sorunsuz entegrasyon",
      features: ["API integration", "Legacy system support", "Real-time sync"],
      benefit: "Kesintisiz geçiş"
    }
  ];

  return (
    <main className="min-h-screen scroll-smooth snap-y snap-mandatory">
      <Helmet>
        <title>Modüller - AEMOS Voltura</title>
        <meta name="description" content="AEMOS Voltura'nın AI destekli dijital ikiz, P2P pazaryeri ve reaktif güç önleme modülleri hakkında detaylı bilgi." />
      </Helmet>
      
      <Navbar />
      
      {/* Hero Section */}
      <section className="snap-start bg-white pt-16 min-h-screen flex items-center">
        <div className="container">
          <Reveal>
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Platform <span className="text-gradient">Modülleri</span>
              </h1>
              <p className="text-subhero text-gray-600 max-w-3xl mx-auto mb-12">
                Modüler mimari ile ihtiyaçlarınıza göre özelleştirilebilen, 
                her biri ayrı değer yaratan entegre çözümler.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Core Modules */}
      <section className="snap-start bg-muted">
        <div className="container">
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Temel Modüller
              </h2>
              <p className="text-subhero text-gray-600 max-w-2xl mx-auto">
                Her modül bağımsız olarak çalışabilir ve diğer modüllerle entegre edilebilir
              </p>
            </div>
          </Reveal>
          
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
          >
            {modules.map((module, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 }
                }}
                className="climate-card bg-white p-8"
              >
                <module.icon className="w-12 h-12 text-primary mb-6" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">{module.title}</h3>
                <p className="text-gray-600 mb-6">{module.description}</p>
                
                <div className="space-y-2 mb-6">
                  {module.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                      {feature}
                    </div>
                  ))}
                </div>
                
                <div className="text-primary font-bold">{module.benefit}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Integration Flow */}
      <section className="snap-start bg-white">
        <div className="container">
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Modül Entegrasyonu
              </h2>
              <p className="text-subhero text-gray-600 max-w-2xl mx-auto">
                Tüm modüller birbirleriyle senkronize çalışarak maksimum verimlilik sağlar
              </p>
            </div>
          </Reveal>
          
          <Reveal delay={0.2}>
            <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div className="flex flex-col items-center">
                  <Zap className="w-16 h-16 text-primary mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Veri Toplama</h3>
                  <p className="text-gray-600">IoT sensörlerden gerçek zamanlı veri</p>
                </div>
                <div className="flex flex-col items-center">
                  <Brain className="w-16 h-16 text-accent mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">AI İşleme</h3>
                  <p className="text-gray-600">Makine öğrenmesi ile analiz</p>
                </div>
                <div className="flex flex-col items-center">
                  <DollarSign className="w-16 h-16 text-primary mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Optimizasyon</h3>
                  <p className="text-gray-600">Otomatik kontrol ve ticaret</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
