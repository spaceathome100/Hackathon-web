import { motion } from "framer-motion";
import { Trophy, Medal, Award } from "lucide-react";

const prizes = [
  { place: "1st Place", icon: Trophy, amount: "TBA", color: "from-yellow-400 to-amber-500" },
  { place: "2nd Place", icon: Medal, amount: "TBA", color: "from-slate-300 to-slate-400" },
  { place: "3rd Place", icon: Award, amount: "TBA", color: "from-amber-600 to-amber-700" },
];

const PrizesSection = () => {
  return (
    <section id="prizes" className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Prizes & <span className="gradient-text">Rewards</span>
          </h2>
          <p className="text-muted-foreground">Exciting prizes await the top teams</p>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {prizes.map((prize, index) => (
            <motion.div
              key={prize.place}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="glass-card glow-border rounded-xl p-8 text-center hover:border-primary/50 transition-all duration-300"
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br ${prize.color} mb-5`}>
                <prize.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="font-display text-xl font-bold mb-2">{prize.place}</h3>
              <p className="text-muted-foreground text-lg">{prize.amount}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PrizesSection;
