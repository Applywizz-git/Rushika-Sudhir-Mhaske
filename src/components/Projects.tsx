import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Keyboard, A11y } from "swiper/modules";
import { ExternalLink, Code, ChevronDown, ChevronUp } from "lucide-react";
import { profile } from "@/data/profile";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const ProjectCard = ({ project, index }: { project: typeof profile.projects[0]; index: number }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      className="glass rounded-2xl overflow-hidden h-full"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
    >
      {/* Project Image/Header */}
      <div className="relative h-48 bg-gray-900 overflow-hidden group">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-90 group-hover:opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-display font-bold mb-2">{project.title}</h3>
        <p className="text-muted-foreground text-sm mb-4">
          {project.shortDescription}
        </p>

        {/* Expandable Details */}
        <div className="mb-4">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-2 text-primary text-sm font-medium hover:underline"
            aria-expanded={isExpanded}
          >
            {isExpanded ? (
              <>
                Hide details <ChevronUp className="w-4 h-4" />
              </>
            ) : (
              <>
                View details <ChevronDown className="w-4 h-4" />
              </>
            )}
          </button>

          <AnimatePresence>
            {isExpanded && (
              <motion.ul
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="mt-3 space-y-2 overflow-hidden"
              >
                {project.bullets.map((bullet, bIndex) => (
                  <li
                    key={bIndex}
                    className="text-sm text-muted-foreground flex gap-2"
                  >
                    <span className="text-primary flex-shrink-0">•</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tools.map((tool) => (
            <motion.span
              key={tool}
              className="px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded"
              whileHover={{ scale: 1.05 }}
            >
              {tool}
            </motion.span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex gap-3">
          <motion.a
            href={project.previewLink}
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium text-sm"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <ExternalLink className="w-4 h-4" />
            Preview
          </motion.a>
          <motion.a
            href={project.codeLink}
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2 border border-primary text-primary rounded-lg font-medium text-sm hover:bg-primary/10"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Code className="w-4 h-4" />
            View Code
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Parallax Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <motion.div
          className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl"
          animate={{ rotate: 360 }}
          transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mt-2">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Data-driven solutions that have delivered measurable business impact
          </p>
        </motion.div>

        {/* Swiper Carousel */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Swiper
            modules={[Navigation, Pagination, Keyboard, A11y]}
            spaceBetween={24}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            keyboard={{ enabled: true }}
            breakpoints={{
              640: { slidesPerView: 1.2 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="!pb-16"
          >
            {profile.projects.map((project, index) => (
              <SwiperSlide key={project.title}>
                <ProjectCard project={project} index={index} />
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
