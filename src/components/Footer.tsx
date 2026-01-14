import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Calendar, Star } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contacto" className="bg-primary text-primary-foreground">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4">
              Sala Polivalente Barcelona
            </h3>
            <p className="text-primary-foreground/80 mb-6 leading-relaxed">
              Un espacio versátil en el corazón de Barcelona para autónomos, profesores y artistas. 
              Sala amplia, moderna y equipada para clases de baile, yoga, pilates y eventos.
            </p>
            <div className="flex items-center gap-2 mb-4">
              <Star className="w-5 h-5 text-secondary" />
              <span className="font-semibold">5★ en Google Maps</span>
              <span className="text-primary-foreground/60">- Reseñas excelentes</span>
            </div>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <div className="space-y-3 text-primary-foreground/80">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-medium">Barcelona - Sants</div>
                  <div className="text-sm">Metro L1 y L5 (Mercat Nou - Pl.Sants)</div>
                  <div className="text-sm">FGC - Plaza España</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-secondary" />
                <span>the.studiez.bcn@gmail.com</span>
              </div>
            </div>
          </div>
          
        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-primary-foreground/60 text-sm">
              © 2024 Sala Polivalente Barcelona. Impulsando la vida cultural del barrio.
            </div>
            <div className="flex gap-6 text-sm text-primary-foreground/60">
              <a href="#" className="hover:text-secondary transition-colors">Política de Privacidad</a>
              <a href="#" className="hover:text-secondary transition-colors">Términos de Uso</a>
              <a href="#" className="hover:text-secondary transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;