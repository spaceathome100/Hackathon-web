import { motion } from "framer-motion";
import { Calendar, MapPin, FileText, Zap, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const rounds = [
  {
    title: "Round 1: SDG Solution Proposal",
    date: "Feb 19 - Mar 09, 2026",
    status: "Live",
    icon: FileText,
    description: "Select an SDG-aligned problem statement and submit a structured solution proposal in PPT format.",
    details: [
      "Focus on Ideation, Research, and Technical Feasibility.",
      "Submit via the official registration portal.",
      "Only shortlisted teams advance to the Grand Finale."
    ],
    color: "border-emerald-500",
    bgColor: "bg-emerald-500/10"
  },
  {
    title: "Round 2: Grand Finale @ Genesys",
    date: "Mar 14 - Mar 15, 2026",
    status: "Upcoming",
    icon: Zap,
    description: "A high-stakes, 24-hour on-site hacking sprint at the Genesys campus.",
    details: [
      "The Challenge: Problem statements are assigned 'on the spot'.",
      "The Pitch: Present functional prototypes to an industry jury.",
      "Requirement: Selected teams must pay a participation fee to confirm their slot."
    ],
    color: "border-primary",
    bgColor: "bg-primary/10"
  }
];

const TimelineSection = () => {
  return (
    <section id="timeline" className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Stages & <span className="gradient-text">Timeline</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From initial strategy to the final code sprint—here is your road to victory at TechHacks 2.0.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {rounds.map((round, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={`glass-card p-8 rounded-2xl border-l-4 ${round.color} relative overflow-hidden`}
            >
              <div className="flex justify-between items-start mb-6">
                <div className={`p-3 rounded-lg ${round.bgColor}`}>
                  <round.icon className="w-6 h-6 text-foreground" />
                </div>
                {round.status === "Live" && (
                  <span className="bg-emerald-500 text-white text-[10px] px-2 py-1 rounded-full animate-pulse font-bold tracking-widest uppercase">
                    Live
                  </span>
                )}
              </div>
              
              <h3 className="text-2xl font-bold mb-2">{round.title}</h3>
              <div className="flex items-center gap-2 text-muted-foreground mb-4 text-sm font-medium">
                <Calendar className="w-4 h-4" />
                {round.date}
              </div>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {round.description}
              </p>

              <ul className="space-y-3 mb-8">
                {round.details.map((detail, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                    {detail}
                  </li>
                ))}
              </ul>

              {index === 0 && (
                <div className="flex flex-wrap gap-4 mt-auto">
                  <a href="https://docs.google.com/presentation/d/1n7fF6ctaWIE7_0qmrhP4oOAVZONN-mov/edit?" target="_blank" rel="noreferrer">
                    <Button variant="outline" size="sm" className="gap-2">
                      <FileText className="w-4 h-4" /> PPT Template
                    </Button>
                  </a>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Call to Action Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 glass-card p-6 rounded-xl max-w-4xl mx-auto border border-primary/20 bg-primary/5 text-center"
        >
          <p className="text-sm md:text-base font-medium">
            Ready to make an impact? Registration through the website is <strong>compulsory</strong>.
          </p>
          <a href="#register" className="inline-flex items-center gap-2 text-primary hover:underline mt-2 font-bold">
            Apply Now <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default TimelineSection;