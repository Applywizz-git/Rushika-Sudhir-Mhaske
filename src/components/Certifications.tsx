import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import { profile } from "@/data/profile";

const CertificationCard = ({
  cert,
  index,
}: {
  cert: typeof profile.certifications[0];
  index: number;
}) => {
  return (
    <motion.div
      className="group relative"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
    >
      <motion.div
        className="glass p-6 rounded-xl h-full cursor-pointer overflow-hidden"
        whileHover={{ y: -5, scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        {/* Shimmer effect on hover */}
        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-primary/10 to-transparent" />

        <div className="relative z-10">
          {/* Icon */}
          <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
            <Award className="w-6 h-6 text-primary" />
          </div>

          {/* Content */}
          <h3 className="font-display font-semibold text-foreground mb-2 line-clamp-2">
            {cert.name}
          </h3>

          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
            <span className="font-medium text-primary">{cert.provider}</span>
            <span>•</span>
            <span>{cert.platform}</span>
          </div>

          {/* Verify Link */}
          <motion.a
            href="#"
            className="inline-flex items-center gap-1 text-sm text-primary hover:underline"
            whileHover={{ x: 5 }}
          >
            Verify <ExternalLink className="w-3 h-3" />
          </motion.a>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Certifications = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="certifications" className="py-20 relative">
      <div className="container mx-auto px-4" ref={ref}>
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Credentials
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mt-2">
            Professional <span className="gradient-text">Certifications</span>
          </h2>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {profile.certifications.map((cert, index) => (
            <CertificationCard key={cert.name} cert={cert} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
