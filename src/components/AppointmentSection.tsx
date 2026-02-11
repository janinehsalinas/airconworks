import { useState } from "react";
import { motion } from "framer-motion";
import { CalendarDays, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";

const serviceOptions = [
  "AC Cleaning",
  "Installation",
  "Relocation & Re-installation",
  "Repair",
  "AC Maintenance",
  "Refrigerant Recharge",
  "Motor & Bearing Lubrication",
];

const AppointmentSection = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    toast.success("Appointment request sent! We'll contact you shortly.");
  };

  return (
    <section id="appointment" className="py-20 bg-subtle-gradient">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">Schedule a Visit</p>
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground">
            Book an Appointment
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto bg-card rounded-2xl p-8 shadow-elevated border border-border"
        >
          {submitted ? (
            <div className="text-center py-10">
              <CalendarDays className="h-16 w-16 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-bold font-heading text-foreground mb-2">Request Received!</h3>
              <p className="text-muted-foreground">We will reach out to confirm your appointment schedule. Salamat po!</p>
              <Button className="mt-6 bg-hero-gradient text-primary-foreground" onClick={() => setSubmitted(false)}>
                Book Another
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-1 block">Full Name</label>
                  <Input placeholder="Juan Dela Cruz" required />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1 block">Phone Number</label>
                  <Input placeholder="09XX XXX XXXX" required />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-1 block">Service Needed</label>
                  <Select required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      {serviceOptions.map((s) => (
                        <SelectItem key={s} value={s}>{s}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1 block">Preferred Date</label>
                  <Input type="date" required />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-1 block">Address / Landmark</label>
                <Input placeholder="Your complete address" required />
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-1 block">Additional Notes</label>
                <Textarea placeholder="Describe the issue or any special instructions..." rows={3} />
              </div>

              <Button type="submit" size="lg" className="w-full bg-hero-gradient text-primary-foreground gap-2 text-base">
                <Send className="h-5 w-5" /> Submit Appointment
              </Button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default AppointmentSection;
