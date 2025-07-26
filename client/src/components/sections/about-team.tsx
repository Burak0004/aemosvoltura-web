import { Card, CardContent } from "@/components/ui/card";
import { UserCheck, Code, TrendingUp, Brain } from "lucide-react";
import { team } from "@/data/team";

const iconMap = {
  userCheck: UserCheck,
  code: Code,
  trendingUp: TrendingUp,
  brain: Brain,
};

export default function AboutTeam() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Takımımız <span className="text-gradient">& Vizyonumuz</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Endüstriyel IoT, yapay zeka ve enerji sektöründe köklü deneyime sahip 
            uzman ekibimiz ile Türkiye'nin enerji dönüşümüne öncülük ediyoruz.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <Card className="bg-white shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Misyonumuz</h3>
                <p className="text-slate-600 leading-relaxed">
                  Türkiye'nin sanayi kuruluşlarını, karbon nötr geleceğe hazırlarken 
                  rekabet güçlerini artırmak ve operasyonel verimliliği maksimize etmek.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Vizyonumuz</h3>
                <p className="text-slate-600 leading-relaxed">
                  2030 yılına kadar Türkiye'nin önde gelen endüstriyel enerji yönetimi 
                  platformu olmak ve bölgesel genişleme ile global pazarda yer almak.
                </p>
              </CardContent>
            </Card>
            
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-voltura-green">15+</div>
                <div className="text-sm text-slate-600">Uzman Ekip</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-voltura-blue">5+</div>
                <div className="text-sm text-slate-600">Ar-Ge Yılı</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-voltura-green">50+</div>
                <div className="text-sm text-slate-600">Proje Deneyimi</div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {team.map((member, index) => {
              const IconComponent = iconMap[member.iconName as keyof typeof iconMap];
              return (
                <Card key={index} className="bg-white shadow-lg text-center">
                  <CardContent className="p-6">
                    <div className={`w-20 h-20 ${member.color} rounded-full mx-auto mb-4 flex items-center justify-center text-white`}>
                      <IconComponent className="w-8 h-8" />
                    </div>
                    <h4 className="text-lg font-bold text-slate-900 mb-2">{member.name}</h4>
                    <p className="text-slate-600 text-sm mb-2">{member.role}</p>
                    <p className="text-slate-500 text-xs">{member.expertise}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
