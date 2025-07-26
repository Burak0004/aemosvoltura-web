import { Helmet } from "react-helmet-async";
import Navbar from "@/components/layout/navbar-new";
import Footer from "@/components/layout/footer";
import CBAMCompliance from "@/components/sections/cbam-compliance";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function CBAMPage() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Helmet>
        <title>CBAM & ESG Uyumu - AEMOS Voltura | Otomatik Karbon Raporlama</title>
        <meta name="description" content="AB CBAM gereksinimlerine otomatik uyum. ESG raporlama ve karbon ayak izi yönetimi. 2026'ya hazır olun." />
        <meta name="keywords" content="CBAM, ESG, karbon raporlama, AB uyumu, sürdürülebilirlik, karbon ayak izi" />
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
              CBAM & ESG
              <span className="text-aemos-aqua block">Uyumu</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              2026'da başlayacak AB CBAM düzenlemesine hazır olun. 
              Otomatik karbon raporlama ile ESG uyumunuzu sağlayın.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
                <div className="text-3xl font-bold text-aemos-aqua mb-2">2026</div>
                <div className="text-gray-300">CBAM Başlangıcı</div>
              </div>
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
                <div className="text-3xl font-bold text-aemos-aqua mb-2">%100</div>
                <div className="text-gray-300">AB Uyumu</div>
              </div>
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
                <div className="text-3xl font-bold text-aemos-aqua mb-2">€50</div>
                <div className="text-gray-300">Ton CO2 Cezası</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CBAMCompliance />
      <Footer />
    </div>
  );
}