import React, { useState } from "react";
import "./services.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Services = () => {
  const [toggleState, setToggleState] = useState(0);
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

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <motion.section
      className="services section"
      id="services"
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      transition={{ duration: 0.5 }}
    >
      <div className="about__services">
        <h2 className="section__title">Services</h2>
        <span className="section__subtitle">What I offer</span>
      </div>

      <div className="services__container container grid">
        <div className="services__content">
          <div>
            <i className="uil uil-web-grid services__icon"></i>
            <h3 className="services__title">
              Web <br /> Developer
            </h3>
          </div>
          <span className="services__button" onClick={() => toggleTab(1)}>
            View More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>
          <div
            className={
              toggleState === 1
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services_modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services__modal-close"
              ></i>
              <h3 className="services__modal-title">Web Developer</h3>
              <p className="services__modal-description">
                I create responsive, visually appealing web interfaces using
                HTML, CSS, and JavaScript. Skilled in React, I focus on
                delivering user-friendly websites and applications. Let's bring
                your web presence to life with functional designs.
              </p>

              <ul className="service__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle sevices__modal-icon"></i>
                  <p className="services__modal-info">
                    I develop user interface.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle sevices__modal-icon"></i>
                  <p className="services__modal-info">Web Page Development.</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle sevices__modal-icon"></i>
                  <p className="services__modal-info">
                    I develop Front End website.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle sevices__modal-icon"></i>
                  <p className="services__modal-info">
                    I develop responsive websites.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
            <i className="uil uil-arrow services__icon"></i>
            <h3 className="services__title">
              Ui/Ux <br /> Designer
            </h3>
          </div>
          <span className="services__button " onClick={() => toggleTab(2)}>
            View More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>
          <div
            className={
              toggleState === 2
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services_modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services__modal-close"
              ></i>
              <h3 className="services__modal-title">Ui/Ux Designer</h3>
              <p className="services__modal-description">
                I create intuitive and visually appealing UI/UX designs,
                focusing on seamless user experiences. Let's bring your digital
                ideas to life with captivating designs.
              </p>

              <ul className="service__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle sevices__modal-icon"></i>
                  <p className="services__modal-info">
                    I design user interface.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle sevices__modal-icon"></i>
                  <p className="services__modal-info">Web Page design.</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle sevices__modal-icon"></i>
                  <p className="services__modal-info">
                    I design Front End websites.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle sevices__modal-icon"></i>
                  <p className="services__modal-info">
                    I design responsive websites.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
            <i className="uil uil-edit services__icon"></i>
            <h3 className="services__title">
              Product <br /> Designer
            </h3>
          </div>
          <span className="services__button" onClick={() => toggleTab(3)}>
            View More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>
          <div
            className={
              toggleState === 3
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services_modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services__modal-close"
              ></i>
              <h3 className="services__modal-title">Product Designer</h3>
              <p className="services__modal-description">
                I design engaging and intuitive product interfaces that enhance
                user experiences. Proficient in modern design tools, I create
                visually appealing and functional designs. Let's bring your
                product ideas to life with innovative and user-centric
                solutions.
              </p>

              <ul className="service__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle sevices__modal-icon"></i>
                  <p className="services__modal-info">User Interface Design.</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle sevices__modal-icon"></i>
                  <p className="services__modal-info">
                    Prototyping and Wireframing.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle sevices__modal-icon"></i>
                  <p className="services__modal-info">
                    User Experience Optimization.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Services;
