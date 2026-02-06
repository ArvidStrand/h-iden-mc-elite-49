import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Route, Facebook, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/PageHero";
import { FACEBOOK_URL } from "@/lib/constants";
import heroBike from "@/assets/hero-bike.png";

export const ToursSection = () => {
  return (
    <>
      <PageHero
        title="MC-turer & aktiviteter"
        subtitle="Bli med på blåturer og sosiale kjøreopplevelser med hyggelige MC-folk i Østfold og omegn."
        backgroundImage={heroBike}
      />

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-10"
            >
              <div className="flex items-center justify-center gap-3 mb-4">
                <Route className="w-8 h-8 text-primary" />
                <h2 className="font-display text-4xl md:text-5xl tracking-wider text-chrome">
                  Blåturer med Høiden MC
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
                <Button variant="cta" size="lg" asChild className="min-h-[60px] text-base">
                  <Link to="/kontakt?emne=blatur">Meld deg på neste tur</Link>
                </Button>
                <Button variant="outline-light" size="lg" asChild className="min-h-[60px] text-base">
                  <a
                    href={FACEBOOK_URL}
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
    </>
  );
};
