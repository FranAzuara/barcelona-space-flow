import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Clock, Users, Calendar } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Por Horas",
      description: "Perfecto para clases puntuales",
      icon: Clock,
      features: [
        "Alquiler flexible por horas",
        "Ideal para clases esporádicas",
        "Sin compromiso a largo plazo",
        "Reserva online inmediata"
      ],
      cta: "Consultar Tarifas por Horas"
    },
    {
      name: "Autónomos",
      description: "Descuentos especiales para profesionales",
      icon: Users,
      featured: true,
      features: [
        "Tarifas preferenciales",
        "Bonos con descuentos",
        "Para uso recurrente",
        "Soporte personalizado"
      ],
      cta: "Consultar Descuentos"
    },
    {
      name: "Jornada Completa",
      description: "Para eventos y talleres intensivos",
      icon: Calendar,
      features: [
        "Sala disponible todo el día",
        "Perfecto para workshops",
        "Eventos y formaciones",
        "Máxima flexibilidad horaria"
      ],
      cta: "Consultar Tarifas Diarias"
    }
  ];

  return (
    <section id="tarifas" className="py-16 bg-muted/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-4">
            Tarifas y Condiciones de Alquiler
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ofrecemos flexibilidad total: alquiler por horas o jornadas completas. 
            Pregúntanos por los bonos y precios especiales para autónomos y grupos recurrentes.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`p-8 relative hover:shadow-xl transition-all duration-300 ${
                plan.featured ? 'ring-2 ring-secondary border-secondary shadow-lg' : ''
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-secondary text-white px-4 py-1 rounded-full text-sm font-medium">
                    Más Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-6">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${
                  plan.featured ? 'bg-secondary text-white' : 'bg-secondary/10 text-secondary'
                }`}>
                  <plan.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">{plan.name}</h3>
                <p className="text-muted-foreground text-sm">{plan.description}</p>
              </div>
              
              <ul className="space-y-3">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start text-sm">
                    <Check className="w-4 h-4 text-secondary mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
        
        <div className="text-center mb-12">
          <Button variant="hero" size="lg">
            Consultar tarifas
          </Button>
        </div>
        
        <Card className="p-8 bg-gradient-to-r from-primary/5 to-secondary/5 border-secondary/20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-primary mb-4">
                Preguntas Frecuentes
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-primary mb-1">¿Cuánto cuesta alquilar la sala?</h4>
                  <p className="text-sm text-muted-foreground">Depende de la duración y la frecuencia. Solicita presupuesto personalizado.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-1">¿Se puede reservar online?</h4>
                  <p className="text-sm text-muted-foreground">Sí, puedes hacerlo por web o teléfono de manera ágil.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-1">¿La sala está disponible fines de semana?</h4>
                  <p className="text-sm text-muted-foreground">¡Claro! También esos días, con total flexibilidad horaria.</p>
                </div>
              </div>
            </div>
            <div className="text-center">
              <Users className="w-16 h-16 text-secondary mx-auto mb-4" />
              <h4 className="text-xl font-bold text-primary mb-4">
                ¿Necesitas un Presupuesto Personalizado?
              </h4>
              <p className="text-muted-foreground mb-6">
                Cada proyecto es único. Contacta con nosotros y te haremos una propuesta 
                adaptada a tus necesidades específicas.
              </p>
              <Button variant="hero" size="lg">
                Solicitar Presupuesto
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Pricing;