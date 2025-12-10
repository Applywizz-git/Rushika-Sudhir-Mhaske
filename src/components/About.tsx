import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { BarChart3, Eye, Users, TrendingUp } from "lucide-react";
import { profile } from "@/data/profile";

const iconMap: Record<string, React.ElementType> = {
  BarChart3,
  Eye,
  Users,
  TrendingUp,
};

const AnimatedCounter = ({ value, suffix = "" }: { value: number | string; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const numValue = typeof value === "string" ? parseInt(value) : value;

  useEffect(() => {
    if (isInView && !isNaN(numValue)) {
      const duration = 2000;
      const steps = 60;
      const increment = numValue / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= numValue) {
          setCount(numValue);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isInView, numValue]);

  return (
    <span ref={ref}>
      {typeof value === "string" && value.includes("+") ? count + "+" : count}
      {suffix}
    </span>
  );
};

const About = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4" ref={ref}>
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            About Me
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mt-2">
            Transforming Data Into{" "}
            <span className="gradient-text">Actionable Insights</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {profile.summary.paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className="text-muted-foreground mb-4 leading-relaxed"
              >
                {paragraph}
              </p>
            ))}

            {/* Skill Bars */}
            <div className="mt-8 space-y-4">
              <h3 className="text-lg font-display font-semibold mb-4">
                Core Competencies
              </h3>
              {profile.skills.topSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1 }}
                >
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">{skill.name}</span>
                    <span className="text-sm text-muted-foreground">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : {}}
                      transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Stats & Highlights */}
          <div className="space-y-8">
            {/* Metrics */}
            <motion.div
              className="grid grid-cols-2 gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {profile.metrics.map((metric, index) => (
                <motion.div
                  key={metric.label}
                  className="glass p-6 rounded-xl text-center hover:glow-sm transition-shadow"
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  <div className="text-3xl md:text-4xl font-display font-bold text-primary mb-1">
                    <AnimatedCounter
                      value={metric.value}
                      suffix={metric.suffix}
                    />
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {metric.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Highlights Grid */}
            <motion.div
              className="grid grid-cols-2 gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {profile.highlights.map((highlight, index) => {
                const Icon = iconMap[highlight.icon];
                return (
                  <motion.div
                    key={highlight.title}
                    className="glass p-4 rounded-xl group"
                    whileHover={{ scale: 1.02 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                      {Icon && (
                        <Icon className="w-5 h-5 text-primary" />
                      )}
                    </div>
                    <h4 className="font-semibold text-sm mb-1">
                      {highlight.title}
                    </h4>
                    <p className="text-xs text-muted-foreground">
                      {highlight.description}
                    </p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
