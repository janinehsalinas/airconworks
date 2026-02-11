import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Facebook } from "lucide-react";

const contacts = [
  { icon: MapPin, label: "Location", value: "Zone 6 Baras, Canaman, Camarines Sur" },
  { icon: Phone, label: "Phone", value: "+639 2849 19177", href: "tel:+639284919177" },
  { icon: Clock, label: "Hours", value: "Mon – Sat, 8:00 AM – 6:00 PM" },
  { icon: Facebook, label: "Facebook", value: "Aircon Works", href: "#" },
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">Get In Touch</p>
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground">Contact Us</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {contacts.map((c, i) => (
            <motion.div
              key={c.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center bg-card rounded-xl p-6 shadow-card border border-border"
            >
              <div className="w-12 h-12 rounded-full bg-hero-gradient flex items-center justify-center mx-auto mb-4">
                <c.icon className="h-5 w-5 text-primary-foreground" />
              </div>
              <p className="font-heading font-bold text-foreground text-sm mb-1">{c.label}</p>
              {c.href ? (
                <a href={c.href} className="text-muted-foreground text-sm hover:text-primary transition-colors">
                  {c.value}
                </a>
              ) : (
                <p className="text-muted-foreground text-sm">{c.value}</p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
