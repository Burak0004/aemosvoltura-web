import { TrendingUp, Users, Shield, Award, ExternalLink } from "lucide-react";

export default function InvestorPortal() {
  const metrics = [
    {
      label: "Aktif Tesisler",
      value: "24+",
      growth: "+150% (6 ay)",
      icon: Shield
    },
    {
      label: "Yönetilen Enerji",
      value: "45 GWh",
      growth: "+200% (6 ay)",
      icon: TrendingUp
    },
    {
      label: "Toplam Tasarruf",
      value: "₺12.5M",
      growth: "Son 12 ay",
      icon: Award
    },
    {
      label: "Müşteri Retention",
      value: "94%",
      growth: "Sektör ort. %76",
      icon: Users
    }
  ];

  const keyPoints = [
    {
      title: "Savunulabilir Teknolojik Üstünlük",
      description: "10+ patent başvurusu ile korunan kWh-NFT teknolojisi ve mikroservis mimarisi"
    },
    {
      title: "Büyük Adreslenebilir Pazar",
      description: "Türkiye'de 45,000+ endüstriyel tesis, AB CBAM ile $15B+ uyum pazarı"
    },
    {
      title: "Kanıtlanmış Ürün-Pazar Uyumu",
      description: "€35K ARR per customer, 18 ay payback period, 85% retention oranı"
    },
    {
      title: "Güçlü Ekip ve Yürütme",
      description: "Siemens, EPDK ve McKinsey geçmişli kurucu ekip, 15+ yıl sektör deneyimi"
    }
  ];

  return (
    <section id="investors" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        
        {/* Başlık */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Yatırımcı Portalı
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Türkiye'nin ilk endüstriyel EaaS (Energy as a Service) platformu. 
            €2.5M Series A ile 48 müşteri pipeline hedefiyle büyüyoruz.
          </p>
        </div>

        {/* Metrikler */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {metrics.map((metric, index) => (
            <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-aemos-aqua/20 rounded-lg mb-4">
                <metric.icon className="w-6 h-6 text-aemos-aqua" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">{metric.value}</h3>
              <p className="text-sm text-gray-400 mb-1">{metric.label}</p>
              <p className="text-xs text-aemos-aqua font-semibold">{metric.growth}</p>
            </div>
          ))}
        </div>

        {/* Yatırım Tezi */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          
          {/* Sol Taraf: Güçlü Yönler */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8">Yatırım Tezi</h3>
            <div className="space-y-6">
              {keyPoints.map((point, index) => (
                <div key={index} className="bg-gray-800/30 rounded-lg p-6 border border-gray-700/50">
                  <h4 className="text-lg font-semibold text-aemos-aqua mb-3">{point.title}</h4>
                  <p className="text-gray-300 leading-relaxed">{point.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Sağ Taraf: Finansal Projeksiyon */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8">Finansal Projeksiyon</h3>
            
            {/* ARR Growth Chart Area */}
            <div className="bg-gray-800/30 rounded-lg p-6 border border-gray-700/50 mb-6">
              <h4 className="text-lg font-semibold text-white mb-4">ARR Büyüme Hedefi</h4>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">2024 (Mevcut)</span>
                  <span className="text-aemos-aqua font-semibold">€420K ARR</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">2025 (Hedef)</span>
                  <span className="text-aemos-aqua font-semibold">€1.4M ARR</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">2026 (Hedef)</span>
                  <span className="text-aemos-aqua font-semibold">€4.2M ARR</span>
                </div>
              </div>
            </div>

            {/* Funding Kullanım Planı */}
            <div className="bg-gray-800/30 rounded-lg p-6 border border-gray-700/50">
              <h4 className="text-lg font-semibold text-white mb-4">€2.5M Funding Kullanımı</h4>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-300">Satış & Pazarlama</span>
                  <span className="text-aemos-aqua">%45</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">R&D & Ürün</span>
                  <span className="text-aemos-aqua">%35</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Operasyonel</span>
                  <span className="text-aemos-aqua">%20</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Bölümü */}
        <div className="text-center bg-aemos-aqua/10 rounded-xl p-8 border border-aemos-aqua/30">
          <h3 className="text-2xl font-bold text-white mb-4">
            Yatırım Fırsatını Değerlendirin
          </h3>
          <p className="text-lg text-gray-300 mb-6">
            Detaylı finansal projeksiyonlar, pitch deck ve due diligence materyalleri için iletişime geçin.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-aemos-aqua hover:bg-aemos-aqua/90 text-aemos-navy font-bold py-3 px-8 rounded-lg transition-all duration-300">
              Pitch Deck İndir
            </button>
            <button className="bg-transparent border border-aemos-aqua text-aemos-aqua hover:bg-aemos-aqua hover:text-aemos-navy font-semibold py-3 px-8 rounded-lg transition-all duration-300 flex items-center justify-center">
              Yatırımcı İlişkileri
              <ExternalLink className="ml-2 w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}