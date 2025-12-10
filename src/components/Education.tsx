import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { GraduationCap, MapPin, Calendar } from "lucide-react";
import { profile } from "@/data/profile";

const Education = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="py-20 bg-muted/30 relative">
      <div className="absolute inset-0 bg-hero-pattern opacity-30" />

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Academic Background
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mt-2">
            <span className="gradient-text">Education</span>
          </h2>
        </motion.div>

        {/* Education Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {profile.education.map((edu, index) => (
            <motion.div
              key={edu.school}
              className="glass p-8 rounded-2xl group"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -5 }}
            >
              {/* Icon with shimmer */}
              <motion.div
                className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 relative overflow-hidden"
                whileHover={{ rotate: [0, -5, 5, 0] }}
              >
                <GraduationCap className="w-8 h-8 text-primary relative z-10" />
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
              </motion.div>

              {/* Degree */}
              <h3 className="text-xl font-display font-bold mb-2">
                {edu.degree}
              </h3>

              {/* School */}
              <p className="text-primary font-semibold mb-3">{edu.school}</p>

              {/* Meta */}
              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                <span className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  {edu.location}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {edu.startDate} - {edu.endDate}
                </span>
              </div>

              {/* Focus */}
              {edu.focus && (
                <p className="text-sm text-muted-foreground">
                  <span className="text-foreground font-medium">Focus:</span>{" "}
                  {edu.focus}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
