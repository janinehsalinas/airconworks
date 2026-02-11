import { motion } from "framer-motion";
import {
  Wind, Truck, Wrench, ClipboardCheck,
  Droplets, Cog, Snowflake,
} from "lucide-react";

const services = [
  { icon: Snowflake, title: "AC Cleaning", desc: "Thorough cleaning of indoor and outdoor units to keep your aircon running efficiently." },
  { icon: Wind, title: "Installation", desc: "Professional installation of window, split, and cassette-type aircon units." },
  { icon: Truck, title: "Relocation & Re-installation", desc: "Safe transfer and reinstallation of your aircon to a new location." },
  { icon: Wrench, title: "Repair", desc: "Expert diagnosis and repair of all aircon brands and models." },
  { icon: ClipboardCheck, title: "AC Maintenance", desc: "Preventive maintenance plans to extend the life of your unit." },
  { icon: Droplets, title: "Refrigerant Recharge", desc: "Freon recharging to restore optimal cooling performance." },
  { icon: Cog, title: "Motor & Bearing Lubrication", desc: "Lubrication services to reduce noise and prevent wear." },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-subtle-gradient">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">What We Offer</p>
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground">Our Services</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group bg-card rounded-xl p-6 shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 border border-border"
            >
              <div className="w-12 h-12 rounded-lg bg-hero-gradient flex items-center justify-center mb-4">
                <s.icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="font-heading font-bold text-foreground mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
