import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Briefcase, MapPin, Calendar } from "lucide-react";
import { profile } from "@/data/profile";

const Experience = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-20 bg-muted/30 relative">
      {/* Background decoration */}
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
            Career Journey
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mt-2">
            Professional <span className="gradient-text">Experience</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

          {profile.experience.map((job, index) => {
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={`${job.company}-${index}`}
                className={`relative mb-12 md:mb-16 ${
                  isLeft ? "md:pr-[50%]" : "md:pl-[50%]"
                }`}
                initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {/* Timeline dot */}
                <motion.div
                  className={`absolute top-0 left-0 md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full border-4 border-background ${
                    job.current ? "bg-primary animate-pulse-glow" : "bg-muted-foreground"
                  }`}
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ delay: 0.2 + index * 0.1 }}
                />

                {/* Card */}
                <motion.div
                  className={`ml-8 md:ml-0 ${isLeft ? "md:mr-8" : "md:ml-8"}`}
                  whileHover={{ y: -5 }}
                >
                  <div className="glass p-6 rounded-xl hover:glow-sm transition-all">
                    {/* Header */}
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-4">
                      <div>
                        <h3 className="text-lg font-display font-bold text-foreground">
                          {job.title}
                        </h3>
                        <div className="flex items-center gap-2 text-primary font-medium">
                          <Briefcase className="w-4 h-4" />
                          {job.company}
                        </div>
                      </div>
                      {job.current && (
                        <span className="px-3 py-1 text-xs font-semibold bg-primary/10 text-primary rounded-full">
                          Current
                        </span>
                      )}
                    </div>

                    {/* Meta */}
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {job.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {job.startDate} - {job.endDate}
                      </span>
                    </div>

                    {/* Bullets */}
                    <ul className="space-y-2 mb-4">
                      {job.bullets.slice(0, 3).map((bullet, bIndex) => (
                        <li
                          key={bIndex}
                          className="text-sm text-muted-foreground flex gap-2"
                        >
                          <span className="text-primary mt-1.5 flex-shrink-0">•</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                      {job.bullets.length > 3 && (
                        <li className="text-sm text-primary cursor-pointer hover:underline">
                          +{job.bullets.length - 3} more achievements...
                        </li>
                      )}
                    </ul>

                    {/* Tools */}
                    <div className="flex flex-wrap gap-2">
                      {job.tools.map((tool) => (
                        <motion.span
                          key={tool}
                          className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
                          whileHover={{ scale: 1.1 }}
                        >
                          {tool}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
