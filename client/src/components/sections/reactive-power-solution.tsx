import { Zap, Shield, TrendingDown, CheckCircle } from "lucide-react";

export default function ReactivePowerSolution() {
  const benefits = [
    "Reaktif güç cezalarını %100 önler",
    "Otonom kompanzasyon kontrolü",
    "Gerçek zamanlı güç faktörü izleme",
    "Tahmine dayalı ceza uyarı sistemi",
    "Kendini ödeyen yatırım modeli"
  ];

  const stats = [
    {
      label: "Ortalama Tasarruf",
      value: "₺45K",
      period: "/ ay",
      icon: TrendingDown
    },
    {
      label: "Yatırım Geri Dönüş",
      value: "6-8",
      period: "ay",
      icon: Shield
    },
    {
      label: "Sistem Verimliliği",
      value: "%99.2",
      period: "uptime",
      icon: Zap
    }
  ];

  return (
    <section id="reactive-power" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        
        {/* Başlık ve Açıklama */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Reaktif Güç Ceza Önleme Sistemi
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Öngörülemeyen reaktif ceza faturalarından kurtulun. 
            Otonom kompanzasyon kontrolü ile maliyetlerinizi sıfırlayın.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          
          {/* Sol Taraf: Problem ve Çözüm */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">
              Sorun: Öngörülemeyen Yüksek Cezalar
            </h3>
            
            <div className="space-y-6 mb-8">
              <div className="bg-red-900/20 border border-red-700/50 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-red-400 mb-3">Tipik Fabrika Senaryosu</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>• Aylık elektrik faturası: ₺500,000</li>
                  <li>• Reaktif güç cezası: ₺75,000 (ani artış)</li>
                  <li>• Yıllık beklenmeyen maliyet: ₺900,000</li>
                  <li>• Manuel takip zorluğu ve geç müdahale</li>
                </ul>
              </div>
              
              <div className="bg-aemos-aqua/10 border border-aemos-aqua/30 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-aemos-aqua mb-3">AEMOS Voltura Çözümü</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>• Saniyede 1000x güç faktörü ölçümü</li>
                  <li>• Makine öğrenmesi ile ceza tahmini</li>
                  <li>• Otonom kapasitör bank kontrolü</li>
                  <li>• %99+ ceza önleme garantisi</li>
                </ul>
              </div>
            </div>

            {/* Faydalar */}
            <h4 className="text-lg font-semibold text-white mb-4">Temel Faydalar</h4>
            <div className="space-y-3">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-aemos-aqua mr-3 flex-shrink-0" />
                  <span className="text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Sağ Taraf: Sistem Görseli ve Metrikler */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">
              Sistem Performansı
            </h3>
            
            {/* Metrikler */}
            <div className="grid grid-cols-1 gap-6 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 flex items-center">
                  <div className="bg-aemos-aqua/20 p-3 rounded-lg mr-4">
                    <stat.icon className="w-6 h-6 text-aemos-aqua" />
                  </div>
                  <div>
                    <div className="flex items-baseline">
                      <span className="text-3xl font-bold text-white">{stat.value}</span>
                      <span className="text-lg text-gray-400 ml-1">{stat.period}</span>
                    </div>
                    <p className="text-sm text-gray-400">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Sistem Diyagramı */}
            <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-700/50">
              <h4 className="text-lg font-semibold text-white mb-4">Sistem Mimarisi</h4>
              <div className="space-y-4">
                <div className="flex items-center justify-between py-2 border-b border-gray-700/50">
                  <span className="text-gray-300">Sensör Katmanı</span>
                  <span className="text-aemos-aqua text-sm">MQTT → Kafka</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-gray-700/50">
                  <span className="text-gray-300">AI Analiz Motoru</span>
                  <span className="text-aemos-aqua text-sm">ML Prediction</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-gray-700/50">
                  <span className="text-gray-300">Kontrol Katmanı</span>
                  <span className="text-aemos-aqua text-sm">Autonomous Control</span>
                </div>
                <div className="flex items-center justify-between py-2">
                  <span className="text-gray-300">Kompanzasyon</span>
                  <span className="text-aemos-aqua text-sm">Capacitor Banks</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ROI Hesaplama */}
        <div className="bg-aemos-aqua/10 rounded-xl p-8 border border-aemos-aqua/30 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Yatırım Analizi
          </h3>
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div>
              <p className="text-aemos-aqua text-sm font-semibold mb-2">Yıllık Ceza Maliyeti</p>
              <p className="text-3xl font-bold text-white">₺900K</p>
            </div>
            <div>
              <p className="text-aemos-aqua text-sm font-semibold mb-2">Sistem Maliyeti</p>
              <p className="text-3xl font-bold text-white">₺450K</p>
            </div>
            <div>
              <p className="text-aemos-aqua text-sm font-semibold mb-2">Geri Dönüş Süresi</p>
              <p className="text-3xl font-bold text-white">6 Ay</p>
            </div>
          </div>
          <button className="bg-aemos-aqua hover:bg-aemos-aqua/90 text-aemos-navy font-bold py-4 px-8 rounded-lg transition-all duration-300 text-lg">
            Ücretsiz Analiz Talep Et
          </button>
        </div>

      </div>
    </section>
  );
}