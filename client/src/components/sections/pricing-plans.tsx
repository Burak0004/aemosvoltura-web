import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Star } from "lucide-react";

export default function PricingPlans() {
  const plans = [
    {
      name: "Lite",
      description: "KOBİ ve küçük tesisler için",
      price: "₺2.500",
      period: "/ay",
      features: [
        "Reaktif ceza önleme",
        "Temel enerji monitöring",
        "1 Edge Gateway dahil",
        "E-posta destek"
      ],
      popular: false,
      buttonText: "Planı Seç",
      buttonVariant: "outline" as const
    },
    {
      name: "Pro",
      description: "Orta ölçekli işletmeler için",
      price: "₺7.500",
      period: "/ay",
      features: [
        "Tüm Lite özellikleri",
        "AI destekli dijital ikiz",
        "P2P enerji ticareti",
        "3 Edge Gateway dahil",
        "Telefon destek"
      ],
      popular: true,
      buttonText: "Planı Seç",
      buttonVariant: "default" as const
    },
    {
      name: "Enterprise",
      description: "Büyük tesisler ve OSB'ler için",
      price: "Özel",
      period: "Fiyat",
      features: [
        "Tüm Pro özellikleri",
        "CBAM/ESG raporlama",
        "Sınırsız Edge Gateway",
        "Özel entegrasyonlar",
        "7/24 premium destek"
      ],
      popular: false,
      buttonText: "İletişime Geç",
      buttonVariant: "secondary" as const
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Fiyatlandırma <span className="text-gradient">Planları</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            İhtiyaçlarınıza göre ölçeklenebilen esnek fiyatlandırma modelleri. 
            SaaS aboneliği veya donanım paketi seçenekleri.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card key={index} className={`shadow-lg ${plan.popular ? 'ring-2 ring-voltura-green relative' : ''}`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-voltura-green text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                    <Star className="w-4 h-4 mr-1" />
                    En Popüler
                  </span>
                </div>
              )}
              
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                  <p className="text-slate-600 mb-4">{plan.description}</p>
                  <div className="text-4xl font-bold text-slate-900 mb-2">
                    {plan.price}
                    <span className="text-lg font-normal text-slate-600">{plan.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="w-5 h-5 text-voltura-green mr-3 flex-shrink-0" />
                      <span className="text-slate-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  variant={plan.buttonVariant}
                  className={`w-full py-3 font-semibold ${
                    plan.popular 
                      ? 'bg-voltura-green hover:bg-voltura-green/90 text-white' 
                      : plan.buttonVariant === 'secondary' 
                        ? 'bg-voltura-blue hover:bg-voltura-blue/90 text-white'
                        : 'border-slate-300 hover:bg-slate-50'
                  }`}
                >
                  {plan.buttonText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
