import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface Problem {
  title: string;
  background: string;
  challenges: string[];
  solution: string;
  impact: string;
}

interface SDGCategory {
  sdg: string;
  color: string;
  title: string;
  problems: Problem[];
}

const sdgCategories: SDGCategory[] = [
  {
    sdg: "SDG-3",
    color: "hsl(142 60% 50%)",
    title: "Good Health & Well-Being",
    problems: [
      {
        title: "HR Management App for Sristi Foundation",
        background: "Sristi Foundation manages a large workforce across multiple projects and needs a centralized HR system.",
        challenges: ["Manual tracking of attendance", "Scattered employee data", "Difficulty in payroll management"],
        solution: "A comprehensive HR management application with attendance, payroll, and employee lifecycle tracking.",
        impact: "Streamlined operations, reduced administrative overhead, and improved employee satisfaction.",
      },
      {
        title: "Smart Beneficiary Health Record & Medication Tracking System",
        background: "Healthcare records for rural beneficiaries are often paper-based and fragmented.",
        challenges: ["Lost medical records", "Missed medication schedules", "Lack of health data analytics"],
        solution: "A digital health record system with medication reminders and analytics dashboards.",
        impact: "Improved health outcomes through better tracking and timely medication adherence.",
      },
    ],
  },
  {
    sdg: "SDG-4",
    color: "hsl(0 72% 55%)",
    title: "Quality Education",
    problems: [
      {
        title: "Farm Management Tool",
        background: "Small-scale farmers lack digital tools for managing their agricultural operations efficiently.",
        challenges: ["No crop planning tools", "Weather dependency", "Market price fluctuations"],
        solution: "An integrated farm management tool with crop planning, weather alerts, and market linkages.",
        impact: "Increased agricultural productivity and farmer income through informed decision-making.",
      },
      {
        title: "Alumni Beneficiary-to-Benefactor Prediction Model",
        background: "Sristi Foundation wants to identify alumni who can transition from beneficiaries to benefactors.",
        challenges: ["Lack of predictive analytics", "No engagement tracking", "Difficulty identifying potential donors"],
        solution: "An ML-powered prediction model that scores alumni likelihood to become benefactors.",
        impact: "Sustainable funding cycle and stronger alumni engagement with the foundation's mission.",
      },
      {
        title: "Interactive Skill-Building & Vocational Guidance Assistant",
        background: "Rural youth need accessible career guidance and skill development resources.",
        challenges: ["Limited access to mentors", "Lack of personalized guidance", "Language barriers"],
        solution: "An AI-powered chatbot offering personalized vocational guidance and skill-building paths.",
        impact: "Empowered youth with clear career paths and relevant skill development opportunities.",
      },
    ],
  },
  {
    sdg: "SDG-11",
    color: "hsl(35 90% 55%)",
    title: "Sustainable Cities & Communities",
    problems: [
      {
        title: "Weekly Veggie Bag Order & Delivery Management System",
        background: "Community-supported agriculture programs need efficient order and delivery management.",
        challenges: ["Manual order processing", "Delivery route optimization", "Inventory forecasting"],
        solution: "A platform for managing weekly vegetable bag subscriptions with optimized delivery routing.",
        impact: "Reduced food waste, efficient distribution, and stronger farm-to-table connections.",
      },
      {
        title: "Community Volunteer & Resource Coordination Platform",
        background: "Community organizations struggle to coordinate volunteers and resources effectively.",
        challenges: ["Volunteer scheduling conflicts", "Resource duplication", "Communication gaps"],
        solution: "A centralized platform for volunteer management, resource tracking, and event coordination.",
        impact: "Enhanced community engagement and more efficient resource utilization.",
      },
    ],
  },
  {
    sdg: "SDG-12",
    color: "hsl(45 85% 50%)",
    title: "Responsible Consumption & Production",
    problems: [
      {
        title: "Stock Management Inventory App",
        background: "Small organizations often lack proper inventory management leading to waste and shortages.",
        challenges: ["Manual stock counting", "No reorder alerts", "Lack of usage analytics"],
        solution: "A smart inventory app with barcode scanning, auto-reorder alerts, and usage analytics.",
        impact: "Reduced waste, cost savings, and better resource planning.",
      },
      {
        title: "Food Waste Prediction & Redistribution System",
        background: "Significant food waste occurs across communities while many go hungry.",
        challenges: ["Unpredictable surplus generation", "Logistics of redistribution", "Perishability constraints"],
        solution: "An AI-driven system predicting food surplus and connecting donors with redistribution networks.",
        impact: "Reduced food waste and improved food security for underserved communities.",
      },
      {
        title: "Village Panchayat Produce Collection & Distribution System",
        background: "Rural panchayats need organized systems for agricultural produce collection and distribution.",
        challenges: ["Fragmented supply chains", "Price exploitation by middlemen", "Post-harvest losses"],
        solution: "A digital platform connecting farmers directly with buyers through panchayat-level aggregation.",
        impact: "Fair prices for farmers and reduced post-harvest losses through organized distribution.",
      },
    ],
  },
];

const ProblemStatementsSection = () => {
  return (
    <section id="problems" className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            SDG <span className="gradient-text">Problem Statements</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Choose from real-world challenges aligned with UN Sustainable Development Goals.
          </p>
        </motion.div>

        <div className="space-y-6 max-w-4xl mx-auto">
          {sdgCategories.map((category, catIndex) => (
            <motion.div
              key={category.sdg}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              className="glass-card rounded-xl overflow-hidden"
            >
              <div className="p-6 border-b border-border/50 flex items-center gap-3">
                <span
                  className="inline-block px-3 py-1 rounded-md text-xs font-bold tracking-wider"
                  style={{ backgroundColor: category.color, color: "hsl(222 47% 6%)" }}
                >
                  {category.sdg}
                </span>
                <h3 className="font-display text-lg font-semibold">{category.title}</h3>
              </div>

              <Accordion type="multiple" className="px-6">
                {category.problems.map((problem, pIndex) => (
                  <AccordionItem key={pIndex} value={`${category.sdg}-${pIndex}`} className="border-border/30">
                    <AccordionTrigger className="font-display text-sm md:text-base font-medium hover:text-primary py-4">
                      {problem.title}
                    </AccordionTrigger>
                    <AccordionContent className="pb-6">
                      <div className="space-y-4 text-sm text-muted-foreground">
                        <div>
                          <h4 className="text-foreground font-semibold mb-1">Background</h4>
                          <p>{problem.background}</p>
                        </div>
                        <div>
                          <h4 className="text-foreground font-semibold mb-1">Key Challenges</h4>
                          <ul className="list-disc list-inside space-y-1">
                            {problem.challenges.map((c, i) => (
                              <li key={i}>{c}</li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-foreground font-semibold mb-1">Expected Solution</h4>
                          <p>{problem.solution}</p>
                        </div>
                        <div>
                          <h4 className="text-foreground font-semibold mb-1">Expected Impact</h4>
                          <p>{problem.impact}</p>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemStatementsSection;
