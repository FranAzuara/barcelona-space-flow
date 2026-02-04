import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const API_URL = import.meta.env.VITE_API_URL;

interface LogoutModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onLogoutConfirm: () => void;
}

export const LogoutModal = ({
  open,
  onOpenChange,
  onLogoutConfirm,
}: LogoutModalProps) => {
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleLogout = () => {
    setLoading(true);
    // No hay ruta API logout - elimino token del localStorage
    localStorage.removeItem("token");
    onLogoutConfirm();
    toast({
      title: "Sesión cerrada",
      description: "Has cerrado sesión correctamente",
    });
    onOpenChange(false);
    setLoading(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-xl">
            Cerrar Sesión
          </DialogTitle>
        </DialogHeader>

        <div className="py-4">
          <p className="text-center text-gray-600">
            ¿Seguro que quieres cerrar tu sesión?
          </p>
        </div>

        <DialogFooter className="flex gap-3">
          <Button
            variant="outline"
            onClick={() => onOpenChange(false)}
            className="flex-1"
          >
            Cancelar
          </Button>
          <Button
            variant="destructive"
            onClick={handleLogout}
            className="flex-1"
          >
            Cerrar Sesión
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
