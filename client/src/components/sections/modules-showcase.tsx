import { ArrowRight, Gauge, Brain, ArrowRightLeft, Shield, FileText, Cpu } from "lucide-react";
import { modules } from "@/data/modules";
import { Reveal } from "@/utils/scrollAnimations";

const iconMap = {
  gauge: Gauge,
  brain: Brain,
  arrowRightLeft: ArrowRightLeft,
  shield: Shield,
  fileText: FileText,
  cpu: Cpu,
};

export default function ModulesShowcase() {
  return (
    <section id="modules" className="bg-muted">
      <div className="container">
        <Reveal>
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
              Platform <span className="text-gradient">Modülleri</span>
            </h2>
            <p className="text-subhero text-gray-600 max-w-2xl mx-auto">
              Modüler mimari ile ihtiyaçlarınıza göre özelleştirilebilen, 
              her biri ayrı değer yaratan entegre çözümler
            </p>
          </div>
        </Reveal>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {modules.map((module, index) => {
            const IconComponent = iconMap[module.iconName as keyof typeof iconMap];
            return (
              <Reveal key={index} delay={index * 0.1}>
                <div className="climate-card p-8">
                  <div className={`w-20 h-20 ${module.color.replace('bg-voltura-green', 'bg-primary').replace('bg-voltura-blue', 'bg-accent')} rounded-2xl flex items-center justify-center mb-6`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{module.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {module.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-primary font-semibold text-lg">{module.metric}</span>
                    <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center transition-all duration-200 hover:bg-gray-200 hover:scale-110">
                      <ArrowRight className="w-5 h-5 text-accent" />
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
