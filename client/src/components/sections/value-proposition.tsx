import { Reveal } from "@/utils/scrollAnimations";
import { TrendingDown, TrendingUp, Shield, Calculator, Zap, Target } from "lucide-react";
import { useSmoothScroll } from "@/hooks/use-smooth-scroll";

export default function ValueProposition() {
  const { scrollToSection } = useSmoothScroll();

  return (
    <section id="value-proposition" className="py-20 bg-white">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-aemos-navy mb-6">
                Üç Sütunlu <span className="text-aemos-aqua">Değer Önerisi</span>
              </h2>
              <p className="text-xl text-aemos-gray max-w-3xl mx-auto">
                AEMOS Voltura ile endüstriyel enerji yönetiminde üç temel avantajı bir arada yaşayın
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Maliyet Minimize Et */}
            <Reveal delay={0.1}>
              <div className="card-premium p-8 h-full stagger-fade-in">
                <div className="flex items-center justify-center w-16 h-16 bg-aemos-aqua/10 rounded-lg mb-6">
                  <TrendingDown className="w-8 h-8 text-aemos-aqua" />
                </div>
                <h3 className="text-2xl font-bold text-aemos-navy mb-4">
                  Maliyetleri <span className="text-aemos-aqua">Minimize Et</span>
                </h3>
                <p className="text-aemos-gray text-lg mb-6">
                  Öngörülemeyen reaktif cezalara son verin. Yapay zeka motorumuz, platformun maliyetini kendisi ödesin.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center">
                    <Calculator className="w-5 h-5 text-aemos-green mr-3" />
                    <span className="text-aemos-navy">Otonom Reaktif Güç Yönetimi</span>
                  </div>
                  <div className="flex items-center">
                    <Zap className="w-5 h-5 text-aemos-green mr-3" />
                    <span className="text-aemos-navy">Gerçek Zamanlı Ceza Önleme</span>
                  </div>
                  <div className="flex items-center">
                    <Target className="w-5 h-5 text-aemos-green mr-3" />
                    <span className="text-aemos-navy">%30'a Varan Tasarruf</span>
                  </div>
                </div>

                <div className="bg-aemos-light-gray p-4 rounded-lg mb-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-aemos-navy mb-2">₺450,000</div>
                    <div className="text-sm text-aemos-gray">Ortalama Yıllık Tasarruf</div>
                  </div>
                </div>

                <button
                  onClick={() => scrollToSection('solutions')}
                  className="btn-primary w-full py-3 rounded-xl font-bold"
                >
                  Reaktif Ceza Çözümü
                </button>
              </div>
            </Reveal>

            {/* Yeni Gelir Kaynakları */}
            <Reveal delay={0.2}>
              <div className="card-premium p-8 h-full stagger-fade-in">
                <div className="flex items-center justify-center w-16 h-16 bg-aemos-green/10 rounded-lg mb-6">
                  <TrendingUp className="w-8 h-8 text-aemos-green" />
                </div>
                <h3 className="text-2xl font-bold text-aemos-navy mb-4">
                  Yeni Gelir <span className="text-aemos-green">Kaynakları Yarat</span>
                </h3>
                <p className="text-aemos-gray text-lg mb-6">
                  Çatınızı bir gelir kapısına dönüştürün. Atıl durumdaki varlıklarınızı gelire çevirin.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center">
                    <Calculator className="w-5 h-5 text-aemos-aqua mr-3" />
                    <span className="text-aemos-navy">P2P Enerji Ticareti</span>
                  </div>
                  <div className="flex items-center">
                    <Zap className="w-5 h-5 text-aemos-aqua mr-3" />
                    <span className="text-aemos-navy">Blockchain kWh-NFT</span>
                  </div>
                  <div className="flex items-center">
                    <Target className="w-5 h-5 text-aemos-aqua mr-3" />
                    <span className="text-aemos-navy">30 Saniye Eşleşme</span>
                  </div>
                </div>

                <div className="bg-aemos-light-gray p-4 rounded-lg mb-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-aemos-green mb-2">₺180,000</div>
                    <div className="text-sm text-aemos-gray">Ek Gelir Potansiyeli</div>
                  </div>
                </div>

                <button
                  onClick={() => scrollToSection('platform')}
                  className="btn-secondary w-full py-3 rounded-xl font-bold"
                >
                  P2P Ticaret Platformu
                </button>
              </div>
            </Reveal>

            {/* Stratejik Uyumluluk */}
            <Reveal delay={0.3}>
              <div className="card-premium p-8 h-full stagger-fade-in">
                <div className="flex items-center justify-center w-16 h-16 bg-aemos-navy/10 rounded-lg mb-6">
                  <Shield className="w-8 h-8 text-aemos-navy" />
                </div>
                <h3 className="text-2xl font-bold text-aemos-navy mb-4">
                  Stratejik <span className="text-aemos-navy">Uyumluluğu Otomatize Et</span>
                </h3>
                <p className="text-aemos-gray text-lg mb-6">
                  Avrupa Birliği pazarına giriş pasaportunuzdur. Excel tablolarına değil, ihracatınıza odaklanın.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center">
                    <Calculator className="w-5 h-5 text-aemos-navy mr-3" />
                    <span className="text-aemos-navy">CBAM Raporlama</span>
                  </div>
                  <div className="flex items-center">
                    <Zap className="w-5 h-5 text-aemos-navy mr-3" />
                    <span className="text-aemos-navy">ESG Compliance</span>
                  </div>
                  <div className="flex items-center">
                    <Target className="w-5 h-5 text-aemos-navy mr-3" />
                    <span className="text-aemos-navy">Otomatik Raporlama</span>
                  </div>
                </div>

                <div className="bg-aemos-light-gray p-4 rounded-lg mb-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-aemos-navy mb-2">2028</div>
                    <div className="text-sm text-aemos-gray">CBAM Tam Uygulanması</div>
                  </div>
                </div>

                <button
                  onClick={() => scrollToSection('solutions')}
                  className="btn-secondary w-full py-3 rounded-xl font-bold text-aemos-navy"
                >
                  CBAM Çözümü
                </button>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}