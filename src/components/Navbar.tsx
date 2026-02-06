import { useState, useEffect } from "react";
import { Menu, X, Phone, Facebook } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Hjem", href: "#hjem" },
  { label: "Verksted", href: "#verksted" },
  { label: "Vinterlagring", href: "#vinterlagring" },
  { label: "MC til salgs", href: "#salgs" },
  { label: "MC-turer", href: "#turer" },
  { label: "Om oss", href: "#om-oss" },
  { label: "Kontakt", href: "#kontakt" },
];

const FACEBOOK_URL =
  "https://www.facebook.com/H%C3%98IDEN-MC-SENTER-413669762737";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "py-2 bg-background/95 backdrop-blur-md shadow-lg shadow-black/60 border-b border-border/50"
          : "py-4 bg-gradient-to-b from-black/80 to-transparent"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a
          href="#hjem"
          className="font-display text-2xl md:text-3xl tracking-wider text-foreground transition-all"
        >
          HØIDEN{" "}
          <span className="text-primary">MC</span>
          -SENTER
        </a>

        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-3 py-2 text-xs font-semibold text-muted-foreground hover:text-primary transition-colors uppercase tracking-widest relative group"
            >
              {link.label}
              <span className="absolute bottom-0 left-3 right-3 h-px bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href="tel:+4769236040"
            className="flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded text-sm font-bold tracking-wide hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
          >
            <Phone className="w-4 h-4" />
            69 23 60 40
          </a>
          <a
            href={FACEBOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors p-2"
            aria-label="Følg oss på Facebook"
          >
            <Facebook className="w-5 h-5" />
          </a>
        </div>

        <button
          className="lg:hidden text-foreground p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Lukk meny" : "Åpne meny"}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden overflow-hidden bg-background/98 backdrop-blur-xl border-t border-border"
          >
            <nav className="container mx-auto px-4 py-6 flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="py-3 px-4 text-sm font-semibold text-foreground hover:text-primary hover:bg-secondary/50 rounded transition-all uppercase tracking-widest"
                >
                  {link.label}
                </a>
              ))}
              <div className="mt-4 pt-4 border-t border-border flex items-center gap-3">
                <a
                  href="tel:+4769236040"
                  className="flex-1 flex items-center justify-center gap-2 bg-primary text-primary-foreground px-5 py-3 rounded text-sm font-bold tracking-wide"
                >
                  <Phone className="w-4 h-4" />
                  69 23 60 40
                </a>
                <a
                  href={FACEBOOK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 border border-border rounded text-muted-foreground hover:text-primary transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
