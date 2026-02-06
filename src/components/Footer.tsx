import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, ExternalLink } from "lucide-react";
import {
  NAV_LINKS,
  FACEBOOK_URL,
  PHONE_NUMBER,
  PHONE_DISPLAY,
  EMAIL,
  ADDRESS,
  MAPS_URL,
  FINN_URL,
  BRANDS,
} from "@/lib/constants";

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <Link to="/" className="block mb-4">
              <h3 className="font-display text-2xl tracking-wider text-foreground">
                HØIDEN <span className="text-primary">MC</span>-SENTER
              </h3>
            </Link>
            <p className="text-muted-foreground text-sm font-body leading-relaxed mb-4">
              Autorisert Honda, Yamaha & Kymco forhandler og verksted. Din pålitelige
              MC-partner i Østfold siden 1986.
            </p>
            {/* Brands */}
            <div className="mb-4">
              <p className="text-xs font-body text-muted-foreground uppercase tracking-widest mb-2">
                Merker
              </p>
              <div className="flex gap-3">
                {BRANDS.map((brand) => (
                  <span
                    key={brand}
                    className="font-display text-sm tracking-wider text-foreground bg-secondary px-3 py-1 rounded"
                  >
                    {brand}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex gap-3">
              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-border rounded flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
                aria-label="Følg oss på Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-display text-lg tracking-wider text-foreground mb-4">
              Snarveier
            </h4>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-muted-foreground text-sm font-body hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg tracking-wider text-foreground mb-4">
              Kontakt
            </h4>
            <div className="space-y-3">
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 text-muted-foreground text-sm font-body hover:text-primary transition-colors"
              >
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                {ADDRESS}
              </a>
              <a
                href={`tel:${PHONE_NUMBER}`}
                className="flex items-center gap-2 text-muted-foreground text-sm font-body hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4 shrink-0" />
                {PHONE_DISPLAY}
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="flex items-center gap-2 text-muted-foreground text-sm font-body hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4 shrink-0" />
                {EMAIL}
              </a>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-display text-lg tracking-wider text-foreground mb-4">
              Åpningstider
            </h4>
            <div className="space-y-2 text-sm font-body">
              <div className="flex justify-between text-muted-foreground">
                <span>Man – Fre</span>
                <span className="text-foreground font-semibold">09:00 – 17:00</span>
              </div>
              <div className="flex justify-between text-muted-foreground">
                <span>Lørdag</span>
                <span className="text-foreground font-semibold">10:00 – 14:00</span>
              </div>
              <div className="flex justify-between text-muted-foreground">
                <span>Søndag</span>
                <span className="text-primary font-semibold">Stengt</span>
              </div>
            </div>
            <a
              href={FINN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 mt-4 text-primary text-xs font-body hover:underline"
            >
              Finn.no-annonser
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-xs font-body">
            © {new Date().getFullYear()} Høiden MC-Senter AS. Alle rettigheter reservert.
          </p>
          <p className="text-muted-foreground/60 text-xs font-body">
            {ADDRESS}, Østfold, Norge
          </p>
        </div>
      </div>
    </footer>
  );
};
