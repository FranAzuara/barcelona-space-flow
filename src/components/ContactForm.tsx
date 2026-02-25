import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Check } from "lucide-react";

const formSchema = z.object({
  nombre: z.string().min(1, "El nombre es obligatorio"),
  email: z.string().email("Introduce un email válido"),
  telefono: z.string().min(1, "El número de teléfono es obligatorio"),
  asunto: z.string().min(1, "Selecciona un asunto"),
  dia: z.string().optional(),
  descripcion: z.string().optional(),
  horaInicio: z.string().optional(),
  horaFinal: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

interface ContactFormProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
}

const ContactForm = ({ isOpen, onClose, title }: ContactFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);
  const { toast } = useToast();

  // Mostrar campos de hora solo para consultar tarifas, solicitar presupuesto y reservar
  const showTimeFields =
    title === "Consultar Disponibilidad" || title === "Solicitar Reserva";

  // Generar opciones de horario de 8:00 a 22:00 en intervalos de 30 minutos
  const timeOptions = [];
  for (let hour = 8; hour <= 22; hour++) {
    timeOptions.push(`${hour.toString().padStart(2, "0")}:00`);
    if (hour < 22) {
      timeOptions.push(`${hour.toString().padStart(2, "0")}:30`);
    }
  }

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nombre: "",
      email: "",
      telefono: "",
      asunto: "",
      dia: "",
      descripcion: "",
      horaInicio: "",
      horaFinal: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);

    // Simular envío del formulario
    await new Promise((resolve) => setTimeout(resolve, 1000));

    form.reset();
    onClose();
    setIsSubmitting(false);
    setShowSuccessDialog(true);
  };

  return (
    <>
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="sm:max-w-[550px] max-h-[90vh] overflow-y-auto rounded-[2.5rem] p-10">
          <DialogHeader className="mb-8">
            <DialogTitle className="text-3xl font-black text-primary tracking-tighter">
              {title}
            </DialogTitle>
            <DialogDescription className="text-base text-muted-foreground leading-relaxed">
              Déjanos tus datos para verificar si el horario está libre. Te
              contactaremos pronto para confirmar la reserva.
            </DialogDescription>
          </DialogHeader>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="nombre"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nombre *</FormLabel>
                    <FormControl>
                      <Input placeholder="Tu nombre completo" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Correo electrónico *</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="tu@email.com"
                        type="email"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="telefono"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Número de teléfono *</FormLabel>
                    <FormControl>
                      <Input placeholder="123 456 789" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="asunto"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Asunto *</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecciona el tipo de uso" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="clase-esporadica">
                          Clase esporádica
                        </SelectItem>
                        <SelectItem value="uso-recurrente">
                          Uso recurrente semanal
                        </SelectItem>
                        <SelectItem value="evento-completo">
                          Evento Jornada Completa
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="dia"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Día</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecciona un día" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="lunes">Lunes</SelectItem>
                        <SelectItem value="martes">Martes</SelectItem>
                        <SelectItem value="miercoles">Miércoles</SelectItem>
                        <SelectItem value="jueves">Jueves</SelectItem>
                        <SelectItem value="viernes">Viernes</SelectItem>
                        <SelectItem value="sabado">Sábado</SelectItem>
                        <SelectItem value="domingo">Domingo</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {showTimeFields && (
                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="horaInicio"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Hora de inicio</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Selecciona hora" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {timeOptions.map((time) => (
                              <SelectItem key={time} value={time}>
                                {time}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="horaFinal"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Hora final</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Selecciona hora" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {timeOptions.map((time) => (
                              <SelectItem key={time} value={time}>
                                {time}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              )}

              <FormField
                control={form.control}
                name="descripcion"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Descripción</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Cuéntanos más detalles sobre tu necesidad..."
                        className="min-h-[100px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex gap-3 pt-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={onClose}
                  className="flex-1"
                >
                  Cancelar
                </Button>
                <Button
                  type="submit"
                  variant="hero"
                  disabled={isSubmitting}
                  className="flex-[2] py-6 text-lg"
                >
                  {isSubmitting ? "Enviando..." : "Enviar Solicitud"}
                </Button>
              </div>
            </form>
          </Form>
        </DialogContent>
      </Dialog>

      <Dialog open={showSuccessDialog} onOpenChange={setShowSuccessDialog}>
        <DialogContent className="sm:max-w-[450px] rounded-[2.5rem] p-12 text-center">
          <DialogHeader>
            <div className="w-20 h-20 bg-secondary/10 rounded-3xl flex items-center justify-center mx-auto mb-6">
              <Check className="w-10 h-10 text-secondary" />
            </div>
            <DialogTitle className="text-3xl font-black text-primary tracking-tighter">
              ¡Gracias por su solicitud!
            </DialogTitle>
            <DialogDescription className="pt-4 text-lg text-muted-foreground leading-relaxed">
              En 24/48h la revisaremos y te confirmamos disponibilidad.
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-center pt-8">
            <Button onClick={() => setShowSuccessDialog(false)} variant="hero" className="w-full py-6 text-lg">
              Cerrar
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ContactForm;
