import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Star } from "lucide-react";
import heroImage from "@/assets/hero-sala.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Sala polivalente Barcelona - Espacio moderno para baile, yoga y eventos"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <div className="animate-fade-up flex flex-col items-center mb-8">
          <div className="w-24 h-24 lg:w-32 lg:h-32 mb-4 rounded-full bg-white flex items-center justify-center">
            <div className="text-center">
              <div className="text-secondary font-bold text-lg lg:text-2xl">S</div>
              <div className="text-primary text-xs font-semibold">STUDIEZ</div>
            </div>
          </div>
          <h1 className="text-5xl lg:text-7xl font-bold text-white mb-2 leading-tight">
            <span className="block text-white">The</span>
            <span className="block text-secondary text-6xl lg:text-8xl">STUDIEZ</span>
          </h1>
          <h2 className="text-3xl lg:text-4xl font-semibold text-white/90">
            Alquiler de Sala Polivalente en Barcelona
          </h2>
        </div>
        
        <div className="animate-fade-up-delay">
          <p className="text-xl lg:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Espacio versátil para baile, yoga, pilates y eventos. 
            Sala moderna, insonorizada y perfectamente equipada en el corazón de Barcelona.
          </p>
        </div>
        
        <div className="animate-fade-up-delay flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button variant="hero" size="lg" className="text-lg px-8 py-4">
            <Calendar className="mr-2" />
            Ver Disponibilidad
          </Button>
          <Button variant="outline" size="lg" className="text-lg px-8 py-4 bg-white/10 border-white text-white hover:bg-white hover:text-primary">
            <MapPin className="mr-2" />
            Ubicación
          </Button>
        </div>
        
        {/* Features Grid */}
        <div className="animate-fade-up-delay grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <div className="flex items-center justify-center mb-4">
              <Star className="text-secondary w-8 h-8" />
            </div>
            <h3 className="text-white font-semibold text-lg mb-2">5★ en Google Maps</h3>
            <p className="text-white/80">Reseñas excelentes de nuestros clientes</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <div className="flex items-center justify-center mb-4">
              <MapPin className="text-secondary w-8 h-8" />
            </div>
            <h3 className="text-white font-semibold text-lg mb-2">Metro L1 y L5</h3>
            <p className="text-white/80">Acceso directo al transporte público</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <div className="flex items-center justify-center mb-4">
              <Calendar className="text-secondary w-8 h-8" />
            </div>
            <h3 className="text-white font-semibold text-lg mb-2">Reserva Online</h3>
            <p className="text-white/80">Sistema de reservas ágil y sencillo</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;