import { Coins, Shield, TrendingUp, Zap, CheckCircle } from "lucide-react";

export default function P2PEnergyTrading() {
  const features = [
    "Blokzincir tabanlı güvenli işlemler",
    "kWh-NFT tokenizasyon teknolojisi",
    "Aracısız, şeffaf enerji ticareti",
    "Gerçek zamanlı piyasa fiyatlandırması",
    "Akıllı kontrat otomasyonu"
  ];

  const benefits = [
    {
      title: "Atıl Varlık Değerlendirme",
      description: "Çatı üstü GES'inizden üretilen fazla enerjiyi boşa harcamak yerine gelir kaynağına dönüştürün.",
      icon: Coins
    },
    {
      title: "Güvenli ve Şeffaf",
      description: "Blokzincir teknolojisi ile her işlem kayıt altına alınır, güvenilir ve izlenebilir ticaret.",
      icon: Shield
    },
    {
      title: "Maksimum Karlılık",
      description: "Aracıları kaldırarak %30 daha yüksek satış fiyatı, piyasa dinamikleri ile optimal fiyatlandırma.",
      icon: TrendingUp
    }
  ];

  return (
    <section id="p2p-energy" className="py-20 bg-[#0A192F]">
      <div className="container mx-auto px-6">
        
        {/* Başlık */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            P2P Enerji Ticareti: Çatınızı Gelir Kapısına Dönüştürün
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Fazla enerjinizi aracısız, güvenli ve karlı bir şekilde satın. 
            Blokzincir teknolojisi ile geleceğin enerji piyasasında yerinizi alın.
          </p>
        </div>

        {/* Ana İçerik */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          
          {/* Sol Taraf: Nasıl Çalışır */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">
              Nasıl Çalışır: kWh-NFT Teknolojisi
            </h3>
            
            <div className="space-y-6 mb-8">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
                <div className="flex items-start">
                  <div className="bg-aemos-aqua/20 p-2 rounded-lg mr-4 flex-shrink-0">
                    <span className="text-aemos-aqua font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Enerji Tokenizasyonu</h4>
                    <p className="text-gray-300">Ürettiğiniz her kWh, blokzincirde benzersiz bir NFT'ye dönüştürülür. Bu token, enerjinizin dijital sertifikasıdır.</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
                <div className="flex items-start">
                  <div className="bg-aemos-aqua/20 p-2 rounded-lg mr-4 flex-shrink-0">
                    <span className="text-aemos-aqua font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Akıllı Piyasa Eşleştirme</h4>
                    <p className="text-gray-300">AI algoritması, satıcı ve alıcıları optimal fiyatta eşleştirir. Coğrafi yakınlık ve iletim maliyeti hesaplanır.</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
                <div className="flex items-start">
                  <div className="bg-aemos-aqua/20 p-2 rounded-lg mr-4 flex-shrink-0">
                    <span className="text-aemos-aqua font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Otomatik Ödeme</h4>
                    <p className="text-gray-300">Akıllı kontrat, enerji teslimatı sonrası ödemeyi otomatik olarak gerçekleştirir. Aracı yok, komisyon yok.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Teknik Özellikler */}
            <h4 className="text-lg font-semibold text-white mb-4">Teknik Üstünlükler</h4>
            <div className="space-y-3">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-aemos-aqua mr-3 flex-shrink-0" />
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Sağ Taraf: Faydalar */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">
              İş Faydaları
            </h3>
            
            <div className="space-y-6 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
                  <div className="flex items-start">
                    <div className="bg-aemos-aqua/20 p-3 rounded-lg mr-4">
                      <benefit.icon className="w-6 h-6 text-aemos-aqua" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">{benefit.title}</h4>
                      <p className="text-gray-300">{benefit.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Gelir Projeksiyonu */}
            <div className="bg-aemos-aqua/10 border border-aemos-aqua/30 rounded-xl p-6">
              <h4 className="text-lg font-semibold text-aemos-aqua mb-4">Gelir Projeksiyonu</h4>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">1 MW Çatı GES Kurulu Güç</span>
                  <span className="text-white font-semibold">Mevcut Durum</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Yıllık Fazla Üretim</span>
                  <span className="text-white">850 MWh</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Şebeke Satış Fiyatı</span>
                  <span className="text-red-400">₺0.35/kWh</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">P2P Ortalama Fiyat</span>
                  <span className="text-aemos-aqua">₺0.52/kWh</span>
                </div>
                <div className="border-t border-gray-700/50 pt-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Yıllık Ek Gelir</span>
                    <span className="text-aemos-aqua font-bold text-xl">₺144,500</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* OSB Özel Bölümü */}
        <div className="bg-gray-800/30 rounded-xl p-8 border border-gray-700/50 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            OSB Yöneticileri için Özel Avantajlar
          </h3>
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div>
              <div className="bg-aemos-aqua/20 p-3 rounded-lg inline-block mb-3">
                <Zap className="w-6 h-6 text-aemos-aqua" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Bölge İçi Optimizasyon</h4>
              <p className="text-gray-300">OSB içindeki fabrikalar arası enerji paylaşımı, iletim maliyetlerini minimize eder.</p>
            </div>
            <div>
              <div className="bg-aemos-aqua/20 p-3 rounded-lg inline-block mb-3">
                <Coins className="w-6 h-6 text-aemos-aqua" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Ek Gelir Modeli</h4>
              <p className="text-gray-300">OSB yönetimi için işlem komisyonu ve platform kullanım geliri imkanı.</p>
            </div>
            <div>
              <div className="bg-aemos-aqua/20 p-3 rounded-lg inline-block mb-3">
                <Shield className="w-6 h-6 text-aemos-aqua" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Şebeke Stabilizasyonu</h4>
              <p className="text-gray-300">Yerel enerji dengesini koruyarak şebeke yatırım maliyetlerini düşürür.</p>
            </div>
          </div>
          <button className="bg-aemos-aqua hover:bg-aemos-aqua/90 text-aemos-navy font-bold py-4 px-8 rounded-lg transition-all duration-300 text-lg">
            P2P Enerji Ticareti Demo
          </button>
        </div>

      </div>
    </section>
  );
}