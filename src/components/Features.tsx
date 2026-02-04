import { Card } from "@/components/ui/card";
import { Maximize2, Lightbulb, Music, AirVent, DoorOpen } from "lucide-react";
import InteractiveSelector from "@/components/ui/interactive-selector";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";

const Features = () => {
  const features = [
    {
      icon: Maximize2,
      title: "Amplitud y Superficies",
      description:
        "Disfruta de 100 m² diáfanos bajo un techo de gran altura, ideales para clases con libertad de movimiento y grupos amplios. Suelo de parquet y espejos panorámicos que facilitan la técnica, los saltos y cualquier expresión corporal con total seguridad.",
    },
    {
      icon: Lightbulb,
      title: "Iluminación Controlada y Ambiental",
      description:
        "Ajusta la luz a cada disciplina con tres circuitos independientes y LED RGB perimetral. Crea ambientes relajantes para yoga o meditación, o llena de energía tus clases de baile y entrenamiento.",
    },
    {
      icon: Music,
      title: "Acústica Profesional",
      description:
        "Insonorización y sonido profesional que garantiza potencia y nitidez. Imparte tus clases sin límites, con una experiencia auditiva envolvente y sin molestias.",
    },
    {
      icon: AirVent,
      title: "Confort Climatizado",
      description:
        "Climatización frío/calor que mantiene la temperatura ideal todo el año, asegurando el máximo confort, bienestar y concentración de tus alumnos en cada sesión.",
    },
    {
      icon: DoorOpen,
      title: "Accesibilidad Total",
      description:
        "Acceso directo a pie de calle, sin escalones y con puerta amplia. Uno de los baños está adaptado para personas con movilidad reducida, garantizando inclusión y comodidad para todos tus alumnos.",
    },
  ];

  return (
    <section className="py-10 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-4">
            Una Sala Amplia, Moderna y Equipada
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Cuando alguien entra por primera vez suele decir lo mismo: "¡qué
            espacio tan luminoso y bien preparado!". Nuestra sala está diseñada
            para adaptarse a diferentes necesidades.
          </p>
        </div>

        <div className="space-y-6">
          {/* Primera fila - 1 card full width */}
          <div className="grid grid-cols-1 gap-6">
            {(() => {
              const FirstIcon = features[0].icon;
              return (
                <AnimateOnScroll>
                  <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <FirstIcon className="w-8 h-8 text-secondary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-primary mb-2 uppercase">
                          {features[0].title}
                        </h3>
                        <p className="text-muted-foreground">
                          {features[0].description}
                        </p>
                      </div>
                    </div>
                  </Card>
                </AnimateOnScroll>
              );
            })()}
          </div>

          {/* Segunda fila - 2 cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.slice(1, 3).map((feature, index) => (
              <AnimateOnScroll key={index + 1}>
                <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <feature.icon className="w-8 h-8 text-secondary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-primary mb-2 uppercase">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </AnimateOnScroll>
            ))}
          </div>

          {/* Tercera fila - 2 cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.slice(3, 5).map((feature, index) => (
              <AnimateOnScroll key={index + 3}>
                <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <feature.icon className="w-8 h-8 text-secondary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-primary mb-2 uppercase">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </AnimateOnScroll>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <InteractiveSelector />
        </div>
      </div>
    </section>
  );
};

export default Features;
