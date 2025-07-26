import { Helmet } from "react-helmet-async";
import Navbar from "@/components/layout/navbar-new";
import Footer from "@/components/layout/footer";
import ReactivePowerSolution from "@/components/sections/reactive-power-solution";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function ReactivePowerPage() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Helmet>
        <title>Reaktif Güç Optimizasyonu - AEMOS Voltura | Ceza Önleme</title>
        <meta name="description" content="Reaktif güç cezalarını önleyin, enerji verimliliğinizi %15 artırın. Otomatik optimizasyon ile maliyetleri azaltın." />
        <meta name="keywords" content="reaktif güç, enerji verimliliği, ceza önleme, otomatik optimizasyon, enerji yönetimi" />
      </Helmet>

      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-gray-900 via-aemos-navy to-gray-900">
        <div className="container mx-auto px-6">
          <div className="flex items-center mb-8">
            <Link href="/solutions" className="flex items-center text-aemos-aqua hover:text-white transition-colors mr-4">
              <ArrowLeft className="w-5 h-5 mr-2" />
              Çözümlere Dön
            </Link>
          </div>
          
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Reaktif Güç
              <span className="text-aemos-aqua block">Optimizasyonu</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Reaktif güç cezalarını tamamen önleyin. Enerji verimliliğinizi %15 artırın.
              Otomatik optimizasyon ile maliyetleri anında azaltın.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
                <div className="text-3xl font-bold text-aemos-aqua mb-2">%100</div>
                <div className="text-gray-300">Ceza Önleme</div>
              </div>
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
                <div className="text-3xl font-bold text-aemos-aqua mb-2">%15</div>
                <div className="text-gray-300">Verimlilik Artışı</div>
              </div>
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
                <div className="text-3xl font-bold text-aemos-aqua mb-2">24/7</div>
                <div className="text-gray-300">Otomatik İzleme</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ReactivePowerSolution />
      <Footer />
    </div>
  );
}