import { motion } from "framer-motion";
import { Target, Users, Globe } from "lucide-react";

const features = [
  {
    icon: Target,
    title: "SDG-Focused Innovation",
    description: "Build real-world solutions addressing United Nations Sustainable Development Goals.",
  },
  {
    icon: Users,
    title: "In Collaboration with Genesys",
    description: "Partnering with Genesys to  communities through technology.",
  },
  {
    icon: Globe,
    title: "National-Level Impact",
    description: "A 24-hour hackathon bringing together the brightest minds from across the country.",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            About the <span className="gradient-text">Hackathon</span>
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-base md:text-lg leading-relaxed">
            TechHacks 2.0 Innovation Hackathon 2026 is a national-level 24-hour hackathon focused on
            building innovative solutions for real-world challenges aligned with the UN Sustainable
            Development Goals. In Collaboration with Genesys, participants will tackle
            problems in health, education, sustainability, and community development.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="glass-card glow-border rounded-xl p-8 text-center hover:border-primary/50 transition-colors duration-300"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-lg gradient-primary mb-5">
                <feature.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-display text-lg font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
