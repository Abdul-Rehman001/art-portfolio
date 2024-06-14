import React from "react";
import "./work.css";
import Works from "./Works";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
const Work = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1 });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const variants = {
    hidden: { opacity: 0, y: 100, scale: 0.8 },
    visible: { opacity: 1, y: 0, scale: 1 },
  };
  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      transition={{ duration: 0.4 }}
      className="work section"
      id="portfolio"
    >
      <div className="porto">
        <h2 className="section__title">Portfolio</h2>
        <span className="section__subtitle">Most recent work</span>
      </div>
      <Works />
    </motion.section>
  );
};

export default Work;
