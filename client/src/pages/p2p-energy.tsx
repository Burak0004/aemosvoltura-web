import { Helmet } from "react-helmet-async";
import Navbar from "@/components/layout/navbar-new";
import Footer from "@/components/layout/footer";
import P2PEnergyTrading from "@/components/sections/p2p-energy-trading";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function P2PEnergyPage() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Helmet>
        <title>P2P Enerji Ticareti - AEMOS Voltura | kWh-NFT Blokzincir</title>
        <meta name="description" content="Blokzincir tabanlı P2P enerji ticareti platformu. kWh-NFT teknolojisi ile güvenli, şeffaf ve komisyonsuz enerji alım-satımı." />
        <meta name="keywords" content="P2P enerji ticareti, kWh-NFT, blokzincir enerji, enerji alım satım, smart contract" />
      </Helmet>

      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-gray-900 via-aemos-navy to-gray-900">
        <div className="container mx-auto px-6">
          <div className="flex items-center mb-8">
            <Link href="/" className="flex items-center text-aemos-aqua hover:text-white transition-colors mr-4">
              <ArrowLeft className="w-5 h-5 mr-2" />
              Ana Sayfaya Dön
            </Link>
          </div>
          
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              P2P Enerji Ticareti
              <span className="text-aemos-aqua block">kWh-NFT Blokzincir</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Türkiye'nin ilk blokzincir tabanlı endüstriyel enerji pazaryeri. 
              Ürettiğiniz fazla enerjiyi doğrudan satın, ihtiyacınızı komisyonsuz karşılayın.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
                <div className="text-3xl font-bold text-aemos-aqua mb-2">₺0.85</div>
                <div className="text-gray-300">kWh Ortalama Fiyat</div>
              </div>
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
                <div className="text-3xl font-bold text-aemos-aqua mb-2">%15</div>
                <div className="text-gray-300">Maliyet Tasarrufu</div>
              </div>
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
                <div className="text-3xl font-bold text-aemos-aqua mb-2">0%</div>
                <div className="text-gray-300">Komisyon Oranı</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <P2PEnergyTrading />
      <Footer />
    </div>
  );
}