import { useState } from "react";
import { motion } from "framer-motion";
import { Send, MapPin, Phone, Mail, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

export const ContactSection = () => {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    navn: "",
    telefon: "",
    epost: "",
    emne: "",
    melding: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.navn || !formData.telefon || !formData.epost) {
      toast({
        title: "Vennligst fyll ut alle påkrevde felt",
        variant: "destructive",
      });
      return;
    }
    setSubmitted(true);
    toast({
      title: "Takk for din henvendelse!",
      description: "Vi tar kontakt med deg så snart som mulig.",
    });
  };

  return (
    <section id="kontakt" className="py-24 scroll-mt-20 carbon-texture">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl tracking-wider text-chrome mb-4">
            Kontakt oss
          </h2>
          <div className="section-divider mb-6" />
          <p className="text-muted-foreground font-body max-w-xl mx-auto">
            Ta kontakt for service, vinterlagring, kjøp eller spørsmål.
            Vi svarer så raskt vi kan!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="relative rounded-lg overflow-hidden border border-border h-[400px]">
              <iframe
                src="https://maps.google.com/maps?q=Ryggeveien+121,+1570+Dilling,+Norway&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full"
                style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) brightness(0.9) contrast(1.1)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Høiden MC-Senter kart"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <a
                href="https://maps.google.com/?q=Ryggeveien+121,+1570+Dilling"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-card border border-border rounded-lg p-4 hover:border-primary/40 transition-all"
              >
                <MapPin className="w-5 h-5 text-primary shrink-0" />
                <div>
                  <p className="text-xs font-body text-foreground font-semibold">Adresse</p>
                  <p className="text-xs font-body text-muted-foreground">
                    Ryggeveien 121, 1570 Dilling
                  </p>
                </div>
              </a>
              <a
                href="tel:+4769236040"
                className="flex items-center gap-3 bg-card border border-border rounded-lg p-4 hover:border-primary/40 transition-all"
              >
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <div>
                  <p className="text-xs font-body text-foreground font-semibold">Telefon</p>
                  <p className="text-xs font-body text-muted-foreground">69 23 60 40</p>
                </div>
              </a>
              <a
                href="mailto:post@hoiden-mc.no"
                className="flex items-center gap-3 bg-card border border-border rounded-lg p-4 hover:border-primary/40 transition-all"
              >
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <div>
                  <p className="text-xs font-body text-foreground font-semibold">E-post</p>
                  <p className="text-xs font-body text-muted-foreground">post@hoiden-mc.no</p>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {submitted ? (
              <div className="bg-card border border-primary/30 rounded-lg p-12 text-center h-full flex flex-col items-center justify-center">
                <CheckCircle className="w-16 h-16 text-primary mb-6" />
                <h3 className="font-display text-3xl tracking-wider text-foreground mb-3">
                  Meldingen er sendt!
                </h3>
                <p className="text-muted-foreground font-body">
                  Takk for din henvendelse. Vi svarer så raskt vi kan.
                </p>
                <Button
                  variant="outline-light"
                  className="mt-6"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ navn: "", telefon: "", epost: "", emne: "", melding: "" });
                  }}
                >
                  Send ny melding
                </Button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-card border border-border rounded-lg p-8 space-y-5"
              >
                <h3 className="font-display text-2xl tracking-wider text-foreground mb-2">
                  Send oss en melding
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="navn"
                      className="block text-xs font-body font-semibold text-foreground/80 mb-1.5 uppercase tracking-wider"
                    >
                      Navn *
                    </label>
                    <input
                      id="navn"
                      name="navn"
                      type="text"
                      required
                      value={formData.navn}
                      onChange={handleChange}
                      className="w-full bg-secondary border border-border rounded px-4 py-3 text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition"
                      placeholder="Ditt navn"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="telefon"
                      className="block text-xs font-body font-semibold text-foreground/80 mb-1.5 uppercase tracking-wider"
                    >
                      Telefon *
                    </label>
                    <input
                      id="telefon"
                      name="telefon"
                      type="tel"
                      required
                      value={formData.telefon}
                      onChange={handleChange}
                      className="w-full bg-secondary border border-border rounded px-4 py-3 text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition"
                      placeholder="Ditt telefonnummer"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="epost"
                    className="block text-xs font-body font-semibold text-foreground/80 mb-1.5 uppercase tracking-wider"
                  >
                    E-post *
                  </label>
                  <input
                    id="epost"
                    name="epost"
                    type="email"
                    required
                    value={formData.epost}
                    onChange={handleChange}
                    className="w-full bg-secondary border border-border rounded px-4 py-3 text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition"
                    placeholder="din@epost.no"
                  />
                </div>

                <div>
                  <label
                    htmlFor="emne"
                    className="block text-xs font-body font-semibold text-foreground/80 mb-1.5 uppercase tracking-wider"
                  >
                    Emne
                  </label>
                  <select
                    id="emne"
                    name="emne"
                    value={formData.emne}
                    onChange={handleChange}
                    className="w-full bg-secondary border border-border rounded px-4 py-3 text-sm font-body text-foreground focus:outline-none focus:ring-2 focus:ring-ring transition appearance-none"
                  >
                    <option value="">Velg emne...</option>
                    <option value="service">Service / Verksted</option>
                    <option value="vinterlagring">Vinterlagring</option>
                    <option value="blatur">Påmelding til blåtur</option>
                    <option value="kjop">Kjøp / salg av MC</option>
                    <option value="annet">Annet</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="melding"
                    className="block text-xs font-body font-semibold text-foreground/80 mb-1.5 uppercase tracking-wider"
                  >
                    Melding
                  </label>
                  <textarea
                    id="melding"
                    name="melding"
                    rows={4}
                    value={formData.melding}
                    onChange={handleChange}
                    className="w-full bg-secondary border border-border rounded px-4 py-3 text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition resize-none"
                    placeholder="Skriv din melding her..."
                  />
                </div>

                <Button variant="cta" size="lg" type="submit" className="w-full">
                  <Send className="w-4 h-4 mr-2" />
                  Send melding
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
