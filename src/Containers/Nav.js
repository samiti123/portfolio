import React from "react";
import { Link } from "react-router-dom";

function Nav({ state }) {
  return (
    <div className="nav">
      <img src="./test.jpeg" alt="profile" />

      <h3>Projects</h3>
      <ul>
        {state.map((project) => {
          return (
            <li>
              <Link to={`/${project.title}`}>{project.title}</Link>
            </li>
          );
        })}
      </ul>

      <h3>Navigation</h3>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
