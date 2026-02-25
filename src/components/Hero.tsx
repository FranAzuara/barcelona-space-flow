import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Star } from "lucide-react";
import heroImage from "@/assets/hero-sala.jpg";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";

const Hero = () => {
  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLButtonElement>,
    href: string,
  ) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Sala polivalente Barcelona - Espacio moderno para baile, yoga y eventos"
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-background via-background/60 to-transparent"></div>
        <div className="absolute inset-0 bg-[var(--gradient-hero)]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <AnimateOnScroll>
          <h1 className="text-5xl lg:text-8xl font-black text-primary mb-8 leading-[0.9] tracking-tighter">
            Alquiler de Sala
            <span className="block text-secondary italic font-serif">Polivalente</span>
            <span className="block text-primary">en Barcelona</span>
          </h1>
        </AnimateOnScroll>

        <AnimateOnScroll>
          <h2 className="text-xl lg:text-2xl font-medium text-primary/80 mb-6 max-w-3xl mx-auto leading-relaxed">
            Tu espacio profesional para{" "}
            <span className="text-secondary font-bold">baile, yoga, pilates</span> y
            eventos.
          </h2>
          <p className="text-lg text-primary/60 mb-10 max-w-2xl mx-auto leading-relaxed">
            Sala moderna, insonorizada y perfectamente equipada en el corazón de
            Barcelona.
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              variant="hero"
              size="lg"
              className="text-lg px-8 py-4"
              onClick={(e) => handleSmoothScroll(e, "#calendario")}
            >
              <Calendar className="mr-2" />
              Ver Disponibilidad
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 py-4 border-primary/20 text-primary hover:bg-primary hover:text-white transition-all duration-500"
              onClick={(e) => handleSmoothScroll(e, "#ubicacion")}
            >
              <MapPin className="mr-2" />
              Ubicación
            </Button>
          </div>
        </AnimateOnScroll>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mt-12">
          <AnimateOnScroll>
            <div className="bg-white/40 backdrop-blur-md rounded-2xl p-8 border border-white/40 shadow-ethereal hover:shadow-studio transition-all duration-500">
              <div className="flex items-center justify-center mb-6">
                <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center">
                  <Star className="text-secondary w-7 h-7 fill-secondary" />
                </div>
              </div>
              <h3 className="text-primary font-bold text-xl mb-3">
                5★ en Google Maps
              </h3>
              <p className="text-primary/60 text-sm leading-relaxed">
                Reseñas excelentes de nuestros clientes que avalan nuestra calidad
              </p>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll>
            <div className="bg-white/40 backdrop-blur-md rounded-2xl p-8 border border-white/40 shadow-ethereal hover:shadow-studio transition-all duration-500">
              <div className="flex items-center justify-center mb-6">
                <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center">
                  <MapPin className="text-secondary w-7 h-7" />
                </div>
              </div>
              <h3 className="text-primary font-bold text-xl mb-3">
                Metro L1 y L5
              </h3>
              <p className="text-primary/60 text-sm leading-relaxed">
                Acceso directo al transporte público para tu mayor comodidad
              </p>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll>
            <div className="bg-white/40 backdrop-blur-md rounded-2xl p-8 border border-white/40 shadow-ethereal hover:shadow-studio transition-all duration-500">
              <div className="flex items-center justify-center mb-6">
                <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center">
                  <Calendar className="text-secondary w-7 h-7" />
                </div>
              </div>
              <h3 className="text-primary font-bold text-xl mb-3">
                Reserva tu Espacio
              </h3>
              <p className="text-primary/60 text-sm leading-relaxed">
                Proceso de solicitud ágil y sencillo para que no pierdas tiempo
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
};

export default Hero;
