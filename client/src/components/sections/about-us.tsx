import { Reveal } from "@/utils/scrollAnimations";
import { Target, Users, Award, Zap } from "lucide-react";

export default function AboutUs() {
  const stats = [
    {
      number: "2021",
      label: "Kuruluş Yılı",
      description: "İnovasyon odaklı başlangıç"
    },
    {
      number: "50+",
      label: "Uzman Ekip",
      description: "Enerji ve teknoloji alanında"
    },
    {
      number: "₺35K",
      label: "Müşteri Başına ARR",
      description: "Ortalama yıllık gelir"
    },
    {
      number: "%85",
      label: "Müşteri Memnuniyeti",
      description: "Yüksek sadakat oranı"
    }
  ];

  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Misyonumuz",
      description: "Türkiye'nin endüstriyel enerji verimliliğini artırarak sürdürülebilir geleceğe katkı sağlamak."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Vizyonumuz",
      description: "Endüstriyel enerji yönetiminde Avrupa'nın lider teknoloji platformu olmak."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Değerlerimiz",
      description: "İnovasyon, sürdürülebilirlik, müşteri odaklılık ve teknolojik mükemmellik."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Yaklaşımımız",
      description: "AI, IoT ve blockchain teknolojilerini endüstriyel ihtiyaçlarla buluşturuyoruz."
    }
  ];

  return (
    <section id="about" className="bg-aemos-light-gray py-20">
      <div className="container px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-aemos-navy mb-6">
              Hakkımızda
            </h2>
            <p className="text-xl text-aemos-gray max-w-3xl mx-auto">
              AEMOS Voltura, Türkiye'nin endüstriyel enerji verimliliğini 
              artırmak için geliştirilmiş yenilikçi bir EaaS platformudur.
            </p>
          </div>
        </Reveal>

        {/* İstatistikler */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <Reveal key={index} delay={index * 0.1}>
              <div className="aemos-card text-center">
                <div className="text-4xl font-black text-aemos-aqua mb-2">{stat.number}</div>
                <div className="text-aemos-navy font-bold mb-1">{stat.label}</div>
                <div className="text-aemos-gray text-sm">{stat.description}</div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Değerler */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((value, index) => (
            <Reveal key={index} delay={index * 0.1}>
              <div className="aemos-card">
                <div className="flex items-start">
                  <div className="text-aemos-aqua mr-4 flex-shrink-0">
                    {value.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-aemos-navy mb-3">{value.title}</h3>
                    <p className="text-aemos-gray leading-relaxed">{value.description}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.6}>
          <div className="text-center mt-16">
            <div className="aemos-card max-w-3xl mx-auto bg-gradient-to-br from-aemos-navy to-slate-900 text-white">
              <h3 className="text-3xl font-bold mb-4">
                Geleceğin Enerji Yönetimi
              </h3>
              <p className="text-xl mb-8 opacity-90">
                Teknoloji ile sürdürülebilirliği birleştiriyoruz
              </p>
              <button className="bg-aemos-aqua hover:bg-aemos-aqua/90 text-aemos-navy px-8 py-4 rounded-lg font-bold transition-all duration-300">
                Ekibimizle Tanışın
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}