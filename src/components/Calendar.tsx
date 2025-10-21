import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const Calendar = () => {
  // Estado del calendario - por ahora local, después se conectará a la base de datos
  const [availability, setAvailability] = useState<Record<string, 'available' | 'occupied'>>({});
  
  const days = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
  const timeSlots = [];
  
  // Generar slots de 30 minutos desde las 8:00 hasta las 22:00
  for (let hour = 8; hour < 22; hour++) {
    timeSlots.push(`${hour.toString().padStart(2, '0')}:00`);
    timeSlots.push(`${hour.toString().padStart(2, '0')}:30`);
  }
  
  const getSlotKey = (day: string, time: string) => `${day}-${time}`;
  
  const toggleAvailability = (day: string, time: string) => {
    const key = getSlotKey(day, time);
    setAvailability(prev => ({
      ...prev,
      [key]: prev[key] === 'available' ? 'occupied' : 'available'
    }));
  };
  
  const getSlotStatus = (day: string, time: string) => {
    const key = getSlotKey(day, time);
    return availability[key] || 'available';
  };

  return (
    <section id="calendario" className="py-10 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-4">
            Disponibilidad de la Sala
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Consulta la disponibilidad en tiempo real de nuestra sala polivalente. 
            Horarios de 8:00 a 22:00, todos los días de la semana.
          </p>
        </div>
        
        <Card className="p-6 overflow-x-auto">
          <div className="grid grid-cols-8 gap-2 min-w-max">
            {/* Header con días */}
            <div className="font-semibold text-center p-2">Hora</div>
            {days.map(day => (
              <div key={day} className="font-semibold text-center p-2 text-primary">
                {day}
              </div>
            ))}
            
            {/* Slots de tiempo */}
            {timeSlots.map(time => (
              <div key={time} className="contents">
                <div className="font-medium text-sm p-2 text-center bg-muted rounded text-muted-foreground">
                  {time}
                </div>
                {days.map(day => {
                  const status = getSlotStatus(day, time);
                  return (
                    <Button
                      key={`${day}-${time}`}
                      variant="calendar"
                      size="sm"
                      onClick={() => toggleAvailability(day, time)}
                      className={cn(
                        "calendar-slot h-12 text-xs font-medium",
                        status === 'available' 
                          ? "bg-available text-white hover:bg-available/90 border-available" 
                          : "bg-occupied text-occupied-foreground hover:bg-occupied/90 border-occupied"
                      )}
                    >
                      {status === 'available' ? 'Libre' : 'Ocupado'}
                    </Button>
                  );
                })}
              </div>
            ))}
          </div>
          
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
        </Card>
      </div>
    </section>
  );
};

export default Calendar;