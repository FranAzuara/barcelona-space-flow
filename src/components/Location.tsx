import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Train, Car, Clock } from "lucide-react";
import ContactForm from "@/components/ContactForm";

const Location = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  return (
    <section id="ubicacion" className="py-10 bg-muted/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-4">
            Ubicación Inmejorable en Barcelona
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Perfectamente conectada con el transporte público y los principales barrios de la ciudad. 
            Tu comodidad y la de tus estudiantes es nuestra prioridad.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <Card className="p-6">
              <div className="flex items-start space-x-4">
                <Train className="w-8 h-8 text-secondary flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-2">
                    Acceso Directo al Metro
                  </h3>
                  <p className="text-muted-foreground mb-3">
                    Estamos a pie de metro con acceso a las líneas L1 y L5, lo que hace que venir 
                    en transporte público sea extremadamente sencillo.
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
                      <span>Cerca de Plaza España (L1 - L3 - L8 - FGC)</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
            
            <Card className="p-6">
              <div className="flex items-start space-x-4">
                <MapPin className="w-8 h-8 text-secondary flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-2">
                    Conectada con Toda la Ciudad
                  </h3>
                  <p className="text-muted-foreground">
                    La ubicación facilita la asistencia desde cualquier barrio de Barcelona 
                    y mejora la puntualidad de los grupos y clases.
                  </p>
                </div>
              </div>
            </Card>
            
            <div className="space-y-4">
              <div className="w-full h-64 rounded-lg overflow-hidden border relative">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2994.033379685942!2d2.1331960980965996!3d41.373359498633846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a49970c2db9919%3A0xf6eb399dc068620a!2sThe%20Studiez!5e0!3m2!1ses!2ses!4v1758375633698!5m2!1ses!2ses" 
                  width="100%" 
                  height="100%" 
                  style={{border: 0}} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <Card className="p-8 bg-gradient-to-br from-secondary/10 to-secondary/5 border-secondary/20">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-secondary mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-primary mb-4">
                  Visítanos
                </h3>
                <p className="text-muted-foreground mb-6">
                  Ven a conocer nuestro espacio en persona. Te enseñaremos todas las 
                  instalaciones y resolveremos cualquier duda que tengas.
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
            </Card>
            
            <div className="grid grid-cols-3 gap-4">
              <Card className="p-4 text-center">
                <Clock className="w-6 h-6 text-secondary mx-auto mb-2" />
                <div className="text-sm font-medium text-primary">Horarios</div>
                <div className="text-xs text-muted-foreground">8:00 - 22:00</div>
              </Card>
              <Card className="p-4 text-center">
                <Train className="w-6 h-6 text-secondary mx-auto mb-2" />
                <div className="text-sm font-medium text-primary">Metro</div>
                <div className="text-xs text-muted-foreground">L1 - L5</div>
              </Card>
              <Card className="p-4 text-center">
                <Train className="w-6 h-6 text-secondary mx-auto mb-2" />
                <div className="text-sm font-medium text-primary">FGC</div>
                <div className="text-xs text-muted-foreground">Plaza España</div>
              </Card>
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