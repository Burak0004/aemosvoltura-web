import { Helmet } from "react-helmet-async";
import Navbar from "@/components/layout/navbar-new";
import Footer from "@/components/layout/footer";
import InvestorPortal from "@/components/sections/investor-portal";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function InvestorsPage() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Helmet>
        <title>Yatırımcılar - AEMOS Voltura | €2.5M Series A</title>
        <meta name="description" content="Türkiye'nin ilk endüstriyel EaaS platformu. €35K ARR per customer, 18-month payback, 85% retention. €2.5M Series A için hazır." />
        <meta name="keywords" content="AEMOS Voltura yatırım, Series A, endüstriyel EaaS, VC, startup yatırım" />
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
              Türkiye'nin İlk
              <span className="text-aemos-aqua block">Endüstriyel EaaS</span>
              Platformu
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              €2.5M Series A ile 48 kurumsal müşteri portföyünü 200'e çıkarıyoruz. 
              €35K ARR per customer, 18-month payback, %85 retention.
            </p>
            
            <div className="grid md:grid-cols-4 gap-8 mt-12">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
                <div className="text-3xl font-bold text-aemos-aqua mb-2">€35K</div>
                <div className="text-gray-300">ARR per Customer</div>
              </div>
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
                <div className="text-3xl font-bold text-aemos-aqua mb-2">18</div>
                <div className="text-gray-300">Months Payback</div>
              </div>
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
                <div className="text-3xl font-bold text-aemos-aqua mb-2">85%</div>
                <div className="text-gray-300">Retention Rate</div>
              </div>
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
                <div className="text-3xl font-bold text-aemos-aqua mb-2">€2.5M</div>
                <div className="text-gray-300">Series A Target</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <InvestorPortal />
      <Footer />
    </div>
  );
}