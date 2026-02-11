import { motion } from "framer-motion";
import { ArrowRight, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="Modern air conditioning" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-navy/70" />
      </div>

      <div className="container mx-auto px-4 relative z-10 py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl"
        >
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-4">
            Refrigeration & Airconditioning Services
          </p>
          <h1 className="text-4xl md:text-6xl font-extrabold font-heading text-navy-foreground leading-tight mb-4">
            AIRCON WORKS
          </h1>
          <p className="text-2xl md:text-3xl italic font-heading text-accent mb-6">
            Cool Air, Cool Life
          </p>
          <p className="text-navy-foreground/80 text-lg mb-8 max-w-lg">
            Professional aircon cleaning, installation, repair, and maintenance services in Camarines Sur. Trusted by Filipino homes and businesses.
          </p>

          <div className="flex flex-wrap gap-4 mb-10">
            <a href="#appointment">
              <Button size="lg" className="bg-hero-gradient text-primary-foreground gap-2 text-base shadow-elevated">
                Book Appointment <ArrowRight className="h-5 w-5" />
              </Button>
            </a>
            <a href="#services">
              <Button size="lg" variant="outline" className="border-navy-foreground/30 text-navy-foreground hover:bg-navy-foreground/10 text-base">
                Our Services
              </Button>
            </a>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 text-navy-foreground/80 text-sm">
            <span className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-accent" />
              Zone 6 Baras, Canaman, Camarines Sur
            </span>
            <span className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-accent" />
              +639 2849 19177
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
