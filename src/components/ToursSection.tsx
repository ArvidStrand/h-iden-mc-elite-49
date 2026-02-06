import { motion } from "framer-motion";
import { Route, Facebook, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBike from "@/assets/hero-bike.png";

export const ToursSection = () => {
  return (
    <section id="turer" className="py-24 scroll-mt-20 relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroBike}
          alt="Motorsykkelkjøring langs naturskjønne veier"
          className="w-full h-full object-cover opacity-15"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-background/85" />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <Route className="w-8 h-8 text-primary" />
              <h2 className="font-display text-4xl md:text-5xl tracking-wider text-chrome">
                MC-turer & aktiviteter
              </h2>
            </div>
            <div className="section-divider mb-8" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-card border border-border rounded-lg p-8 md:p-12 mb-10"
          >
            <h3 className="font-display text-3xl tracking-wider text-foreground mb-4">
              Blåturer med Høiden MC
            </h3>
            <p className="text-muted-foreground font-body leading-relaxed mb-6">
              Gjennom sesongen arrangerer vi hyggelige blåturer for alle MC-entusiaster.
              En blåtur er en uformell gruppekjøring der vi utforsker flotte veier i
              Østfold og omegn. Alle er velkomne – uansett merke, modell eller erfaring.
              Vi møtes hos Høiden MC-Senter og kjører sammen i rolig tempo.
            </p>
            <p className="text-muted-foreground font-body leading-relaxed mb-8">
              Følg med på vår Facebook-side for kommende turer og arrangementer.
              Det er alltid rom for flere i gjengen!
            </p>

            <div className="flex items-center justify-center gap-3 text-muted-foreground text-sm font-body mb-8">
              <Users className="w-5 h-5 text-primary" />
              <span>Åpent for alle MC-førere</span>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="cta" size="lg" asChild>
                <a href="#kontakt">Meld deg på neste tur</a>
              </Button>
              <Button variant="outline-light" size="lg" asChild>
                <a
                  href="https://www.facebook.com/H%C3%98IDEN-MC-SENTER-413669762737"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Facebook className="w-4 h-4 mr-2" />
                  Følg oss på Facebook
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
