import { motion } from "framer-motion";
import { Clock, MapPin, Mail, Phone, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/PageHero";
import { downloadVCard } from "@/lib/vcard";
import { PHONE_NUMBER, PHONE_DISPLAY, EMAIL, ADDRESS, MAPS_URL } from "@/lib/constants";
import lokaletImg from "@/assets/lokalet.png";

const hours = [
  { day: "Mandag – Fredag", time: "09:00 – 17:00" },
  { day: "Lørdag", time: "10:00 – 14:00" },
  { day: "Søndag", time: "Stengt" },
];

const staff = [
  {
    firstName: "Jørn Freddy",
    lastName: "Kristiansen",
    role: "Daglig leder",
    email: "freddy@hoiden-mc.no",
    initials: "JFK",
  },
  {
    firstName: "Aleksander",
    lastName: "Snellingen Ormvold",
    role: "Kundemottak verksted / delelager / salg",
    email: "aleksander@hoiden-mc.no",
    initials: "ASO",
  },
  {
    firstName: "Jesper",
    lastName: "Fekjær",
    role: "Mekaniker",
    email: "jesper@hoiden-mc.no",
    initials: "JF",
  },
  {
    firstName: "Thomas",
    lastName: "Berg",
    role: "Verksmester",
    email: "thomas@hoiden-mc.no",
    initials: "TB",
  },
];

export const OmOssSection = () => {
  return (
    <>
      <PageHero
        title="Om oss"
        subtitle="Din MC-partner i Østfold siden 1986"
        backgroundImage={lokaletImg}
      />

      <section className="py-24">
        <div className="container mx-auto px-4">
          {/* Åpningstider */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto bg-card border border-border rounded-lg p-8 mb-20"
          >
            <div className="flex items-center gap-3 mb-6">
              <Clock className="w-6 h-6 text-primary" />
              <h2 className="font-display text-3xl tracking-wider text-foreground">
                Våre åpningstider
              </h2>
            </div>
            <table className="w-full">
              <tbody>
                {hours.map((h) => (
                  <tr key={h.day} className="border-b border-border last:border-0">
                    <td className="py-4 text-sm font-body text-foreground/80">
                      {h.day}
                    </td>
                    <td
                      className={`py-4 text-sm font-body text-right font-semibold ${
                        h.time === "Stengt" ? "text-primary" : "text-foreground"
                      }`}
                    >
                      {h.time}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>

          {/* Hvem vi er */}
          <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
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
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-10"
            >
              {/* Hvem vi er */}
              <div>
                <h2 className="font-display text-3xl md:text-4xl tracking-wider text-chrome mb-4">
                  Hvem vi er
                </h2>
                <div className="w-16 h-0.5 bg-primary mb-6" />
                <p className="text-muted-foreground font-body leading-relaxed">
                  Helt siden oppstarten i 1986, har Høiden MC-Senter hatt som målsetning å
                  være en av ledende MC-sentere i Norge, både på utvalg og kvalitet. Hos oss
                  vil du finne et bredt spekter av både nye og brukte mopeder, scootere,
                  motorsykler. Vi har valgt kjente leverandører både på kjøretøy og
                  reservedeler, bekledning og service.
                </p>
              </div>

              {/* Hva vi gjør */}
              <div>
                <h2 className="font-display text-3xl md:text-4xl tracking-wider text-chrome mb-4">
                  Hva vi gjør
                </h2>
                <div className="w-16 h-0.5 bg-primary mb-6" />
                <p className="text-muted-foreground font-body leading-relaxed">
                  Vi er forhandler av mopeder og motorsykler og er et velrennomert autorisert
                  motorsykkelverksted.
                </p>
              </div>

              {/* Hvor vi er */}
              <div>
                <h2 className="font-display text-3xl md:text-4xl tracking-wider text-chrome mb-4">
                  Hvor vi er
                </h2>
                <div className="w-16 h-0.5 bg-primary mb-6" />
                <p className="text-muted-foreground font-body leading-relaxed">
                  Du finner vårt MC-senter og verksted lett tilgjengelig i Ryggeveien 121
                  mellom Rygge og Moss, i Østfold. Vi har et topp moderne verksted med
                  oppdatert utstyr og tilbyr vinterlagring for moped og MC kjøretøy.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto bg-card border border-border rounded-lg p-8 mb-20"
          >
            <h3 className="font-display text-2xl tracking-wider text-foreground mb-6">
              Kontaktinfo
            </h3>
            <div className="space-y-4">
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-sm font-body text-muted-foreground hover:text-primary transition-colors"
              >
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-primary" />
                {ADDRESS}
              </a>
              <a
                href={`tel:${PHONE_NUMBER}`}
                className="flex items-center gap-3 text-sm font-body text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4 shrink-0 text-primary" />
                {PHONE_DISPLAY}
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="flex items-center gap-3 text-sm font-body text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4 shrink-0 text-primary" />
                {EMAIL}
              </a>
            </div>
          </motion.div>

          {/* Våre ansatte */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-4xl md:text-5xl tracking-wider text-chrome text-center mb-4">
              Våre ansatte
            </h2>
            <div className="section-divider mb-12" />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {staff.map((person, i) => (
              <motion.div
                key={person.email}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card border border-border rounded-lg p-6 text-center hover:border-primary/30 transition-all"
              >
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <span className="font-display text-2xl text-primary">
                    {person.initials}
                  </span>
                </div>
                <h4 className="font-display text-xl tracking-wider text-foreground mb-1">
                  {person.firstName} {person.lastName}
                </h4>
                <p className="text-muted-foreground text-xs font-body mb-4">
                  {person.role}
                </p>
                <div className="space-y-2">
                  <a
                    href={`mailto:${person.email}`}
                    className="flex items-center justify-center gap-2 text-primary text-xs font-body hover:underline"
                  >
                    <Mail className="w-3 h-3" />
                    {person.email}
                  </a>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-xs text-muted-foreground hover:text-primary w-full"
                    onClick={() =>
                      downloadVCard({
                        firstName: person.firstName,
                        lastName: person.lastName,
                        role: person.role,
                        email: person.email,
                        phone: "+4769236040",
                      })
                    }
                  >
                    <Download className="w-3 h-3 mr-1" />
                    Last ned vCard
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
