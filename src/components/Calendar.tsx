import { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import type { AvailabilityMap } from "@/types/availabilityMap";
import type { Day } from "@/types/calendarDay";

const API_URL = import.meta.env.VITE_API_URL;

interface CalendarProps {
  isLoggedIn?: boolean;
}

const Calendar = ({ isLoggedIn = false }: CalendarProps) => {
  const days: Day[] = [
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado",
    "Domingo",
  ];

  const timeSlots: string[] = [];
  // Generar slots de 30 minutos desde las 8:00 hasta las 22:00
  for (let hour = 8; hour < 22; hour++) {
    timeSlots.push(`${hour.toString().padStart(2, "0")}:00`);
    timeSlots.push(`${hour.toString().padStart(2, "0")}:30`);
  }

  // Estado del calendario usando AvailabilityMap (true = disponible). Se carga desde la API
  const [availability, setAvailability] = useState<AvailabilityMap | null>(
    null,
  );
  const [loading, setLoading] = useState(true);
  const [saveLoading, setSaveLoading] = useState(false);
  const { toast } = useToast();

  const timeToHourKey = (time: string): `${number}-00` | `${number}-30` => {
    const [hh, mm] = time.split(":");
    const hour = parseInt(hh, 10);
    return `${hour}-${mm === "00" ? "00" : "30"}` as
      | `${number}-00`
      | `${number}-30`;
  };

  const toggleAvailability = (day: Day, time: string) => {
    if (!isLoggedIn || !availability) return;
    const hourKey = timeToHourKey(time);
    setAvailability((prev) => {
      if (!prev) return prev;
      return {
        ...prev,
        [day]: {
          ...prev[day],
          [hourKey]: !prev[day][hourKey],
        },
      };
    });
  };

  const getSlotStatus = (day: Day, time: string) => {
    if (!availability) return "available";
    const hourKey = timeToHourKey(time);
    const isAvailable = availability[day]?.[hourKey];
    return isAvailable === undefined
      ? "available"
      : isAvailable
        ? "available"
        : "occupied";
  };

  // cargando disponibilidad desde la API
  useEffect(() => {
    setLoading(true);
    axios
      .get(`${API_URL}/calendar`)
      .then((res) => {
        setAvailability(res.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  // Guardar cambios de disponibilidad.
  const save = async () => {
    if (!availability) return;

    try {
      setSaveLoading(true);
      const token = localStorage.getItem("token");
      await axios.put(`${API_URL}/calendar`, availability, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast({ title: "Guardado", description: "Guardado correctamente" });
    } catch (err) {
      const message = err instanceof Error ? err.message : String(err);
      toast({
        title: "Error al guardar",
        description: message || "Error al guardar",
        variant: "destructive",
      });
    } finally {
      setSaveLoading(false);
    }
  };

  return (
    <section id="calendario" className="py-10 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-4">
            Disponibilidad de la Sala
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Consulta la disponibilidad en tiempo real de nuestra sala
            polivalente. Horarios de 8:00 a 22:00, todos los días de la semana.
          </p>
        </div>

        <AnimateOnScroll>
          <Card className="p-6 overflow-x-auto">
            <div className="flex items-center justify-between mb-4">
              <div className="text-sm text-muted-foreground">Horario</div>
              {isLoggedIn && (
                <div>
                  <Button onClick={save} disabled={saveLoading} size="sm">
                    {saveLoading ? "Guardando..." : "Guardar cambios"}
                  </Button>
                </div>
              )}
            </div>

            {loading ? (
              <p className="p-6 text-center">Cargando calendario...</p>
            ) : !availability ? (
              <p className="p-6 text-center">No hay disponibilidad</p>
            ) : (
              <>
                <TooltipProvider delayDuration={100}>
                  <div className="grid grid-cols-8 gap-2 min-w-max">
                    {/* Header con días */}
                    <div className="font-semibold text-center p-2">Hora</div>
                    {days.map((day) => (
                      <div
                        key={day}
                        className="font-semibold text-center p-2 text-primary"
                      >
                        {day}
                      </div>
                    ))}

                    {/* Slots de tiempo */}
                    {timeSlots.map((time) => (
                      <div key={time} className="contents">
                        <div className="font-medium text-sm p-2 text-center bg-muted rounded text-muted-foreground">
                          {time}
                        </div>
                        {days.map((day) => {
                          const status = getSlotStatus(day, time);
                          return (
                            <Tooltip key={`${day}-${time}`}>
                              <TooltipTrigger asChild>
                                <Button
                                  variant="calendar"
                                  size="sm"
                                  onClick={() => toggleAvailability(day, time)}
                                  className={cn(
                                    "calendar-slot h-12 text-xs font-medium transition-all",
                                    isLoggedIn
                                      ? "cursor-pointer"
                                      : "cursor-default",
                                    status === "available"
                                      ? "bg-available text-white hover:bg-available/90 border-available"
                                      : "bg-occupied text-occupied-foreground hover:bg-occupied/90 border-occupied",
                                  )}
                                >
                                  {status === "available" ? "Libre" : "Ocupado"}
                                </Button>
                              </TooltipTrigger>
                              <TooltipContent
                                side="top"
                                className="bg-primary text-primary-foreground"
                              >
                                <p className="font-medium">
                                  {day} - {time}
                                </p>
                              </TooltipContent>
                            </Tooltip>
                          );
                        })}
                      </div>
                    ))}
                  </div>
                </TooltipProvider>

                <div className="mt-6 flex flex-wrap gap-4 justify-center">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-available rounded"></div>
                    <span className="text-sm">Disponible</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-occupied rounded"></div>
                    <span className="text-sm">Ocupado</span>
                  </div>
                </div>
              </>
            )}
          </Card>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default Calendar;
