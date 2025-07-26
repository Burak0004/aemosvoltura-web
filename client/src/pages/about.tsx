import { Helmet } from "react-helmet-async";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

export default function About() {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Hakkımızda - AEMOS Voltura</title>
        <meta name="description" content="AEMOS Voltura ekibi, misyonu ve vizyonu hakkında detaylı bilgi." />
      </Helmet>
      
      <Navbar />
      <div className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h1 className="text-4xl font-bold text-center mb-8">Hakkımızda</h1>
          <p className="text-center text-lg text-gray-600 mb-12">
            Takım ve şirket bilgileri burada olacak.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
