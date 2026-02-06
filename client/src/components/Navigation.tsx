import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Menu, X, Gem } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import logoImg from "../../public/logo.png";

export function Navigation() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/products", label: "Products" },
    // { href: "/about", label: "Our Story" },
    { href: "/contact", label: "Contact Us" },
  ];

  const isActive = (path: string) => location === path;

  return (
    <nav className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
            <img className="w-20" src={logoImg} alt="Diamond Tools Inc. Logo" />
          {/* <div className="bg-primary p-2 rounded-lg text-primary-foreground group-hover:bg-accent transition-colors duration-300"> */}
            {/* <Gem className="h-6 w-6" /> */}
          {/* </div> */}
          <div className="flex flex-col">
            <span className="font-logo font-bold text-xl leading-none tracking-wide text-foreground">
              NAITIK DIAMOND TOOLS
            </span>
            <span className="font-sans text-xs tracking-[0.2em] text-muted-foreground font-semibold">
              PVT LTD.
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-accent uppercase tracking-wider",
                isActive(link.href) ? "text-primary font-bold" : "text-muted-foreground"
              )}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/contact">
            <Button size="sm" className="bg-accent hover:bg-accent/90 text-white font-bold">
              GET QUOTE
            </Button>
          </Link>
        </div>

        {/* Mobile Nav */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col gap-6 mt-10">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "text-xl font-display font-medium transition-colors hover:text-accent",
                      isActive(link.href) ? "text-primary" : "text-muted-foreground"
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
