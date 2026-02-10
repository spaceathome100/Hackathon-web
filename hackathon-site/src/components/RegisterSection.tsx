import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const RegisterSection = () => {
  return (
    <section id="register" className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card glow-border rounded-2xl p-10 md:p-16 text-center max-w-3xl mx-auto"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Ready to <span className="gradient-text">Innovate?</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg mb-8 max-w-xl mx-auto">
            Participants must register through the official Google Form. Secure your spot now and be
            part of the change!
          </p>
          <a href="https://forms.google.com" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="gradient-primary text-primary-foreground font-display font-semibold px-8 py-6 text-base animate-pulse-glow rounded-lg gap-2">
              Register Now
              <ExternalLink className="w-4 h-4" />
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default RegisterSection;
