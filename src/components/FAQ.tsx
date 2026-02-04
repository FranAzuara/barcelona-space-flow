import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";

const FAQ = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formTitle, setFormTitle] = useState("");

  const handleOpenForm = (title: string) => {
    setFormTitle(title);
    setIsFormOpen(true);
  };

  return (
    <section className="py-10 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <AnimateOnScroll>
          <Card className="p-8 bg-gradient-to-r from-primary/5 to-secondary/5 border-secondary/20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-primary mb-4">
                  Preguntas Frecuentes
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-primary mb-1">
                      ¿Cuánto cuesta alquilar la sala?
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      El precio se ajusta según las horas que necesites y la
                      frecuencia de uso. Cuéntanos tu idea y te daremos el mejor
                      precio.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">
                      ¿Cómo puedo reservar?
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Solicita tu reserva vía formulario web. Revisaremos la
                      disponibilidad y te confirmaremos lo antes posible.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">
                      ¿La sala está disponible fines de semana?
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      ¡Claro! También esos días, con total flexibilidad horaria.
                    </p>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <Users className="w-16 h-16 text-secondary mx-auto mb-4" />
                <h4 className="text-xl font-bold text-primary mb-4">
                  ¿Tienes un proyecto en mente?
                </h4>
                <p className="text-muted-foreground mb-6">
                  Desde horas sueltas hasta eventos o uso recurrente. Cuéntanos
                  qué necesitas y te responderemos con una propuesta
                  personalizada.
                </p>
                <Button
                  variant="hero"
                  size="lg"
                  onClick={() => handleOpenForm("Solicitar Reserva")}
                >
                  Solicitar Reserva
                </Button>
              </div>
            </div>
          </Card>
        </AnimateOnScroll>
      </div>

      <ContactForm
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        title={formTitle}
      />
    </section>
  );
};

export default FAQ;
