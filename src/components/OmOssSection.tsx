import { motion } from "framer-motion";
import { Clock, MapPin, Mail, Phone } from "lucide-react";
import lokaletImg from "@/assets/lokalet.png";

const hours = [
  { day: "Mandag – Fredag", time: "09:00 – 17:00" },
  { day: "Lørdag", time: "10:00 – 14:00" },
  { day: "Søndag", time: "Stengt" },
];

const staff = [
  {
    name: "Daglig leder",
    role: "Salg & administrasjon",
    email: "post@hoiden-mc.no",
    initials: "HL",
  },
  {
    name: "Verkstedleder",
    role: "Service & reparasjoner",
    email: "verksted@hoiden-mc.no",
    initials: "VL",
  },
];

export const OmOssSection = () => {
  return (
    <section id="om-oss" className="py-24 scroll-mt-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl tracking-wider text-chrome mb-4">
            Om oss
          </h2>
          <div className="section-divider mb-6" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          {/* History & Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="relative rounded-lg overflow-hidden mb-8">
              <img
                src={lokaletImg}
                alt="Høiden MC-Senter fasade i Dilling"
                className="w-full h-[350px] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </div>
            <h3 className="font-display text-3xl tracking-wider text-foreground mb-4">
              Siden 1986
            </h3>
            <p className="text-muted-foreground font-body leading-relaxed mb-4">
              Høiden MC-Senter AS har vært et samlingspunkt for motorsykkelentusiaster
              i Østfold siden 1986. Strategisk plassert i Dilling, like ved Moss og Rygge,
              har vi bygget opp et solid rykte for kvalitet, kompetanse og hyggelig
              kundebehandling.
            </p>
            <p className="text-muted-foreground font-body leading-relaxed">
              Som autorisert Honda og Yamaha forhandler tilbyr vi et komplett utvalg
              av nye og brukte motorsykler, deler, tilbehør og profesjonelle
              verkstedtjenester. Vårt erfarne team brenner for MC og gir deg alltid
              den beste servicen.
            </p>
          </motion.div>

          {/* Hours & Staff */}
          <div className="space-y-8">
            {/* Opening hours */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-lg p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <Clock className="w-6 h-6 text-primary" />
                <h3 className="font-display text-2xl tracking-wider text-foreground">
                  Åpningstider
                </h3>
              </div>
              <table className="w-full">
                <tbody>
                  {hours.map((h) => (
                    <tr key={h.day} className="border-b border-border last:border-0">
                      <td className="py-3 text-sm font-body text-foreground/80">
                        {h.day}
                      </td>
                      <td
                        className={`py-3 text-sm font-body text-right font-semibold ${
                          h.time === "Stengt"
                            ? "text-primary"
                            : "text-foreground"
                        }`}
                      >
                        {h.time}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </motion.div>

            {/* Contact info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-card border border-border rounded-lg p-8"
            >
              <h3 className="font-display text-2xl tracking-wider text-foreground mb-6">
                Kontaktinfo
              </h3>
              <div className="space-y-4">
                <a
                  href="https://maps.google.com/?q=Ryggeveien+121,+1570+Dilling"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-sm font-body text-muted-foreground hover:text-primary transition-colors"
                >
                  <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-primary" />
                  Ryggeveien 121, 1570 Dilling
                </a>
                <a
                  href="tel:+4769236040"
                  className="flex items-center gap-3 text-sm font-body text-muted-foreground hover:text-primary transition-colors"
                >
                  <Phone className="w-4 h-4 shrink-0 text-primary" />
                  69 23 60 40
                </a>
                <a
                  href="mailto:post@hoiden-mc.no"
                  className="flex items-center gap-3 text-sm font-body text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail className="w-4 h-4 shrink-0 text-primary" />
                  post@hoiden-mc.no
                </a>
              </div>
            </motion.div>

            {/* Staff */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="grid grid-cols-2 gap-4"
            >
              {staff.map((person) => (
                <div
                  key={person.name}
                  className="bg-card border border-border rounded-lg p-6 text-center hover:border-primary/30 transition-all"
                >
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <span className="font-display text-xl text-primary">
                      {person.initials}
                    </span>
                  </div>
                  <h4 className="font-display text-lg tracking-wider text-foreground mb-1">
                    {person.name}
                  </h4>
                  <p className="text-muted-foreground text-xs font-body mb-3">
                    {person.role}
                  </p>
                  <a
                    href={`mailto:${person.email}`}
                    className="text-primary text-xs font-body hover:underline"
                  >
                    {person.email}
                  </a>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
