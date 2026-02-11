import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const highlights = [
  "Licensed and experienced technicians",
  "Serving residential & commercial clients",
  "All major aircon brands supported",
  "Affordable rates, no hidden fees",
  "Fast response time across Camarines Sur",
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">About Us</p>
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground mb-6">
              Your Trusted Aircon Partner in Bicol
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Aircon Works is a locally-owned refrigeration and airconditioning service provider based in Canaman, Camarines Sur. We are committed to delivering quality, reliable, and affordable HVAC solutions to homes and businesses across the Bicol region.
            </p>
            <ul className="space-y-3">
              {highlights.map((h) => (
                <li key={h} className="flex items-center gap-3 text-foreground">
                  <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0" />
                  <span className="text-sm">{h}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-ice rounded-2xl p-8 border border-border"
          >
            <div className="grid grid-cols-2 gap-6 text-center">
              {[
                { val: "500+", label: "Happy Clients" },
                { val: "7+", label: "Services Offered" },
                { val: "5+", label: "Years Experience" },
                { val: "24/7", label: "Support Available" },
              ].map((s) => (
                <div key={s.label}>
                  <p className="text-3xl font-extrabold font-heading text-gradient">{s.val}</p>
                  <p className="text-muted-foreground text-sm mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
