import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check, Clock, Users, Calendar } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";

const Pricing = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formTitle, setFormTitle] = useState("");

  const handleOpenForm = (title: string) => {
    setFormTitle(title);
    setIsFormOpen(true);
  };

  const plans = [
    {
      name: "Por Horas",
      description: "Perfecto para clases puntuales",
      icon: Clock,
      features: [
        "Alquiler por horas flexible",
        "Ideal para clases esporádicas",
        "Sin compromiso a largo plazo",
        "Solicitud rápida online",
      ],
    },
    {
      name: "Uso Recurrente",
      description: "Descuentos especiales para profesionales",
      icon: Users,
      featured: true,
      features: [
        "Tarifas preferenciales según frecuencia de uso",
        "Bonos de horas con descuentos",
        "Prioridad en la agenda semanal",
        "Soporte personalizado",
      ],
    },
    {
      name: "Jornada Completa",
      description: "Para eventos y talleres intensivos",
      icon: Calendar,
      features: [
        "Sala disponible todo el día",
        "Perfecto para workshops",
        "Eventos y formaciones",
        "Presupuesto a medida",
      ],
    },
  ];

  return (
    <section id="tarifas" className="py-10 bg-muted/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-4">
            Tarifas y Condiciones de Alquiler
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ofrecemos flexibilidad total: alquiler por horas o jornadas
            completas. Pregúntanos por los bonos y precios especiales para
            autónomos y grupos recurrentes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {plans.map((plan, index) => (
            <AnimateOnScroll key={index}>
              <div
                className={`p-10 rounded-[2rem] relative transition-all duration-500 h-full flex flex-col ${
                  plan.featured
                    ? "bg-primary text-primary-foreground shadow-ethereal scale-105 z-10"
                    : "bg-white border border-border/50 hover:shadow-studio"
                }`}
              >
                {plan.featured && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-secondary text-secondary-foreground px-6 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase whitespace-nowrap shadow-lg">
                      Más Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <div
                    className={`w-20 h-20 mx-auto mb-6 rounded-2xl flex items-center justify-center rotate-3 transition-transform group-hover:rotate-0 ${
                      plan.featured
                        ? "bg-white/10 text-white"
                        : "bg-secondary/10 text-secondary"
                    }`}
                  >
                    <plan.icon className="w-10 h-10" />
                  </div>
                  <h3
                    className={`text-2xl font-bold mb-3 ${plan.featured ? "text-white" : "text-primary"}`}
                  >
                    {plan.name}
                  </h3>
                  <p
                    className={
                      plan.featured
                        ? "text-white/60 text-sm"
                        : "text-muted-foreground text-sm"
                    }
                  >
                    {plan.description}
                  </p>
                </div>

                <ul className="space-y-4 mb-8 flex-1">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start text-sm">
                      <div
                        className={`mt-1 mr-4 rounded-full p-0.5 ${plan.featured ? "bg-secondary text-secondary-foreground" : "bg-secondary/20 text-secondary"}`}
                      >
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span
                        className={
                          plan.featured
                            ? "text-white/80"
                            : "text-muted-foreground"
                        }
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        <div className="text-center">
          <Button
            variant="hero"
            size="lg"
            onClick={() => handleOpenForm("Consultar Disponibilidad")}
          >
            Consultar disponibilidad
          </Button>
        </div>
      </div>

      <ContactForm
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        title={formTitle}
      />
    </section>
  );
};

export default Pricing;
