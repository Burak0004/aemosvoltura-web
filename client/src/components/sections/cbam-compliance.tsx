import { FileText, Globe, Shield, TrendingUp, CheckCircle, AlertTriangle } from "lucide-react";

export default function CBAMCompliance() {
  const challenges = [
    "Karmaşık veri toplama süreci",
    "Manuel Excel tabloları ve insan hatası riski",
    "Zaman alıcı raporlama (30+ saat/ay)",
    "AB regülasyonlarına uyum belirsizliği",
    "Cezai yaptırım riski (€50/ton CO2)"
  ];

  const solutions = [
    "Otomatik karbon emisyon hesaplama",
    "GRI/SASB uyumlu raporlama",
    "API entegrasyonu ile gerçek zamanlı veriler",
    "AB CBAM gereksinimlerine %100 uyum",
    "Denetim için hazır dokümantasyon"
  ];

  const sectors = [
    {
      name: "Demir-Çelik",
      carbonIntensity: "2.1 ton CO2/ton çelik",
      riskLevel: "Yüksek",
      color: "text-red-400"
    },
    {
      name: "Alüminyum",
      carbonIntensity: "11.5 ton CO2/ton alüminyum",
      riskLevel: "Kritik",
      color: "text-red-500"
    },
    {
      name: "Çimento",
      carbonIntensity: "0.84 ton CO2/ton çimento",
      riskLevel: "Orta",
      color: "text-yellow-400"
    },
    {
      name: "Kimyasal",
      carbonIntensity: "Değişken",
      riskLevel: "Orta-Yüksek",
      color: "text-orange-400"
    }
  ];

  return (
    <section id="cbam-compliance" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        
        {/* Başlık */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            CBAM & ESG Uyum Otomasyonu
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Excel tablolarına değil, ihracatınıza odaklanın. 
            AB pazarına giriş pasaportunuz: otomatik karbon raporlama.
          </p>
        </div>

        {/* CBAM Nedir */}
        <div className="bg-red-900/20 border border-red-700/50 rounded-xl p-8 mb-16">
          <div className="flex items-start">
            <div className="bg-red-700/20 p-3 rounded-lg mr-4">
              <AlertTriangle className="w-6 h-6 text-red-400" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                CBAM: 2026'da Başlıyor, Hazır Olun!
              </h3>
              <p className="text-gray-300 mb-4">
                Avrupa Birliği'nin <strong>Sınırda Karbon Düzenleme Mekanizması (CBAM)</strong>, 
                2026'dan itibaren AB'ye ihracat yapan firmaların karbon emisyonlarını bildirmelerini zorunlu kılıyor.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold text-red-400 mb-2">Riskler</h4>
                  <ul className="space-y-1 text-gray-300">
                    <li>• €50/ton CO2 cezai yaptırım</li>
                    <li>• AB pazarına giriş engeli</li>
                    <li>• Rekabet dezavantajı</li>
                    <li>• Müşteri kaybı riski</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-aemos-aqua mb-2">Fırsatlar</h4>
                  <ul className="space-y-1 text-gray-300">
                    <li>• Düşük karbon sertifikasyonu</li>
                    <li>• Rekabetçi fiyat avantajı</li>
                    <li>• Sürdürülebilir marka imajı</li>
                    <li>• Yeni pazar fırsatları</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Problem vs Çözüm */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          
          {/* Problem */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">
              Mevcut Durum: Manuel ve Riskli Süreç
            </h3>
            
            <div className="space-y-4 mb-8">
              {challenges.map((challenge, index) => (
                <div key={index} className="bg-red-900/20 border border-red-700/50 rounded-lg p-4 flex items-start">
                  <div className="bg-red-700/20 p-1 rounded mr-3 mt-1">
                    <span className="text-red-400 text-xs">✗</span>
                  </div>
                  <span className="text-gray-300">{challenge}</span>
                </div>
              ))}
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
              <h4 className="text-lg font-semibold text-white mb-4">Tipik Senaryo</h4>
              <div className="space-y-3 text-gray-300">
                <div className="flex justify-between">
                  <span>Aylık manuel çalışma saati</span>
                  <span className="text-red-400">32 saat</span>
                </div>
                <div className="flex justify-between">
                  <span>Veri toplama hatası riski</span>
                  <span className="text-red-400">%25</span>
                </div>
                <div className="flex justify-between">
                  <span>Raporlama gecikmesi</span>
                  <span className="text-red-400">2-3 hafta</span>
                </div>
                <div className="flex justify-between">
                  <span>Yıllık operasyonel maliyet</span>
                  <span className="text-red-400">₺180,000</span>
                </div>
              </div>
            </div>
          </div>

          {/* Çözüm */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">
              AEMOS Çözümü: Otomatik ve Güvenilir
            </h3>
            
            <div className="space-y-4 mb-8">
              {solutions.map((solution, index) => (
                <div key={index} className="bg-aemos-aqua/10 border border-aemos-aqua/30 rounded-lg p-4 flex items-start">
                  <div className="bg-aemos-aqua/20 p-1 rounded mr-3 mt-1">
                    <CheckCircle className="w-4 h-4 text-aemos-aqua" />
                  </div>
                  <span className="text-gray-300">{solution}</span>
                </div>
              ))}
            </div>

            <div className="bg-aemos-aqua/10 border border-aemos-aqua/30 rounded-xl p-6">
              <h4 className="text-lg font-semibold text-aemos-aqua mb-4">AEMOS ile Sonuç</h4>
              <div className="space-y-3 text-gray-300">
                <div className="flex justify-between">
                  <span>Otomatik raporlama</span>
                  <span className="text-aemos-aqua">2 saat</span>
                </div>
                <div className="flex justify-between">
                  <span>Veri doğruluğu</span>
                  <span className="text-aemos-aqua">%99.5</span>
                </div>
                <div className="flex justify-between">
                  <span>Gerçek zamanlı rapor</span>
                  <span className="text-aemos-aqua">Anında</span>
                </div>
                <div className="flex justify-between">
                  <span>Yıllık maliyet tasarrufu</span>
                  <span className="text-aemos-aqua">₺165,000</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sektörel Analiz */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Sektörel Karbon Yoğunluğu ve Risk Analizi
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sectors.map((sector, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 text-center">
                <div className="bg-gray-700/50 p-3 rounded-lg inline-block mb-4">
                  <Globe className="w-6 h-6 text-gray-400" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">{sector.name}</h4>
                <p className="text-sm text-gray-300 mb-3">{sector.carbonIntensity}</p>
                <div className={`px-3 py-1 rounded-full text-sm font-semibold ${sector.color} bg-current/20`}>
                  {sector.riskLevel}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Özellikler */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 text-center">
            <div className="bg-aemos-aqua/20 p-3 rounded-lg inline-block mb-4">
              <FileText className="w-6 h-6 text-aemos-aqua" />
            </div>
            <h4 className="text-lg font-semibold text-white mb-3">Otomatik Raporlama</h4>
            <p className="text-gray-300">GRI, SASB ve CBAM standartlarına uygun otomatik raporlar. API entegrasyonu ile gerçek zamanlı veriler.</p>
          </div>
          
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 text-center">
            <div className="bg-aemos-aqua/20 p-3 rounded-lg inline-block mb-4">
              <Shield className="w-6 h-6 text-aemos-aqua" />
            </div>
            <h4 className="text-lg font-semibold text-white mb-3">Uyum Garantisi</h4>
            <p className="text-gray-300">AB CBAM gereksinimlerine %100 uyum. Denetim için hazır dokümantasyon ve yasal destek.</p>
          </div>
          
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 text-center">
            <div className="bg-aemos-aqua/20 p-3 rounded-lg inline-block mb-4">
              <TrendingUp className="w-6 h-6 text-aemos-aqua" />
            </div>
            <h4 className="text-lg font-semibold text-white mb-3">Rekabet Avantajı</h4>
            <p className="text-gray-300">Düşük karbon sertifikasyonu ile AB pazarında rekabet avantajı. Sürdürülebilir marka imajı.</p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-aemos-aqua/10 rounded-xl p-8 border border-aemos-aqua/30">
          <h3 className="text-2xl font-bold text-white mb-4">
            2026'ya Hazır Olun, Avantajı Kaçırmayın
          </h3>
          <p className="text-lg text-gray-300 mb-6">
            Ücretsiz karbon ayak izi analizi ile firmanızın CBAM hazırlık durumunu değerlendirin.
          </p>
          <button className="bg-aemos-aqua hover:bg-aemos-aqua/90 text-aemos-navy font-bold py-4 px-8 rounded-lg transition-all duration-300 text-lg">
            Ücretsiz Karbon Analizi
          </button>
        </div>

      </div>
    </section>
  );
}