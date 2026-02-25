import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MapPin, Train, Car, Clock } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";

const Location = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  return (
    <section id="ubicacion" className="py-24 bg-background overflow-hidden relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>

      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold text-primary mb-6 tracking-tight">
            Ubicación Inmejorable
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Perfectamente conectada con el transporte público y los principales
            barrios de la ciudad. Tu comodidad y la de tus estudiantes es
            nuestra prioridad.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <AnimateOnScroll>
              <div className="p-8 bg-white rounded-3xl shadow-studio border border-border/50 hover:shadow-ethereal transition-all duration-500">
                <div className="flex items-start space-x-6">
                  <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <Train className="w-8 h-8 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-primary mb-3 tracking-tight">
                      Acceso Directo al Metro
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      Estamos a pie de metro con acceso a las líneas L1 y L5, lo
                      que hace que venir en transporte público sea
                      extremadamente sencillo.
                    </p>
                    <div className="space-y-1 text-sm">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <span>Línea L1 (Pl.Sants - Mercat Nou)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                        <span>Línea L5 (Pl.Sants)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-3 h-3 text-secondary" />
                        <span>Cerca de Plaza España y Sants Estación</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll>
              <div className="p-8 bg-white rounded-3xl shadow-studio border border-border/50 hover:shadow-ethereal transition-all duration-500">
                <div className="flex items-start space-x-6">
                  <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-8 h-8 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-primary mb-3 tracking-tight">
                      Conectada con Toda la Ciudad
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      La ubicación facilita la asistencia desde cualquier barrio
                      de Barcelona y mejora la puntualidad de los grupos y
                      clases.
                    </p>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>

            <div className="space-y-4">
              <div className="w-full h-64 rounded-lg overflow-hidden border relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2994.033379685942!2d2.1331960980965996!3d41.373359498633846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a49970c2db9919%3A0xf6eb399dc068620a!2sThe%20Studiez!5e0!3m2!1ses!2ses!4v1758375633698!5m2!1ses!2ses"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <AnimateOnScroll>
              <div className="p-10 bg-primary text-primary-foreground rounded-[2.5rem] shadow-ethereal relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-secondary rounded-full blur-3xl opacity-20 -mr-16 -mt-16 group-hover:opacity-40 transition-opacity"></div>
                <div className="text-center relative z-10">
                  <MapPin className="w-12 h-12 text-secondary mx-auto mb-6" />
                  <h3 className="text-3xl font-bold mb-4 tracking-tight">
                    Visítanos
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Ven a conocer nuestro espacio en persona. Te enseñaremos
                    todas las instalaciones y resolveremos cualquier duda que
                    tengas.
                  </p>
                  <Button
                    variant="hero"
                    size="lg"
                    className="w-full"
                    onClick={() => setIsFormOpen(true)}
                  >
                    <Clock className="mr-2" />
                    Agendar Visita
                  </Button>
                </div>
              </div>
            </AnimateOnScroll>

            <div className="grid grid-cols-3 gap-4">
              <AnimateOnScroll>
                <div className="p-6 bg-white rounded-2xl border border-border/50 text-center shadow-studio">
                  <Clock className="w-6 h-6 text-secondary mx-auto mb-3" />
                  <div className="text-sm font-bold text-primary mb-1">
                    Horarios
                  </div>
                  <div className="text-xs text-muted-foreground font-medium">
                    8:00 - 22:00
                  </div>
                </div>
              </AnimateOnScroll>
              <AnimateOnScroll>
                <div className="p-6 bg-white rounded-2xl border border-border/50 text-center shadow-studio">
                  <Train className="w-6 h-6 text-secondary mx-auto mb-3" />
                  <div className="text-sm font-bold text-primary mb-1">Metro</div>
                  <div className="text-xs text-muted-foreground font-medium">L1 - L5</div>
                </div>
              </AnimateOnScroll>
              <AnimateOnScroll>
                <div className="p-6 bg-white rounded-2xl border border-border/50 text-center shadow-studio">
                  <Train className="w-6 h-6 text-secondary mx-auto mb-3" />
                  <div className="text-sm font-bold text-primary mb-1">
                    Transporte
                  </div>
                  <div className="text-[10px] leading-tight text-muted-foreground font-medium">
                    FGC - Rodalies
                  </div>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </div>

      <ContactForm
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        title="Agendar Visita"
      />
    </section>
  );
};

export default Location;
