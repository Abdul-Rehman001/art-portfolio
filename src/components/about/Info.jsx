const Info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <i class="bx bx-award about__icon"></i>

        <h3 className="about__title">B.Tech</h3>
        <span className="about__subtitle">In Computer Science</span>
      </div>

      <div className="about__box">
        <i class="bx bx-briefcase-alt-2 about__icon"></i>

        <a href="#portfolio" className="support">
          <h3 className="about__title">Completed</h3>
          <span className="about__subtitle">5+ Projects</span>
        </a>
      </div>

      <div className="about__box">
        <i class="bx bx-support about__icon"></i>
        <a href="#contact" className="support">
          <h3 className="about__title">Support</h3>
          <span className="about__subtitle">Online 24/7</span>
        </a>
      </div>
    </div>
  );
};

export default Info;
