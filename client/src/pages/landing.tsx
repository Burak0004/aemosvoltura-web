import { Helmet } from "react-helmet-async";
// import Navbar from "@/components/layout/navbar"; // Bu satıra artık gerek yok, silebilirsin.
import Footer from "@/components/layout/footer";
import Hero from "@/components/sections/hero";
import ValueProposition from "@/components/sections/value-proposition";
import ROICalculator from "@/components/sections/roi-calculator";
import DigitalTransformation from "@/components/sections/digital-transformation";
import SolutionsGrid from "@/components/sections/solutions-grid";
import CBAMCarbon from "@/components/sections/cbam-carbon";
import AboutUs from "@/components/sections/about-us";
import PricingPlans from "@/components/sections/pricing-plans";
import ContactDemo from "@/components/sections/contact-demo";

export default function Landing() {
return (
<div className="min-h-screen">
<Helmet>
<title>AEMOS Voltura - Endüstriyel Enerji Yönetimi Platformu</title>
<meta name="description" content="AI destekli dijital ikiz, blokzincir P2P pazaryeri ve gerçek zamanlı optimizasyon ile enerji maliyetlerinizi %30'a kadar azaltın." />
<meta name="keywords" content="endüstriyel enerji yönetimi, AI dijital ikiz, reaktif güç ceza önleme, CBAM raporlama" />
<link rel="canonical" href="https://aemos-voltura.com/" />
</Helmet>

{/* Navbar buradan kaldırıldı */}
<Hero />
<ValueProposition />
<ROICalculator />
<DigitalTransformation />
<SolutionsGrid />
<CBAMCarbon />
<AboutUs />
<PricingPlans />
<ContactDemo />
<Footer />
</div>
);
}