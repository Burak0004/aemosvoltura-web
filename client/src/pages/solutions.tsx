import { Helmet } from "react-helmet-async";
import Navbar from "@/components/layout/navbar-new";
import Footer from "@/components/layout/footer";
import ReactivePowerSolution from "@/components/sections/reactive-power-solution";
import P2PEnergyTrading from "@/components/sections/p2p-energy-trading";
import CBAMCompliance from "@/components/sections/cbam-compliance";
import { ArrowLeft, Zap, Network, Shield, TrendingUp, Globe, FileText } from "lucide-react";
import { Link } from "wouter";

export default function SolutionsPage() {
  const solutions = [
    {
      title: "Reaktif Güç Optimizasyonu",
      subtitle: "Ceza Önleme ve Verimlilik",
      description: "Reaktif güç cezalarını önleyin, enerji verimliliğinizi %15 artırın",
      icon: <Zap className="w-8 h-8 text-aemos-aqua" />,
      benefits: ["Ceza önleme", "%15 verimlilik artışı", "Otomatik optimizasyon"],
      color: "from-blue-900/20 to-aemos-navy/20",
      id: "reactive-power"
    },
    {
      title: "P2P Enerji Ticareti",
      subtitle: "Blokzincir Pazaryeri",
      description: "kWh-NFT teknolojisi ile komisyonsuz enerji alım-satımı",
      icon: <Network className="w-8 h-8 text-aemos-aqua" />,
      benefits: ["Komisyonsuz ticaret", "Blokzincir güvenliği", "Peer-to-peer"],
      color: "from-green-900/20 to-aemos-navy/20",
      id: "p2p-energy"
    },
    {
      title: "CBAM & ESG Uyumu",
      subtitle: "Otomatik Karbon Raporlama",
      description: "AB CBAM gereksinimlerine otomatik uyum ve ESG raporlama",
      icon: <Shield className="w-8 h-8 text-aemos-aqua" />,
      benefits: ["AB uyumu", "Otomatik raporlama", "ESG sertifikasyonu"],
      color: "from-purple-900/20 to-aemos-navy/20",
      id: "cbam-compliance"
    },
    {
      title: "Enerji Verimliliği",
      subtitle: "AI Destekli Optimizasyon",
      description: "Yapay zeka ile enerji tüketimini optimize edin",
      icon: <TrendingUp className="w-8 h-8 text-aemos-aqua" />,
      benefits: ["%30 maliyet azaltma", "AI önerileri", "Gerçek zamanlı izleme"],
      color: "from-orange-900/20 to-aemos-navy/20",
      id: "energy-efficiency"
    },
    {
      title: "Sürdürülebilirlik",
      subtitle: "Karbon Ayak İzi Yönetimi",
      description: "Karbon emisyonlarınızı izleyin ve azaltın",
      icon: <Globe className="w-8 h-8 text-aemos-aqua" />,
      benefits: ["Karbon izleme", "Emisyon azaltma", "Sürdürülebilir üretim"],
      color: "from-green-900/20 to-aemos-navy/20",
      id: "sustainability"
    },
    {
      title: "Yasal Uyumluluk",
      subtitle: "Düzenleyici Raporlama",
      description: "Tüm yasal gereksinimleri otomatik olarak karşılayın",
      icon: <FileText className="w-8 h-8 text-aemos-aqua" />,
      benefits: ["Yasal uyum", "Otomatik raporlar", "Denetim hazırlığı"],
      color: "from-gray-900/20 to-aemos-navy/20",
      id: "compliance"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      <Helmet>
        <title>Çözümler - AEMOS Voltura | Endüstriyel Enerji Yönetimi</title>
        <meta name="description" content="Reaktif güç optimizasyonu, P2P enerji ticareti, CBAM uyumu ve daha fazlası. Kapsamlı endüstriyel enerji çözümleri." />
        <meta name="keywords" content="reaktif güç, P2P enerji, CBAM, ESG, enerji verimliliği, sürdürülebilirlik" />
      </Helmet>

      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-gray-900 via-aemos-navy to-gray-900">
        <div className="container mx-auto px-6">
          <div className="flex items-center mb-8">
            <Link href="/" className="flex items-center text-aemos-aqua hover:text-white transition-colors mr-4">
              <ArrowLeft className="w-5 h-5 mr-2" />
              Ana Sayfaya Dön
            </Link>
          </div>
          
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Kapsamlı Enerji
              <span className="text-aemos-aqua block">Çözümleri</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Endüstriyel tesisleriniz için eksiksiz enerji yönetimi çözümleri. 
              Maliyetleri azaltın, verimliliği artırın, yasal uyumu sağlayın.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {solutions.map((solution, index) => (
              <div key={index} className={`bg-gradient-to-br ${solution.color} backdrop-blur-sm rounded-xl p-8 border border-gray-700/50 hover:border-aemos-aqua/50 transition-all duration-300 group`}>
                <div className="flex items-center mb-6">
                  <div className="bg-aemos-aqua/20 p-3 rounded-lg mr-4 group-hover:bg-aemos-aqua/30 transition-colors">
                    {solution.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{solution.title}</h3>
                    <p className="text-aemos-aqua text-sm">{solution.subtitle}</p>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-6">{solution.description}</p>
                
                <div className="space-y-2">
                  {solution.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-300">
                      <div className="w-2 h-2 bg-aemos-aqua rounded-full mr-3"></div>
                      {benefit}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Solutions */}
      <div id="reactive-power">
        <ReactivePowerSolution />
      </div>
      
      <div id="p2p-energy">
        <P2PEnergyTrading />
      </div>
      
      <div id="cbam-compliance">
        <CBAMCompliance />
      </div>

      {/* CTA Section */}
      <section className="py-20 bg-aemos-navy">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Hangi Çözümle Başlamak İstiyorsunuz?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Uzmanlarımız size en uygun çözümü belirlemek için ücretsiz analiz yapıyor.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="bg-aemos-aqua hover:bg-aemos-aqua/90 text-aemos-navy font-bold py-4 px-8 rounded-lg transition-all duration-300">
              Ücretsiz Analiz Al
            </button>
            <button className="border border-aemos-aqua text-aemos-aqua hover:bg-aemos-aqua/10 font-bold py-4 px-8 rounded-lg transition-all duration-300">
              Demo Talep Et
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}