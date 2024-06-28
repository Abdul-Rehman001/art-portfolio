import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./qualification.css";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };

  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 });

  useEffect(() => {
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
      className="qualification section"
      id="qual"
    >
      <div className="qualify">
        <h2 className="section__title">Qualification</h2>
        <span className="section__subtitle">My Personal journey</span>
      </div>
      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Projects
          </div>
        </div>
        <div className="qualification__sections">
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Computer Science</h3>
                <span className="qualification__subtitle">BBDU-Lucknow</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2020 - Present
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">12th-Standard</h3>
                <span className="qualification__subtitle">Exon - Lucknow</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2020
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">10th-Standard</h3>
                <span className="qualification__subtitle">
                  St.Teresa's-Lucknow
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2018
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">The Wild Oasis</h3>
                <span className="qualification__subtitle">
                  Hotel Management
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2024
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Portfolio</h3>
                <span className="qualification__subtitle">
                  Portfolio Website
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2024
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">React-Pizza</h3>
                <span className="qualification__subtitle">Food App</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>2024
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Prompter</h3>
                <span className="qualification__subtitle">
                  AI Prompt creating and sharing platform
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2024
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Qualification;
