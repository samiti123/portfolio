import React from "react";
import { useParams } from "react-router-dom";

function View({ state }) {
  // const title  = useParams() == {title: 'Javascript Breakout Game'}
  const { title } = useParams(); // == Javascript Breakout Game
  const index = state.findIndex((project) => project.title === title);
  const project = state[index];

  return (
    <div className="view">
      <h1 className="view-title">{project.title}</h1>

      <img src={project.image} alt={project.title} />

      <div className="view-description">
        <p>{project.description}</p>
      </div>

      <div className="view-buttons">
        <a href={project.url} target="_blank" rel="noopener noreferrer">
          Live Preview
        </a>
        <a href={project.code} target="_blank" rel="noopener noreferrer">
          Project Code
        </a>
      </div>
    </div>
  );
}

export default View;
