import { Card } from "@/components/ui/card";
import { Users, Heart, Palette } from "lucide-react";

const Activities = () => {
  const activities = [
    {
      icon: Heart,
      title: "Pilates y Yoga",
      description: "Ambiente perfecto para actividades de bienestar con la tranquilidad que necesitas.",
      features: ["Iluminación natural", "Espacio silencioso", "Aire purificado"],
      video: "https://res.cloudinary.com/dct5oxj7j/video/upload/v1758300717/video-studiez-1_siybsl.mp4"
    },
    {
      icon: Users,
      title: "Clases de Baile",
      description: "Desde bailes latinos hasta danza contemporánea, nuestro espacio se adapta a todos los estilos.",
      features: ["Suelo de baile profesional", "Espejos en todas las paredes", "Sistema de sonido de calidad"],
      video: "https://res.cloudinary.com/dct5oxj7j/video/upload/v1758300715/video-studiez-2_u86h0n.mp4"
    },
    {
      icon: Palette,
      title: "Talleres y Eventos",
      description: "Desde workshops creativos hasta eventos corporativos, el espacio se transforma según tus necesidades.",
      features: ["Configuración adaptable", "Capacidad para grupos", "Servicios adicionales"],
      video: "https://res.cloudinary.com/dct5oxj7j/video/upload/v1758300714/video-studiez-3_tfjyi4.mp4"
    }
  ];

  return (
    <section id="actividades" className="py-16 bg-background">
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
        
        <div className="grid grid-cols-1 gap-8 mb-12">
          {activities.map((activity, index) => (
            <Card key={index} className="px-8 py-4 hover:shadow-xl transition-all duration-300 group md:h-96">
              <div className={`flex flex-col md:flex-row items-stretch gap-6 h-full ${index === 1 ? 'md:flex-row-reverse' : ''}`}>
                {/* Image/Video Space */}
                <div className="flex-shrink-0 w-full md:w-56 flex flex-col justify-center">
                  <video 
                    className="w-full h-64 md:h-80 object-cover object-center rounded-lg"
                    autoPlay
                    muted
                    loop
                    playsInline
                  >
                    <source src={activity.video} type="video/mp4" />
                    Tu navegador no soporta videos HTML5.
                  </video>
                </div>
                
                {/* Content */}
                <div className="flex-1 flex flex-col justify-center">
                  <h3 className="text-xl font-bold text-primary mb-3">
                    {activity.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {activity.description}
                  </p>
                  <ul className="space-y-2">
                    {activity.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-2 h-2 bg-secondary rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Activities;