import { useState } from "react";
import { solutions } from "@/data/solutions";
import { Reveal } from "@/utils/scrollAnimations";
import { ChevronDown } from "lucide-react";

export default function SolutionsGrid() {
  const [selectedSolution, setSelectedSolution] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const topSolutions = solutions.slice(0, 4); // İlk 4 sektör

  return (
    <section id="solutions" className="bg-aemos-light-gray py-16">
      <div className="container px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-aemos-navy mb-6">
              Sektörel <span className="text-aemos-aqua">Çözümler</span>
            </h2>
            <p className="text-xl text-aemos-gray max-w-3xl mx-auto">
              Türkiye'nin enerji yoğun sanayi sektörlerine özel çözümler.
            </p>
          </div>
        </Reveal>
        
        {/* Kompakt Sektör Seçimi */}
        <div className="max-w-4xl mx-auto mb-12">
          <Reveal delay={0.1}>
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="w-full bg-white border-2 border-aemos-aqua/20 rounded-lg px-6 py-4 flex items-center justify-between text-left hover:border-aemos-aqua/40 transition-colors"
              >
                <span className="text-aemos-navy font-medium">
                  {selectedSolution ? selectedSolution.title : "Sektörünüzü seçin"}
                </span>
                <ChevronDown className={`w-5 h-5 text-aemos-aqua transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isDropdownOpen && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-aemos-light-blue/20 rounded-lg shadow-lg z-10 max-h-60 overflow-y-auto">
                  {solutions.map((solution, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setSelectedSolution(solution);
                        setIsDropdownOpen(false);
                      }}
                      className="w-full px-6 py-3 text-left hover:bg-aemos-light-gray/50 transition-colors border-b border-aemos-light-blue/10 last:border-b-0 flex items-center"
                    >
                      <span className="text-2xl mr-3">{solution.icon}</span>
                      <div>
                        <div className="font-medium text-aemos-navy">{solution.title}</div>
                        <div className="text-sm text-aemos-gray">{solution.description}</div>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </Reveal>
        </div>

        {/* Seçilen Sektör Detayı */}
        {selectedSolution && (
          <Reveal delay={0.2}>
            <div className="max-w-4xl mx-auto">
              <div className="aemos-card">
                <div className="flex items-center mb-6">
                  <span className="text-4xl mr-4">{selectedSolution.icon}</span>
                  <div>
                    <h3 className="text-3xl font-bold text-aemos-navy">{selectedSolution.title}</h3>
                    <p className="text-lg text-aemos-gray">{selectedSolution.description}</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-aemos-light-gray/50 p-6 rounded-lg">
                    <h4 className="font-bold text-aemos-navy mb-3">Temel Özellikler</h4>
                    <ul className="space-y-2 text-aemos-gray">
                      <li>• Reaktif güç yönetimi</li>
                      <li>• Enerji verimliliği optimizasyonu</li>
                      <li>• Gerçek zamanlı izleme</li>
                      <li>• CBAM uyumluluk raporları</li>
                    </ul>
                  </div>
                  
                  <div className="bg-aemos-light-gray/50 p-6 rounded-lg">
                    <h4 className="font-bold text-aemos-navy mb-3">Beklenen Faydalar</h4>
                    <ul className="space-y-2 text-aemos-gray">
                      <li>• %20-30 enerji tasarrufu</li>
                      <li>• Reaktif güç cezalarında %85 azalma</li>
                      <li>• Operasyonel verimlilik artışı</li>
                      <li>• Çevresel etki azaltma</li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-8 text-center">
                  <button className="aemos-button-accent mr-4">
                    Sektör Özeli Demo
                  </button>
                  <button className="aemos-button-secondary">
                    Detaylı Bilgi Al
                  </button>
                </div>
              </div>
            </div>
          </Reveal>
        )}

        {/* Ana Sektörler Hızlı Erişim */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
          {topSolutions.map((solution, index) => (
            <Reveal key={index} delay={index * 0.1}>
              <button
                onClick={() => setSelectedSolution(solution)}
                className="aemos-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1 text-center"
              >
                <div className="text-3xl mb-2">{solution.icon}</div>
                <h4 className="font-bold text-aemos-navy text-sm">{solution.title}</h4>
              </button>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
