import React from "react";

const WorkItem = ({ item }) => {
  return (
    <div className="work__card" key={item.id}>
      <img src={item.image} alt={item.title} className="work__img" />
      <h3 className="work__title">{item.title}</h3>
      <p className="work_desc">{item.description}</p>
      <a
        href={item.githubLink}
        className="work__button"
        target="_blank"
        rel="noopener noreferrer"
      >
        Github <i className="uil uil-github-alt work__button-icon"></i>
      </a>
      <a
        href={item.demoLink}
        className="work__button"
        target="_blank"
        rel="noopener noreferrer"
      >
        Demo <i className="bx bx-right-arrow-alt work__button-icon"></i>
      </a>
    </div>
  );
};

export default WorkItem;
