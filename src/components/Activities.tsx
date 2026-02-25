import { Users, Heart, Palette } from "lucide-react";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";

const Activities = () => {
  const activities = [
    {
      icon: Heart,
      title: "Pilates, Yoga y disciplinas de Bienestar",
      description:
        "Ambiente perfecto para actividades de bienestar con la tranquilidad que necesitas.",
      features: [
        "Iluminación ajustable",
        "Espacio silencioso",
        "Aire purificado",
      ],
      video:
        "https://res.cloudinary.com/dct5oxj7j/video/upload/v1758300717/video-studiez-1_siybsl.mp4",
    },
    {
      icon: Users,
      title: "Baile y Entrenamiento Específico",
      description:
        "Desde bailes latinos hasta danza contemporánea, nuestro espacio se adapta a todos los estilos.",
      features: [
        "Suelo de baile profesional",
        "Espejos panorámicos",
        "Sistema de sonido de calidad",
      ],
      video:
        "https://res.cloudinary.com/dct5oxj7j/video/upload/v1758300715/video-studiez-2_u86h0n.mp4",
    },
    {
      icon: Palette,
      title: "Workshops, Masterclass y Eventos",
      description:
        "Desde workshops creativos hasta eventos corporativos, el espacio se transforma según tus necesidades.",
      features: [
        "Configuración adaptable",
        "Capacidad para grupos",
        "Servicios adicionales",
      ],
      video:
        "https://res.cloudinary.com/dct5oxj7j/video/upload/v1758300714/video-studiez-3_tfjyi4.mp4",
    },
  ];

  return (
    <section id="actividades" className="py-10 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-4">
            Especialistas en Movimiento, Bienestar y Entrenamiento en Barcelona
          </h2>
          <h3 className="text-xl lg:text-2xl text-foreground mb-4 leading-tight">
            Un espacio técnico y versátil diseñado para profesionales del{" "}
            <span className="text-secondary">Baile, Pilates y Yoga</span>.
          </h3>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Únete a los instructores y grupos que ya utilizan nuestra sala a
            diario.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 mb-12">
          {activities.map((activity, index) => (
            <AnimateOnScroll key={index} className="block">
              <div
                className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 ${index === 1 ? "md:flex-row-reverse" : ""}`}
              >
                {/* Image/Video Space */}
                <div className="flex-shrink-0 w-full md:w-1/2 overflow-hidden rounded-3xl shadow-ethereal group">
                  <video
                    className="w-full h-80 md:h-[450px] object-cover transition-transform duration-700 group-hover:scale-105"
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
                <div className="flex-1 space-y-6">
                  <div className="w-12 h-12 rounded-2xl bg-secondary/10 flex items-center justify-center">
                    <activity.icon className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-primary tracking-tight">
                    {activity.title}
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {activity.description}
                  </p>
                  <ul className="space-y-4">
                    {activity.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center text-base text-primary/80"
                      >
                        <div className="w-2 h-2 bg-secondary/40 rounded-full mr-4 flex-shrink-0 border border-secondary"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Activities;
