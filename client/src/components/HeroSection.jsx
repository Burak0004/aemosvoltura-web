import { Button } from "@/components/ui/button";
import { Reveal } from "@/utils/scrollAnimations";

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-muted">
      <Reveal>
        <div className="container text-center">
          <h1 className="text-hero text-gray-900 mb-6">
            Enerji Kayıplarını <span className="text-primary">%15'e Varan Oranda</span> Azaltın
          </h1>
          <p className="mt-6 text-subhero text-gray-600 max-w-2xl mx-auto">
            Saniyelik IoT verisiyle dijital ikizinizi canlı tutar, AI optimizasyonu yapar,
            fazlayı 30&nbsp;sn'de P2P pazara satar.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Button className="climate-button px-8 py-4 text-lg">
              Demo Talep Et
            </Button>
            <Button className="climate-button-secondary px-8 py-4 text-lg">
              Teknik Mimari
            </Button>
          </div>
        </div>
      </Reveal>
    </section>
  );
}