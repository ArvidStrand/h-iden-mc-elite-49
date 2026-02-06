import { Phone, Mail, MapPin, Facebook, ExternalLink } from "lucide-react";

const quickLinks = [
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

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <h3 className="font-display text-2xl tracking-wider text-foreground mb-4">
              HØIDEN <span className="text-primary">MC</span>-SENTER
            </h3>
            <p className="text-muted-foreground text-sm font-body leading-relaxed mb-4">
              Autorisert Honda & Yamaha forhandler og verksted. Din pålitelige
              MC-partner i Østfold siden 1986.
            </p>
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
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-muted-foreground text-sm font-body hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
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
                href="https://maps.google.com/?q=Ryggeveien+121,+1570+Dilling"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 text-muted-foreground text-sm font-body hover:text-primary transition-colors"
              >
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                Ryggeveien 121, 1570 Dilling
              </a>
              <a
                href="tel:+4769236040"
                className="flex items-center gap-2 text-muted-foreground text-sm font-body hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4 shrink-0" />
                69 23 60 40
              </a>
              <a
                href="mailto:post@hoiden-mc.no"
                className="flex items-center gap-2 text-muted-foreground text-sm font-body hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4 shrink-0" />
                post@hoiden-mc.no
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
              href="https://www.finn.no/pw/search/mc?orgId=277933529"
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
            Ryggeveien 121, 1570 Dilling, Østfold, Norge
          </p>
        </div>
      </div>
    </footer>
  );
};
