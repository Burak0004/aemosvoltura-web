import { useState } from "react";
import { Reveal } from "@/utils/scrollAnimations";
import { Calculator, TrendingUp, Zap, DollarSign } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function ROICalculator() {
  const [monthlyBill, setMonthlyBill] = useState([50000]);
  const [reactivePenalty, setReactivePenalty] = useState([8000]);
  const [rooftopCapacity, setRooftopCapacity] = useState([100]);
  const [showResults, setShowResults] = useState(false);

  const calculateSavings = () => {
    const bill = monthlyBill[0];
    const penalty = reactivePenalty[0];
    const capacity = rooftopCapacity[0];
    
    // Reaktif güç tasarrufu (yıllık)
    const reactiveSavings = penalty * 12 * 0.85; // %85 azalma
    
    // Enerji optimizasyonu tasarrufu (yıllık)
    const energySavings = bill * 12 * 0.15; // %15 tasarruf
    
    // P2P gelir potansiyeli (yıllık)
    const p2pRevenue = capacity * 0.40 * 365 * 0.7; // kWh başına 0.40 TL, %70 verimlilik
    
    return {
      reactiveSavings,
      energySavings,
      p2pRevenue,
      totalSavings: reactiveSavings + energySavings + p2pRevenue,
      paybackMonths: Math.ceil(35000 / ((reactiveSavings + energySavings + p2pRevenue) / 12))
    };
  };

  const savings = calculateSavings();

  return (
    <section id="roi-calculator" className="py-20 bg-aemos-light-gray">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-aemos-navy mb-6">
                ROI <span className="text-aemos-aqua">Hesaplayıcısı</span>
              </h2>
              <p className="text-xl text-aemos-gray max-w-3xl mx-auto">
                Tesisinizdeki potansiyel tasarruf ve gelir fırsatlarını keşfedin. 
                Basit bilgilerinizi girerek AEMOS Voltura'nın size sağlayacağı faydaları görün.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Hesaplayıcı Girişleri */}
            <Reveal delay={0.1}>
              <Card className="aemos-card">
                <CardHeader>
                  <CardTitle className="text-aemos-navy flex items-center">
                    <Calculator className="w-6 h-6 mr-2 text-aemos-aqua" />
                    Tesis Bilgileriniz
                  </CardTitle>
                  <CardDescription>
                    Mevcut enerji durumunuzu değerlendirmek için temel bilgileri girin
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <label className="text-aemos-navy font-medium mb-2 block">
                      Ortalama Aylık Elektrik Faturası
                    </label>
                    <div className="mb-4">
                      <Slider
                        value={monthlyBill}
                        onValueChange={setMonthlyBill}
                        max={200000}
                        min={10000}
                        step={5000}
                        className="w-full"
                      />
                      <div className="flex justify-between text-sm text-aemos-gray mt-1">
                        <span>10,000₺</span>
                        <span className="font-bold text-aemos-navy">
                          {monthlyBill[0].toLocaleString()}₺
                        </span>
                        <span>200,000₺</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="text-aemos-navy font-medium mb-2 block">
                      Aylık Reaktif Güç Ceza Tutarı
                    </label>
                    <div className="mb-4">
                      <Slider
                        value={reactivePenalty}
                        onValueChange={setReactivePenalty}
                        max={25000}
                        min={0}
                        step={500}
                        className="w-full"
                      />
                      <div className="flex justify-between text-sm text-aemos-gray mt-1">
                        <span>0₺</span>
                        <span className="font-bold text-aemos-navy">
                          {reactivePenalty[0].toLocaleString()}₺
                        </span>
                        <span>25,000₺</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="text-aemos-navy font-medium mb-2 block">
                      Çatı Güneş Enerjisi Kapasitesi (kW)
                    </label>
                    <div className="mb-4">
                      <Slider
                        value={rooftopCapacity}
                        onValueChange={setRooftopCapacity}
                        max={1000}
                        min={0}
                        step={25}
                        className="w-full"
                      />
                      <div className="flex justify-between text-sm text-aemos-gray mt-1">
                        <span>0 kW</span>
                        <span className="font-bold text-aemos-navy">
                          {rooftopCapacity[0]} kW
                        </span>
                        <span>1,000 kW</span>
                      </div>
                    </div>
                  </div>

                  <Button 
                    onClick={() => setShowResults(true)}
                    className="aemos-button-accent w-full"
                  >
                    Tasarruf Potansiyelini Hesapla
                  </Button>
                </CardContent>
              </Card>
            </Reveal>

            {/* Sonuçlar */}
            <Reveal delay={0.2}>
              <Card className="aemos-card">
                <CardHeader>
                  <CardTitle className="text-aemos-navy flex items-center">
                    <TrendingUp className="w-6 h-6 mr-2 text-aemos-green" />
                    Tasarruf Potansiyeli
                  </CardTitle>
                  <CardDescription>
                    AEMOS Voltura ile elde edebileceğiniz yıllık faydalar
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {showResults ? (
                    <div className="space-y-4">
                      <div className="bg-aemos-light-blue/20 p-4 rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-aemos-navy font-medium">Reaktif Güç Tasarrufu</span>
                          <span className="text-aemos-aqua font-bold">
                            {savings.reactiveSavings.toLocaleString()}₺
                          </span>
                        </div>
                        <div className="text-sm text-aemos-gray">
                          Otomatik reaktif güç kontrolü ile %85 azalma
                        </div>
                      </div>

                      <div className="bg-aemos-light-blue/20 p-4 rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-aemos-navy font-medium">Enerji Optimizasyonu</span>
                          <span className="text-aemos-green font-bold">
                            {savings.energySavings.toLocaleString()}₺
                          </span>
                        </div>
                        <div className="text-sm text-aemos-gray">
                          AI dijital ikiz ile %15 verimlilik artışı
                        </div>
                      </div>

                      <div className="bg-aemos-light-blue/20 p-4 rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-aemos-navy font-medium">P2P Enerji Geliri</span>
                          <span className="text-aemos-navy font-bold">
                            {savings.p2pRevenue.toLocaleString()}₺
                          </span>
                        </div>
                        <div className="text-sm text-aemos-gray">
                          Fazla enerji satışından ek gelir
                        </div>
                      </div>

                      <div className="border-t border-aemos-light-blue/30 pt-4">
                        <div className="flex items-center justify-between text-xl font-bold">
                          <span className="text-aemos-navy">Toplam Yıllık Fayda</span>
                          <span className="text-aemos-aqua">
                            {savings.totalSavings.toLocaleString()}₺
                          </span>
                        </div>
                        <div className="text-sm text-aemos-gray mt-2">
                          Geri ödeme süresi: ~{savings.paybackMonths} ay
                        </div>
                      </div>

                      <div className="bg-aemos-gradient p-4 rounded-lg text-white text-center">
                        <DollarSign className="w-8 h-8 mx-auto mb-2" />
                        <div className="text-lg font-bold">
                          ROI: %{((savings.totalSavings / 35000) * 100).toFixed(0)}
                        </div>
                        <div className="text-sm opacity-90">
                          İlk yıl yatırım geri dönüşü
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center py-8">
                      <Calculator className="w-16 h-16 text-aemos-light-blue mx-auto mb-4" />
                      <p className="text-aemos-gray">
                        Soldaki bilgileri girdikten sonra hesapla butonuna tıklayın
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </Reveal>
          </div>

          {/* CTA Bölümü */}
          <Reveal delay={0.3}>
            <div className="text-center mt-16">
              <p className="text-lg text-aemos-gray mb-6">
                Hesaplamalarınızı detaylı olarak değerlendirmek için demo talep edin
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button className="aemos-button-accent">
                  <Zap className="w-5 h-5 mr-2" />
                  Ücretsiz Demo Talep Et
                </Button>
                <Button variant="outline" className="border-aemos-aqua text-aemos-aqua hover:bg-aemos-aqua hover:text-white">
                  Teknik Ekiple Görüş
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}