import { MapPin, Phone, Mail, Clock, Gift, Handshake } from "lucide-react";
import DemoForm from "@/components/ui/demo-form";
import { Reveal } from "@/utils/scrollAnimations";

export default function ContactDemo() {
  const contactInfo = [
    {
      icon: <MapPin className="w-5 h-5" />,
      title: "Adres",
      content: "Teknokent, Ankara, Türkiye",
      color: "bg-primary"
    },
    {
      icon: <Phone className="w-5 h-5" />,
      title: "Telefon",
      content: "+90 312 555 0123",
      color: "bg-accent"
    },
    {
      icon: <Mail className="w-5 h-5" />,
      title: "E-posta",
      content: "info@aemos.com.tr",
      color: "bg-primary"
    }
  ];

  const demoFeatures = [
    {
      icon: <Clock className="w-5 h-5" />,
      text: "30 dk demo"
    },
    {
      icon: <Gift className="w-5 h-5" />,
      text: "Ücretsiz"
    },
    {
      icon: <Handshake className="w-5 h-5" />,
      text: "Uzman desteği"
    }
  ];

  return (
    <section id="contact" className="bg-muted">
      <div className="container">
        <Reveal>
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
              İletişim <span className="text-gradient">& Demo</span>
            </h2>
            <p className="text-subhero text-gray-600 max-w-2xl mx-auto">
              AEMOS Voltura'nın tesisinizdeki potansiyel etkisini keşfetmek için 
              ücretsiz demo talep edin veya uzman ekibimizle iletişime geçin
            </p>
          </div>
        </Reveal>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <Reveal variant="fadeSlideLeft">
            <div className="card-premium card-lift p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Demo Talep Formu</h3>
              <DemoForm />
            </div>
          </Reveal>
          
          <div className="space-y-8">
            <Reveal variant="fadeSlideRight">
              <div className="card-premium card-lift p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">İletişim Bilgileri</h3>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-center">
                      <div className={`w-12 h-12 ${info.color} rounded-xl flex items-center justify-center mr-4 text-white`}>
                        {info.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{info.title}</h4>
                        <p className="text-gray-600">{info.content}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
            
            <Reveal variant="fadeSlideRight" delay={0.2}>
              <div className="climate-card bg-gradient-voltura text-white p-8">
                <h3 className="text-2xl font-bold mb-4">Hemen Başlayın</h3>
                <p className="mb-6 opacity-90">
                  30 dakikalık bir demo ile AEMOS Voltura'nın tesisinizdeki 
                  potansiyel etkisini keşfedin.
                </p>
                <div className="flex items-center space-x-6 flex-wrap gap-4">
                  {demoFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      {feature.icon}
                      <span className="text-sm ml-2">{feature.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
