import { Helmet } from "react-helmet-async";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

export default function CaseStudies() {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Başarı Hikayeleri - AEMOS Voltura</title>
        <meta name="description" content="AEMOS Voltura ile başarılı projelerin gerçek hikayeleri ve elde edilen sonuçlar." />
      </Helmet>
      
      <Navbar />
      <div className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h1 className="text-4xl font-bold text-center mb-8">Başarı Hikayeleri</h1>
          <p className="text-center text-lg text-gray-600 mb-12">
            Müşteri başarı hikayeleri burada olacak.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
