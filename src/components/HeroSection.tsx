import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBike from "@/assets/hero-bike.png";

export const HeroSection = () => {
  return (
    <section id="hjem" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with Ken Burns */}
      <div className="absolute inset-0">
        <img
          src={heroBike}
          alt="Motorsykkel på åpen vei ved solnedgang"
          className="w-full h-full object-cover animate-ken-burns"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="font-body text-xs md:text-sm tracking-[0.4em] uppercase text-primary font-semibold mb-4">
            Etablert 1986 · Dilling, Østfold
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-wider leading-none mb-6"
        >
          <span className="text-chrome">HØIDEN</span>{" "}
          <span className="text-primary">MC</span>
          <span className="text-chrome">-SENTER</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="font-body text-base md:text-lg text-foreground/80 max-w-2xl mx-auto mb-4 font-light"
        >
          Velkommen til hyggelig handel hos Høiden MC-Senter AS
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="font-body text-sm text-muted-foreground max-w-xl mx-auto mb-10"
        >
          Autorisert Honda & Yamaha forhandler — Salg, service, vinterlagring og MC-opplevelser
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button variant="cta" size="lg" asChild>
            <a href="#verksted">Bestill service</a>
          </Button>
          <Button variant="outline-light" size="lg" asChild>
            <a href="#salgs">Se motorsykler til salgs</a>
          </Button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <a
          href="#tjenester"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          aria-label="Scroll ned"
        >
          <span className="text-xs tracking-widest uppercase font-body">Utforsk</span>
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </a>
      </motion.div>
    </section>
  );
};
