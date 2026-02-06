import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Check, Snowflake } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/PageHero";
import vinterlagringImg from "@/assets/vinterlagring.png";

const plans = [
  { type: "Moped", price: "1 594,-", popular: false },
  { type: "Motorsykkel", price: "2 594,-", popular: true },
  { type: "Store motorsykler", price: "3 094,-", popular: false },
];

const checklist = [
  "Innlevering: Vasket og rengjort MC",
  "Batteriet bør lades/kobles fra",
  "Fjern verdisaker fra oppbevaring",
  "Dekktrykk kontrolleres",
  "Utlevering avtales i god tid",
];

export const VinterlagringSection = () => {
  return (
    <>
      <PageHero
        title="Vinterlagring"
        subtitle="Trygg og sikker innendørs oppbevaring av din motorsykkel gjennom vinteren, med god ventilasjon."
        backgroundImage={vinterlagringImg}
      />

      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <Snowflake className="w-8 h-8 text-primary" />
              <h2 className="font-display text-4xl md:text-5xl tracking-wider text-chrome">
                Priser
              </h2>
            </div>
            <div className="section-divider mb-6" />
          </motion.div>

          {/* Pricing cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-16">
            {plans.map((plan, i) => (
              <motion.div
                key={plan.type}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`bg-card border rounded-lg p-8 text-center transition-all hover:shadow-xl hover:shadow-primary/5 ${
                  plan.popular
                    ? "border-primary shadow-lg shadow-primary/10 scale-105"
                    : "border-border"
                }`}
              >
                {plan.popular && (
                  <span className="inline-block bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider px-3 py-1 rounded mb-4">
                    Populær
                  </span>
                )}
                <h3 className="font-display text-2xl tracking-wider text-foreground mb-2">
                  {plan.type}
                </h3>
                <p className="font-display text-4xl text-primary mb-1">
                  {plan.price}
                </p>
                <p className="text-muted-foreground text-xs font-body">
                  per sesong
                </p>
              </motion.div>
            ))}
          </div>

          {/* Checklist */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-lg mx-auto bg-card border border-border rounded-lg p-8 mb-10"
          >
            <h3 className="font-display text-2xl tracking-wider text-foreground mb-6 text-center">
              Sjekkliste for inn/utlevering
            </h3>
            <ul className="space-y-3">
              {checklist.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm font-body text-foreground/80">
                  <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <div className="text-center">
            <Button variant="cta" size="lg" asChild className="min-h-[60px] text-base">
              <Link to="/kontakt?emne=vinterlagring">Bestill vinterlagring</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};
