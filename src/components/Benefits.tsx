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
    <section id="beneficios" className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-6">
        <AnimateOnScroll>
          <div className="p-12 bg-white rounded-[2.5rem] shadow-ethereal border border-border/50 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl -ml-32 -mb-32"></div>

            <div className="text-center relative z-10">
              <div className="w-20 h-20 rounded-3xl bg-secondary/10 flex items-center justify-center mx-auto mb-6 rotate-3">
                <Star className="w-10 h-10 text-secondary fill-secondary" />
              </div>
              <h3 className="text-4xl md:text-5xl font-bold text-primary mb-6 tracking-tight">
                ¿Por qué elegir nuestra sala polivalente?
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                <div className="group p-6 rounded-2xl bg-background/50 border border-border/50 hover:border-secondary/30 hover:bg-white transition-all duration-500 hover:shadow-studio">
                  <div className="flex flex-col items-center text-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-secondary/5 flex items-center justify-center group-hover:bg-secondary/10 transition-colors">
                      <DollarSign className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <div className="text-sm text-primary font-black mb-2 tracking-widest uppercase">
                        CERO COSTES FIJOS
                      </div>
                      <div className="text-sm text-muted-foreground leading-relaxed">
                        Paga solo por el tiempo que usas, nos encargamos del
                        mantenimiento y suministros.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="group p-6 rounded-2xl bg-background/50 border border-border/50 hover:border-secondary/30 hover:bg-white transition-all duration-500 hover:shadow-studio">
                  <div className="flex flex-col items-center text-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-secondary/5 flex items-center justify-center group-hover:bg-secondary/10 transition-colors">
                      <Wrench className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <div className="text-sm text-primary font-black mb-2 tracking-widest uppercase">
                        EQUIPAMIENTO PROFESIONAL
                      </div>
                      <div className="text-sm text-muted-foreground leading-relaxed">
                        Suelo técnico, sistema de sonido y todo el material a su
                        disposición.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="group p-6 rounded-2xl bg-background/50 border border-border/50 hover:border-secondary/30 hover:bg-white transition-all duration-500 hover:shadow-studio">
                  <div className="flex flex-col items-center text-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-secondary/5 flex items-center justify-center group-hover:bg-secondary/10 transition-colors">
                      <Award className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <div className="text-sm text-primary font-black mb-2 tracking-widest uppercase">
                        VALORACIÓN MÁXIMA
                      </div>
                      <div className="text-sm text-muted-foreground leading-relaxed">
                        La confianza de otros profesionales que ya operan con
                        éxito en nuestro espacio.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="group p-6 rounded-2xl bg-background/50 border border-border/50 hover:border-secondary/30 hover:bg-white transition-all duration-500 hover:shadow-studio">
                  <div className="flex flex-col items-center text-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-secondary/5 flex items-center justify-center group-hover:bg-secondary/10 transition-colors">
                      <FileText className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <div className="text-sm text-primary font-black mb-2 tracking-widest uppercase">
                        GESTIÓN TRANSPARENTE
                      </div>
                      <div className="text-sm text-muted-foreground leading-relaxed">
                        Contratos claros, facturación detallada y soporte rápido
                        ante cualquier incidencia.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="group p-6 rounded-2xl bg-background/50 border border-border/50 hover:border-secondary/30 hover:bg-white transition-all duration-500 hover:shadow-studio">
                  <div className="flex flex-col items-center text-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-secondary/5 flex items-center justify-center group-hover:bg-secondary/10 transition-colors">
                      <MapPin className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <div className="text-sm text-primary font-black mb-2 tracking-widest uppercase">
                        UBICACIÓN CLAVE
                      </div>
                      <div className="text-sm text-muted-foreground leading-relaxed">
                        Fácil acceso y excelente conexión con transporte público
                        para tus clientes.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="group p-6 rounded-2xl bg-background/50 border border-border/50 hover:border-secondary/30 hover:bg-white transition-all duration-500 hover:shadow-studio">
                  <div className="flex flex-col items-center text-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-secondary/5 flex items-center justify-center group-hover:bg-secondary/10 transition-colors">
                      <Key className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <div className="text-sm text-primary font-black mb-2 tracking-widest uppercase">
                        ACCESO INDEPENDIENTE
                      </div>
                      <div className="text-sm text-muted-foreground leading-relaxed">
                        Usa tu franja horaria sin dependencia de personal, solo
                        concéntrate en tu clase.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default Benefits;
