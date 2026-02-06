import { motion } from "framer-motion";
import { ExternalLink, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/PageHero";
import { FINN_URL } from "@/lib/constants";
import heroBike from "@/assets/hero-bike.png";

const bikes = [
  {
    name: "Honda CB650R",
    year: 2023,
    km: "4 200 km",
    price: "109 900,-",
    finnUrl: "https://www.finn.no/pw/ad/mc/393348727?orgId=277933529",
  },
  {
    name: "Yamaha MT-07",
    year: 2022,
    km: "8 500 km",
    price: "89 900,-",
    finnUrl: "https://www.finn.no/pw/ad/mc/393348727?orgId=277933529",
  },
  {
    name: "Honda CRF1100L Africa Twin",
    year: 2021,
    km: "15 300 km",
    price: "159 900,-",
    finnUrl: "https://www.finn.no/pw/ad/mc/393348727?orgId=277933529",
  },
  {
    name: "Yamaha Ténéré 700",
    year: 2023,
    km: "2 100 km",
    price: "129 900,-",
    finnUrl: "https://www.finn.no/pw/ad/mc/393348727?orgId=277933529",
  },
];

export const McSalgsSection = () => {
  return (
    <>
      <PageHero
        title="MC til salgs"
        subtitle="Vi har alltid et godt utvalg av brukte og nye motorsykler. Finansiering via Santander og Nordea."
        backgroundImage={heroBike}
      />

      <section className="py-24 carbon-texture">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {bikes.map((bike, i) => (
              <motion.a
                key={bike.name}
                href={bike.finnUrl}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group bg-card border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-all hover:shadow-xl hover:shadow-primary/5"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={heroBike}
                    alt={`${bike.name} ${bike.year} til salgs hos Høiden MC-Senter`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                </div>
                <div className="p-5">
                  <h4 className="font-display text-xl tracking-wider text-foreground mb-1 group-hover:text-primary transition-colors">
                    {bike.name}
                  </h4>
                  <p className="text-muted-foreground text-xs font-body mb-3">
                    {bike.year} · {bike.km}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="font-display text-2xl text-primary">
                      {bike.price}
                    </span>
                    <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                </div>
              </motion.a>
            ))}
          </div>

          <div className="text-center space-y-4">
            <div className="flex items-center justify-center gap-2 text-muted-foreground text-sm font-body">
              <CreditCard className="w-4 h-4" />
              Finansiering tilgjengelig via Santander & Nordea
            </div>
            <Button variant="cta" size="lg" asChild className="min-h-[60px] text-base">
              <a
                href={FINN_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Se alle annonser på Finn.no
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};
