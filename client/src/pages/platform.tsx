import { Helmet } from "react-helmet-async";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { Reveal } from "@/utils/scrollAnimations";
import { motion } from "framer-motion";
import { Cpu, Cloud, Shield, Server, Database, Zap } from "lucide-react";

export default function Platform() {
  const architectureComponents = [
    {
      icon: Cpu,
      title: "Edge Gateway",
      description: "NVIDIA Jetson tabanlı edge computing çözümü",
      tech: "ARM Cortex-A78AE, CUDA Cores"
    },
    {
      icon: Cloud,
      title: "Cloud Infrastructure",
      description: "Kubernetes mikroservis mimarisi",
      tech: "Docker, Apache Kafka, TimescaleDB"
    },
    {
      icon: Shield,
      title: "Security Layer",
      description: "End-to-end şifreleme ve çoklu kiracılık",
      tech: "TLS 1.3, OAuth 2.0, Role-based Access"
    },
    {
      icon: Database,
      title: "Data Pipeline",
      description: "Gerçek zamanlı veri işleme",
      tech: "Apache Kafka, InfluxDB, Redis"
    },
    {
      icon: Zap,
      title: "AI Engine",
      description: "Machine learning ve optimizasyon",
      tech: "TensorFlow, PyTorch, ONNX"
    },
    {
      icon: Server,
      title: "API Gateway",
      description: "RESTful ve GraphQL endpoint'ler",
      tech: "Kong, GraphQL, OpenAPI 3.0"
    }
  ];

  return (
    <main className="min-h-screen scroll-smooth snap-y snap-mandatory">
      <Helmet>
        <title>Platform - AEMOS Voltura</title>
        <meta name="description" content="AEMOS Voltura'nın teknik mimarisi, mikroservis yapısı ve hibrit edge+cloud çözümleri hakkında detaylı bilgi." />
      </Helmet>
      
      <Navbar />
      
      {/* Hero Section */}
      <section className="snap-start bg-white pt-16 min-h-screen flex items-center">
        <div className="container">
          <Reveal>
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Platform <span className="text-gradient">Mimarisi</span>
              </h1>
              <p className="text-subhero text-gray-600 max-w-3xl mx-auto mb-12">
                Mikroservis tabanlı, bulut-yerel mimari ile edge computing ve AI teknolojilerini 
                bir araya getiren endüstriyel enerji yönetimi platformu.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Architecture Components */}
      <section className="snap-start bg-muted">
        <div className="container">
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Teknik Bileşenler
              </h2>
              <p className="text-subhero text-gray-600 max-w-2xl mx-auto">
                Platform, modüler ve ölçeklenebilir bir mimari ile tasarlanmıştır
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
            {architectureComponents.map((component, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 }
                }}
                className="climate-card bg-white p-6"
              >
                <component.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">{component.title}</h3>
                <p className="text-gray-600 mb-4">{component.description}</p>
                <div className="text-sm text-accent font-medium">{component.tech}</div>
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
                Entegrasyon Akışı
              </h2>
              <p className="text-subhero text-gray-600 max-w-2xl mx-auto">
                Veri toplama, işleme ve optimizasyon sürecinin detaylı akışı
              </p>
            </div>
          </Reveal>
          
          <Reveal delay={0.2}>
            <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 text-center">
              <div className="flex items-center justify-center space-x-6 flex-wrap gap-4">
                <div className="flex items-center space-x-2">
                  <Cpu className="w-8 h-8 text-primary" />
                  <span className="font-semibold">Veri Toplama</span>
                </div>
                <div className="text-2xl text-gray-400">→</div>
                <div className="flex items-center space-x-2">
                  <Zap className="w-8 h-8 text-accent" />
                  <span className="font-semibold">AI İşleme</span>
                </div>
                <div className="text-2xl text-gray-400">→</div>
                <div className="flex items-center space-x-2">
                  <Cloud className="w-8 h-8 text-primary" />
                  <span className="font-semibold">Optimizasyon</span>
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
