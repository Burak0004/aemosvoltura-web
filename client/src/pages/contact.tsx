import { Helmet } from "react-helmet-async";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

export default function Contact() {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>İletişim - AEMOS Voltura</title>
        <meta name="description" content="AEMOS Voltura ile iletişime geçin, demo talep edin ve uzman ekibimizle konuşun." />
      </Helmet>
      
      <Navbar />
      <div className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h1 className="text-4xl font-bold text-center mb-8">İletişim</h1>
          <p className="text-center text-lg text-gray-600 mb-12">
            İletişim formu ve bilgileri burada olacak.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
