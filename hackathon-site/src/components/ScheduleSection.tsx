import { motion } from "framer-motion";
import { Clock, Flag, Award, Coffee } from "lucide-react";

const days = [
  {
    day: "Day 1 — March 14",
    events: [
      { time: "09:30 AM – 11:00 AM", title: "Inauguration Ceremony & Participant Seating", icon: Coffee },
      { time: "11:00 AM", title: "Hackathon Official Start", icon: Flag },
      { time: "11:00 AM onwards", title: "24-Hour Development Sprint", icon: Clock },
    ],
  },
  {
    day: "Day 2 — March 15",
    events: [
      { time: "11:00 AM", title: "Final Submission Deadline", icon: Flag },
      { time: "11:00 AM – 01:00 PM", title: "Jury Evaluation", icon: Clock },
      { time: "01:00 PM", title: "Result Announcement & Closing Ceremony", icon: Award },
    ],
  },
];

const ScheduleSection = () => {
  return (
    <section id="schedule" className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Event <span className="gradient-text">Schedule</span>
          </h2>
          <p className="text-muted-foreground">24-hour national-level hackathon timeline</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {days.map((day, dayIndex) => (
            <motion.div
              key={day.day}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: dayIndex * 0.2 }}
              className="glass-card glow-border rounded-xl p-6"
            >
              <h3 className="font-display text-xl font-bold gradient-text mb-6">{day.day}</h3>
              <div className="space-y-5">
                {day.events.map((event, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg gradient-primary flex items-center justify-center mt-0.5">
                      <event.icon className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="text-xs text-primary font-medium mb-1">{event.time}</p>
                      <p className="text-sm font-medium">{event.title}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;
