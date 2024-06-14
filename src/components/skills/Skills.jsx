import React from "react";
import "./skills.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Frontend from "./Frontend";
import Backend from "./Backend";

const Skills = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const variants = {
    hidden: { opacity: 0, y: 50, scale: 0.8 },
    visible: { opacity: 1, y: 0, scale: 1 },
  };

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      transition={{ duration: 0.5 }}
      className="skills section"
      id="skills"
    >
      <div className="about_skill">
        <h2 className="section__title">Skills</h2>
        <span className="section__subtitle">My Technical Level</span>
      </div>
      <div className="skills__container container grid">
        <Frontend />
        <Backend />
      </div>
    </motion.section>
  );
};

export default Skills;
