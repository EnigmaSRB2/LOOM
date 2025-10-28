import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1615821430614-3d7d2685e2f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWNvcmRpbmclMjBzdHVkaW8lMjBtaWNyb3Bob25lfGVufDF8fHx8MTc2MTQ1OTA4Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Recording Studio"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <div className="mb-6">
          <h1 className="text-7xl md:text-8xl tracking-tight text-white mb-4">LOOM</h1>
          <div className="h-1 w-32 mx-auto" style={{ backgroundColor: "var(--silver)" }}></div>
        </div>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Музыкальные классы для репетиций.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-white text-black hover:bg-gray-200"
            onClick={() => scrollToSection("studios")}
          >
            Наши студии
          </Button>
          <Button
            size="lg"
            className="bg-transparent border-2 text-white hover:bg-white hover:text-black"
            style={{ borderColor: "var(--silver)" }}
            onClick={() => scrollToSection("contact")}
          >
            Связаться с нами
          </Button>
        </div>
      </div>
    </section>
  );
}
