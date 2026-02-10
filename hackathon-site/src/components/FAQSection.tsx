import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Who can participate?",
    a: "The hackathon is open to all students, developers, and innovators across India. Teams of 2-4 members are encouraged.",
  },
  {
    q: "Is there a registration fee?",
    a: "Details regarding registration fees will be announced on the official registration page. Stay tuned!",
  },
  {
    q: "What should I bring?",
    a: "Bring your laptop, charger, and any hardware you might need. Food and refreshments will be provided during the event.",
  },
  {
    q: "Can I participate solo?",
    a: "While team participation is encouraged, solo participants are welcome. You can also find teammates at the event.",
  },
  {
    q: "What technologies can we use?",
    a: "You are free to use any programming language, framework, or tool. The focus is on building impactful solutions.",
  },
  {
    q: "Will there be mentors?",
    a: "Yes! Industry experts and mentors from Sristi Foundation will be available throughout the hackathon to guide teams.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="section-padding">
      <div className="container mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass-card rounded-xl px-6"
        >
          <Accordion type="single" collapsible>
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`faq-${index}`} className="border-border/30">
                <AccordionTrigger className="font-display text-sm md:text-base font-medium hover:text-primary py-5">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
