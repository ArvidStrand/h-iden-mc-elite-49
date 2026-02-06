import { motion } from "framer-motion";
import { Star, ExternalLink } from "lucide-react";

const reviews = [
  {
    text: "Vennlig og hjelpsom betjening! Anbefales på det sterkeste.",
    rating: 5,
  },
  {
    text: "Utmerket service og oppfølging etter verkstedbesøk. Profesjonelt og grundig.",
    rating: 5,
  },
  {
    text: "Anbefales på det sterkeste for MC-kjøp og vedlikehold. Topp kvalitet!",
    rating: 5,
  },
  {
    text: "Dyktige mekanikere og hyggelig handel. Føler meg alltid velkommen.",
    rating: 5,
  },
];

const Stars = ({ count }: { count: number }) => (
  <div className="flex gap-0.5">
    {Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < count ? "fill-primary text-primary" : "text-muted-foreground/30"
        }`}
      />
    ))}
  </div>
);

export const ReviewsSection = () => {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl tracking-wider text-chrome mb-4">
            Google Anmeldelser
          </h2>
          <div className="section-divider mb-6" />

          {/* Overall rating */}
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="font-display text-5xl text-foreground">4.1</span>
            <div className="flex flex-col items-start">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < 4
                        ? "fill-primary text-primary"
                        : "fill-primary/30 text-primary/30"
                    }`}
                  />
                ))}
              </div>
              <span className="text-muted-foreground text-xs font-body">
                Mange fornøyde kunder
              </span>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card border border-border rounded-lg p-6 hover:border-primary/30 transition-all"
            >
              <Stars count={review.rating} />
              <p className="text-foreground/90 font-body text-sm leading-relaxed mt-4 italic">
                "{review.text}"
              </p>
              <p className="text-muted-foreground text-xs font-body mt-3">
                — Google-anmeldelse
              </p>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="https://www.google.com/maps/place/H%C3%B8iden+MC-Senter+AS/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary text-sm font-body font-semibold hover:underline"
          >
            Se alle anmeldelser på Google
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
