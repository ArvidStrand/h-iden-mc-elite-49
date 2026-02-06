import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Wrench, Snowflake, Bike, Route } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Wrench,
    title: "Verksted",
    description: "Autorisert Honda & Yamaha verksted med erfarne mekanikere og moderne utstyr.",
    to: "/verksted",
    cta: "Se tjenester",
  },
  {
    icon: Snowflake,
    title: "Vinterlagring",
    description: "Trygg og sikker oppbevaring av din motorsykkel gjennom vinteren.",
    to: "/vinterlagring",
    cta: "Se priser",
  },
  {
    icon: Bike,
    title: "MC til salgs",
    description: "Stort utvalg av brukte og nye motorsykler. Finansiering tilgjengelig.",
    to: "/mc-til-salgs",
    cta: "Se utvalget",
  },
  {
    icon: Route,
    title: "MC-turer",
    description: "Bli med på blåturer og sosiale kjøreopplevelser med hyggelige MC-folk.",
    to: "/mc-turer-og-aktiviteter",
    cta: "Les mer",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export const ServicesSection = () => {
  return (
    <section className="py-24 carbon-texture">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl tracking-wider text-chrome mb-4">
            Våre tjenester
          </h2>
          <div className="section-divider mb-6" />
          <p className="text-muted-foreground font-body max-w-xl mx-auto">
            Alt du trenger for din motorsykkel, under ett tak – siden 1986
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              className="group bg-card border border-border rounded-lg p-8 hover:border-primary/50 transition-all duration-500 hover:shadow-xl hover:shadow-primary/5"
            >
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-2xl tracking-wider text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm font-body leading-relaxed mb-6">
                {service.description}
              </p>
              <Button variant="outline-light" size="sm" asChild>
                <Link to={service.to}>{service.cta}</Link>
              </Button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
