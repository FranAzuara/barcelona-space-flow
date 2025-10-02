import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Calendar } from "lucide-react";

const Navbar = () => {
  const navLinks = [
    { href: "#calendario", label: "Ver Disponibilidad" },
    { href: "#actividades", label: "Actividades" },
    { href: "#ubicacion", label: "Ubicación" },
    { href: "#tarifas", label: "Tarifas" },
  ];

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Brand */}
          <div className="flex items-center gap-3">
            <a 
              href="#hero"
              onClick={(e) => handleSmoothScroll(e, '#hero')}
              className="flex items-center gap-3 hover:opacity-80 transition-opacity cursor-pointer"
            >
              <img 
                src="/lovable-uploads/f233fd69-7cae-4def-9d39-1a83ee0722a0.png" 
                alt="The Studiez Logo" 
                className="w-10 h-10 rounded-lg"
              />
              <span className="text-xl font-bold text-foreground">The Studiez</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleSmoothScroll(e, link.href)}
                className="text-foreground/80 hover:text-secondary hover:font-bold transition-all duration-300 text-sm font-medium"
              >
                {link.label}
              </a>
            ))}
            <Button variant="default" size="sm">
              <Calendar className="mr-2 w-4 h-4" />
              Reservar
            </Button>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm">
                  <Menu className="w-5 h-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <div className="flex flex-col gap-6 pt-6">
                  <a 
                    href="#hero"
                    onClick={(e) => handleSmoothScroll(e, '#hero')}
                    className="flex items-center gap-3 hover:opacity-80 transition-opacity cursor-pointer"
                  >
                    <img 
                      src="/lovable-uploads/f233fd69-7cae-4def-9d39-1a83ee0722a0.png" 
                      alt="The Studiez Logo" 
                      className="w-10 h-10 rounded-lg"
                    />
                    <span className="text-xl font-bold text-foreground">The Studiez</span>
                  </a>
                  
                  <div className="flex flex-col gap-4">
                    {navLinks.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        onClick={(e) => handleSmoothScroll(e, link.href)}
                        className="text-foreground/80 hover:text-secondary hover:font-bold transition-all duration-300 py-2 px-4 rounded-md hover:bg-accent"
                      >
                        {link.label}
                      </a>
                    ))}
                    <Button variant="default" className="mt-4">
                      <Calendar className="mr-2 w-4 h-4" />
                      Reservar
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;