import { Card } from "@/components/ui/card";
import {
  Star,
  DollarSign,
  Wrench,
  Award,
  FileText,
  MapPin,
  Key,
} from "lucide-react";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";

const Benefits = () => {
  return (
    <section id="beneficios" className="py-10 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <AnimateOnScroll>
          <Card className="p-8 bg-gradient-to-r from-secondary/10 to-primary/5 border-secondary/20">
            <div className="text-center">
              <Star className="w-12 h-12 text-secondary mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-primary mb-4">
                ¿Por qué elegir nuestra sala polivalente?
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                <div className="group p-4 rounded-lg bg-background/50 border border-secondary/20 hover:border-secondary/40 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                      <DollarSign className="w-5 h-5 text-secondary" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-primary font-bold mb-1">
                        CERO COSTES FIJOS
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Paga solo por el tiempo que usas, nos encargamos del
                        mantenimiento y suministros.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="group p-4 rounded-lg bg-background/50 border border-secondary/20 hover:border-secondary/40 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                      <Wrench className="w-5 h-5 text-secondary" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-primary font-bold mb-1">
                        EQUIPAMIENTO PROFESIONAL INCLUIDO
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Suelo técnico, sistema de sonido y todo el material a su
                        disposición.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="group p-4 rounded-lg bg-background/50 border border-secondary/20 hover:border-secondary/40 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                      <Award className="w-5 h-5 text-secondary" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-primary font-bold mb-1">
                        VALORACIÓN MÁXIMA (5★)
                      </div>
                      <div className="text-xs text-muted-foreground">
                        La confianza de otros profesionales que ya operan con
                        éxito en nuestro espacio.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="group p-4 rounded-lg bg-background/50 border border-secondary/20 hover:border-secondary/40 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                      <FileText className="w-5 h-5 text-secondary" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-primary font-bold mb-1">
                        GESTIÓN TRANSPARENTE
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Contratos claros, facturación detallada y soporte rápido
                        ante cualquier incidencia.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="group p-4 rounded-lg bg-background/50 border border-secondary/20 hover:border-secondary/40 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                      <MapPin className="w-5 h-5 text-secondary" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-primary font-bold mb-1">
                        UBICACIÓN CLAVE
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Fácil acceso y excelente conexión con transporte público
                        para tus clientes.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="group p-4 rounded-lg bg-background/50 border border-secondary/20 hover:border-secondary/40 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                      <Key className="w-5 h-5 text-secondary" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-primary font-bold mb-1">
                        ACCESO INDEPENDIENTE
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Usa tu franja horaria sin dependencia de personal, solo
                        concéntrate en tu clase.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default Benefits;
