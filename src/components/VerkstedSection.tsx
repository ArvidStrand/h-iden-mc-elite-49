import { motion } from "framer-motion";
import { Wrench, Shield, Circle, Waves } from "lucide-react";
import { Button } from "@/components/ui/button";
import verkstedImg from "@/assets/verksted.png";

const services = [
  {
    icon: Wrench,
    title: "Service & reparasjoner",
    description:
      "Fullstendig service og reparasjon av alle MC-merker. Autorisert Honda og Yamaha verksted med sertifiserte mekanikere.",
  },
  {
    icon: Shield,
    title: "Skade­taksering",
    description:
      "Profesjonell skadetaksering og forsikringsoppgjør. Vi hjelper deg gjennom hele prosessen.",
  },
  {
    icon: Circle,
    title: "Dekk",
    description:
      "Stort utvalg av MC-dekk fra kjente merker. Montering og balansering inkludert.",
  },
  {
    icon: Waves,
    title: "Ultralydvask",
    description:
      "Grundig rengjøring av motorkomponenter med ultralydteknologi for optimalt resultat.",
  },
];

export const VerkstedSection = () => {
  return (
    <section id="verksted" className="py-24 scroll-mt-20 carbon-texture">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-lg overflow-hidden"
          >
            <img
              src={verkstedImg}
              alt="Mekanikere jobber på motorsykler i verkstedet hos Høiden MC-Senter"
              className="w-full h-[400px] lg:h-[500px] object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <p className="font-display text-2xl tracking-wider text-foreground">
                Profesjonelt verksted
              </p>
              <p className="text-muted-foreground text-sm font-body">
                Moderne utstyr · Erfarne mekanikere
              </p>
            </div>
          </motion.div>

          {/* Services */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-4xl md:text-5xl tracking-wider text-chrome mb-2">
                Verksted
              </h2>
              <div className="w-16 h-0.5 bg-primary mb-6" />
              <p className="text-muted-foreground font-body mb-8">
                Autorisert Honda & Yamaha verksted med over 35 års erfaring.
                Vi utfører alt fra vanlig service til store reparasjoner.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {services.map((service, i) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-card border border-border rounded-lg p-5 hover:border-primary/40 transition-all group"
                >
                  <service.icon className="w-6 h-6 text-primary mb-3 group-hover:scale-110 transition-transform" />
                  <h4 className="font-display text-lg tracking-wider text-foreground mb-2">
                    {service.title}
                  </h4>
                  <p className="text-muted-foreground text-xs font-body leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              ))}
            </div>

            <Button variant="cta" size="lg" asChild>
              <a href="#kontakt">Bestill service</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
