import { ChevronDown } from "lucide-react";
import { useSmoothScroll } from "@/hooks/use-smooth-scroll";
import { Reveal } from "@/utils/scrollAnimations";
import { Button } from "@/components/ui/button";

export default function Hero() {
const { scrollToSection } = useSmoothScroll();

return (
<section className="relative w-full h-screen overflow-hidden">
{/* Navbar çağrısı buradan kaldırıldı, artık App.tsx'ten geliyor */}

<div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black/60 to-transparent z-20 pointer-events-none"></div>

<video
autoPlay
muted
loop
playsInline
className="absolute inset-0 w-full h-full object-cover"
>
<source src="/hero-bg.mp4" type="video/mp4" />
</video>

<div className="absolute inset-0 bg-[#0A192F]/70 backdrop-blur-sm"></div>

<div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6 pt-52 md:pt-60">
<div className="container px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-5xl mx-auto">
<Reveal>
              {/* --- YENİ ANA BAŞLIK --- */}
<h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight tracking-tight">
                Enerjiyi Giderden Gelire,
<span className="bg-gradient-to-r from-aemos-aqua to-aemos-green bg-clip-text text-transparent">Riskten Güce Dönüştürün.</span>
</h1>
</Reveal>

<Reveal delay={0.2}>
              {/* --- YENİ ALT BAŞLIK --- */}
<p className="text-lg md:text-xl text-gray-300 mb-10 max-w-4xl mx-auto leading-relaxed">
                Yapay zeka destekli platformumuzla reaktif güç cezalarına son verin, P2P pazaryerinde yeni gelirler yaratın ve CBAM gibi küresel zorlukları rekabet avantajına çevirin.
</p>
</Reveal>

<Reveal delay={0.4}>
<div className="flex flex-wrap items-center justify-center gap-8">
<Button
variant="cta"
size="cta"
onClick={() => scrollToSection('contact')}
className="group relative overflow-hidden"
>
<span className="relative z-10">Ücretsiz Demo Talep Edin</span>
<div className="absolute inset-0 bg-gradient-to-r from-[#4CAF50] to-[#69F0AE] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
</Button>
                <Button
variant="secondary"
size="lg"
onClick={() => scrollToSection('roi-calculator')}
className="group text-white"
>
<span>ROI Hesaplayıcı</span>
<svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
</svg>
</Button>
</div>
</Reveal>
</div>
</div>
</div>

<div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-aemos-gray animate-bounce">
<ChevronDown className="w-6 h-6" />
</div>
</section>
);
}