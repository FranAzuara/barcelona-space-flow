import { Card } from "@/components/ui/card";
import { Music, Dumbbell, Heart, Users, Wifi, AirVent } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Music,
      title: "Audio Profesional",
      description: "Sistema de insonorización que permite actividades musicales sin molestar al entorno y sistema de sonido profesional incluido."
    },
    {
      icon: AirVent,
      title: "Aire Acondicionado",
      description: "Climatización completa para mantener la temperatura ideal durante todo el año."
    },
    {
      icon: Dumbbell,
      title: "Ideal para Fitness",
      description: "Espacio perfecto para pilates, yoga, entrenamientos funcionales y más."
    },
    {
      icon: Heart,
      title: "Actividades de Bienestar",
      description: "Ambiente pensado para meditación, talleres de mindfulness y terapias grupales."
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-4">
            Una Sala Amplia, Moderna y Equipada
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Cuando alguien entra por primera vez suele decir lo mismo: "¡qué espacio tan luminoso y bien preparado!". 
            Nuestra sala está diseñada para adaptarse a diferentes necesidades.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <feature.icon className="w-8 h-8 text-secondary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-primary mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;