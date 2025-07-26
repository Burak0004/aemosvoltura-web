import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Factory, Hammer } from "lucide-react";

export default function SuccessStories() {
  const stories = [
    {
      icon: <Factory className="w-6 h-6" />,
      title: "Tekstil OSB",
      location: "Denizli, Türkiye",
      metrics: [
        { value: "%28", label: "Enerji Tasarrufu" },
        { value: "%85", label: "Ceza Azalması" },
        { value: "6 Ay", label: "ROI Süresi" }
      ],
      testimonial: "AEMOS Voltura'nın AI destekli optimizasyon motoru sayesinde, 50 fabrikamızın enerji tüketimini merkezi olarak yönetebiliyoruz. Reaktif ceza maliyetlerimiz %85 azaldı.",
      name: "Mehmet Kaya",
      role: "Enerji Yöneticisi",
      color: "bg-voltura-green"
    },
    {
      icon: <Hammer className="w-6 h-6" />,
      title: "Demir-Çelik Tesisi",
      location: "Karabük, Türkiye",
      metrics: [
        { value: "%32", label: "Enerji Tasarrufu" },
        { value: "%92", label: "Arıza Öngörüsü" },
        { value: "4.2M₺", label: "Yıllık Tasarruf" }
      ],
      testimonial: "Dijital ikiz teknolojisi ile ekipman arızalarını önceden tespit edebiliyoruz. Plansız duruşlar %90 azaldı ve CBAM raporlaması artık otomatik.",
      name: "Ayşe Demir",
      role: "Fabrika Müdürü",
      color: "bg-voltura-blue"
    }
  ];

  return (
    <section id="case-studies" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Başarı <span className="text-gradient">Hikayeleri</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Türkiye'nin önde gelen sanayi kuruluşlarının AEMOS Voltura ile 
            elde ettiği başarıların gerçek hikayelerini keşfedin.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {stories.map((story, index) => (
            <Card key={index} className="bg-white shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className={`w-16 h-16 ${story.color} rounded-full flex items-center justify-center mr-4 text-white`}>
                    {story.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900">{story.title}</h3>
                    <p className="text-slate-600">{story.location}</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {story.metrics.map((metric, metricIndex) => (
                    <div key={metricIndex} className="text-center">
                      <div className={`text-2xl font-bold ${index === 0 ? 'text-voltura-green' : 'text-voltura-blue'}`}>
                        {metric.value}
                      </div>
                      <div className="text-sm text-slate-600">{metric.label}</div>
                    </div>
                  ))}
                </div>
                
                <p className="text-slate-600 mb-6 leading-relaxed">
                  "{story.testimonial}"
                </p>
                
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-slate-900">{story.name}</div>
                    <div className="text-sm text-slate-600">{story.role}</div>
                  </div>
                  <Button variant="ghost" size="sm" className="text-voltura-blue hover:text-voltura-green">
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
