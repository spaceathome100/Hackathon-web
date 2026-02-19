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
    a: "The hackathon is open to all students, developers, and innovators across India. Teams of 2-4 members are compulsory.",
  },
  {
    q: "Is there a registration fee?",
    a: "Round 1 (Proposal Submission) is free for all teams. However, teams shortlisted for the Grand Finale at Genesys will be required to pay a participation fee to confirm their slot. This fee covers access to the campus, mentorship, and resources.",
  },
  {
    q: "What is the 'On-the-Spot' challenge?",
    a: "While Round 1 allows you to choose an SDG problem statement in advance, Round 2 (Grand Finale) will provide a specific, secret challenge 'on the spot' at the Genesys campus to test your real-time problem-solving skills.",
  },
  {
    q: "What should I bring to the Grand Finale?",
    a: "Shortlisted teams should bring their laptops, chargers, and any hardware prototypes. Food, refreshments, and a high-energy hacking environment will be provided by the organizers.",
  },
  {
    q: "How does the evaluation work?",
    a: "Round 1 is judged on ideation and feasibility. The Grand Finale is judged by an industry jury on technical implementation, design thinking, and the 'readiness' of your solution.",
  },
  {
    q: "Will there be mentors?",
    a: "Yes! Industry experts from Genesys and Sristi Foundation will be available during the Grand Finale to provide technical and strategic mentorship.",
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
