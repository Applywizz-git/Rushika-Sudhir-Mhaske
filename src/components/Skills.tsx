import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Database, Code, Building, GitBranch, Kanban, Shield } from "lucide-react";
import { profile } from "@/data/profile";

const iconMap: Record<string, React.ElementType> = {
  Database,
  Code,
  Building,
  GitBranch,
  Kanban,
  Shield,
};

const ProgressRing = ({ value, label }: { value: number; label: string }) => {
  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (value / 100) * circumference;

  return (
    <motion.div
      className="flex flex-col items-center"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
    >
      <div className="relative w-24 h-24">
        <svg className="w-24 h-24 -rotate-90">
          <circle
            cx="48"
            cy="48"
            r={radius}
            stroke="currentColor"
            strokeWidth="6"
            fill="none"
            className="text-muted"
          />
          <motion.circle
            cx="48"
            cy="48"
            r={radius}
            stroke="currentColor"
            strokeWidth="6"
            fill="none"
            strokeLinecap="round"
            className="text-primary"
            initial={{ strokeDashoffset: circumference }}
            whileInView={{ strokeDashoffset }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            style={{ strokeDasharray: circumference }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-lg font-display font-bold">{value}%</span>
        </div>
      </div>
      <span className="mt-2 text-sm font-medium text-center">{label}</span>
    </motion.div>
  );
};

const Skills = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-20 bg-muted/30 relative">
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
            Expertise
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mt-2">
            Technical <span className="gradient-text">Skills</span>
          </h2>
        </motion.div>

        {/* Progress Rings - Top Skills */}
        <motion.div
          className="flex flex-wrap justify-center gap-8 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {profile.skills.topSkills.map((skill) => (
            <ProgressRing key={skill.name} value={skill.level} label={skill.name} />
          ))}
        </motion.div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {profile.skills.categories.map((category, index) => {
            const Icon = iconMap[category.icon];

            return (
              <motion.div
                key={category.name}
                className="glass p-6 rounded-xl"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    {Icon && <Icon className="w-5 h-5 text-primary" />}
                  </div>
                  <h3 className="font-display font-semibold">{category.name}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      className="px-3 py-1.5 text-xs font-medium bg-background/50 text-foreground rounded-full border border-border/50 hover:bg-primary/10 hover:text-primary hover:border-primary/30 transition-colors cursor-default"
                      whileHover={{ scale: 1.05, rotate: [-1, 1, 0] }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
