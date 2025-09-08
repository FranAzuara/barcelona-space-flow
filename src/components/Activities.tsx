import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Heart, Palette, Star } from "lucide-react";
import danceClassImage from "@/assets/dance-class.jpg";
import pilatesYogaImage from "@/assets/pilates-yoga.jpg";
import workshopsEventsImage from "@/assets/workshops-events.jpg";

const Activities = () => {
  const activities = [
    {
      icon: Users,
      title: "Clases de Baile",
      description: "Desde bailes latinos hasta danza contemporánea, nuestro espacio se adapta a todos los estilos.",
      features: ["Suelo de baile profesional", "Espejos en todas las paredes", "Sistema de sonido de calidad"],
      image: danceClassImage,
      imagePosition: "left"
    },
    {
      icon: Heart,
      title: "Pilates y Yoga",
      description: "Ambiente perfecto para actividades de bienestar con la tranquilidad que necesitas.",
      features: ["Iluminación natural", "Espacio silencioso", "Aire purificado"],
      image: pilatesYogaImage,
      imagePosition: "right"
    },
    {
      icon: Palette,
      title: "Talleres y Eventos",
      description: "Desde workshops creativos hasta eventos corporativos, el espacio se transforma según tus necesidades.",
      features: ["Configuración adaptable", "Capacidad para grupos", "Servicios adicionales"],
      image: workshopsEventsImage,
      imagePosition: "left"
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-4">
            Ideal para Clases de Baile, Pilates y Yoga
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Si impartes clases de movimiento, aquí encontrarás un espacio pensado para ti. 
            Grupos de baile, instructores de pilates o profesores de yoga ya lo utilizan a diario.
          </p>
        </div>
        
        <div className="space-y-16 mb-12">
          {/* Clases de Baile - Imagen a la izquierda */}
          <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
            <div className="flex flex-col lg:flex-row items-stretch min-h-[400px]">
              {/* Imagen */}
              <div className="w-full lg:w-1/3 flex-shrink-0">
                <img 
                  src={danceClassImage} 
                  alt="Clases de Baile"
                  className="w-full h-64 lg:h-full object-cover"
                />
              </div>
              
              {/* Contenido */}
              <div className="w-full lg:w-2/3 p-8 flex flex-col justify-center">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                      <Users className="w-8 h-8 text-secondary" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-primary mb-4">
                      Clases de Baile
                    </h3>
                    <p className="text-muted-foreground mb-6 text-lg">
                      Desde bailes latinos hasta danza contemporánea, nuestro espacio se adapta a todos los estilos.
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-center text-muted-foreground">
                        <div className="w-2 h-2 bg-secondary rounded-full mr-4 flex-shrink-0"></div>
                        Suelo de baile profesional
                      </li>
                      <li className="flex items-center text-muted-foreground">
                        <div className="w-2 h-2 bg-secondary rounded-full mr-4 flex-shrink-0"></div>
                        Espejos en todas las paredes
                      </li>
                      <li className="flex items-center text-muted-foreground">
                        <div className="w-2 h-2 bg-secondary rounded-full mr-4 flex-shrink-0"></div>
                        Sistema de sonido de calidad
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Pilates y Yoga - Imagen a la derecha */}
          <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
            <div className="flex flex-col lg:flex-row-reverse items-stretch min-h-[400px]">
              {/* Imagen */}
              <div className="w-full lg:w-1/3 flex-shrink-0">
                <img 
                  src={pilatesYogaImage} 
                  alt="Pilates y Yoga"
                  className="w-full h-64 lg:h-full object-cover"
                />
              </div>
              
              {/* Contenido */}
              <div className="w-full lg:w-2/3 p-8 flex flex-col justify-center">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                      <Heart className="w-8 h-8 text-secondary" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-primary mb-4">
                      Pilates y Yoga
                    </h3>
                    <p className="text-muted-foreground mb-6 text-lg">
                      Ambiente perfecto para actividades de bienestar con la tranquilidad que necesitas.
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-center text-muted-foreground">
                        <div className="w-2 h-2 bg-secondary rounded-full mr-4 flex-shrink-0"></div>
                        Iluminación natural
                      </li>
                      <li className="flex items-center text-muted-foreground">
                        <div className="w-2 h-2 bg-secondary rounded-full mr-4 flex-shrink-0"></div>
                        Espacio silencioso
                      </li>
                      <li className="flex items-center text-muted-foreground">
                        <div className="w-2 h-2 bg-secondary rounded-full mr-4 flex-shrink-0"></div>
                        Aire purificado
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Talleres y Eventos - Imagen a la izquierda */}
          <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
            <div className="flex flex-col lg:flex-row items-stretch min-h-[400px]">
              {/* Imagen */}
              <div className="w-full lg:w-1/3 flex-shrink-0">
                <img 
                  src={workshopsEventsImage} 
                  alt="Talleres y Eventos"
                  className="w-full h-64 lg:h-full object-cover"
                />
              </div>
              
              {/* Contenido */}
              <div className="w-full lg:w-2/3 p-8 flex flex-col justify-center">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                      <Palette className="w-8 h-8 text-secondary" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-primary mb-4">
                      Talleres y Eventos
                    </h3>
                    <p className="text-muted-foreground mb-6 text-lg">
                      Desde workshops creativos hasta eventos corporativos, el espacio se transforma según tus necesidades.
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-center text-muted-foreground">
                        <div className="w-2 h-2 bg-secondary rounded-full mr-4 flex-shrink-0"></div>
                        Configuración adaptable
                      </li>
                      <li className="flex items-center text-muted-foreground">
                        <div className="w-2 h-2 bg-secondary rounded-full mr-4 flex-shrink-0"></div>
                        Capacidad para grupos
                      </li>
                      <li className="flex items-center text-muted-foreground">
                        <div className="w-2 h-2 bg-secondary rounded-full mr-4 flex-shrink-0"></div>
                        Servicios adicionales
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
        
        <Card className="p-8 bg-gradient-to-r from-secondary/10 to-primary/5 border-secondary/20">
          <div className="text-center">
            <Star className="w-12 h-12 text-secondary mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-primary mb-4">
              ¿Por qué elegir nuestra sala polivalente?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div>
                <div className="text-3xl font-bold text-secondary mb-2">5★</div>
                <div className="text-sm text-primary font-medium">Reseñas en Google Maps</div>
                <div className="text-xs text-muted-foreground">Valoración excelente</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-secondary mb-2">100%</div>
                <div className="text-sm text-primary font-medium">Gestión Profesional</div>
                <div className="text-xs text-muted-foreground">Atención personalizada</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-secondary mb-2">24/7</div>
                <div className="text-sm text-primary font-medium">Soporte</div>
                <div className="text-xs text-muted-foreground">Siempre disponibles</div>
              </div>
            </div>
            <Button variant="hero" size="lg" className="mt-8">
              Consultar Disponibilidad
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Activities;