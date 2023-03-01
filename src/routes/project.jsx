import React from "react";
import { useParams } from "react-router-dom";
import data from "../data";

function Project() {
  const project = useParams();

  const thisProject = data.find((item) => item.title === project);

  const { name, description, build, features, dependencies, learnings } =
    thisProject;
  return (
    <div>
      <h1>{name}</h1>
      <h3>Description</h3>
      <p>{description}</p>
      <h3>Build</h3>
      <p>{build}</p>
      <h3>Features</h3>
      <ul>
        {features.map((feature) => (
          <li>{feature}</li>
        ))}
      </ul>
      <h4>Dependencies</h4>
      <ul>
        {dependencies.map((dependency) => (
          <li>{dependency}</li>
        ))}
      </ul>
      <h3>My learning</h3>
      <ul>
        {learnings.map((learning) => (
          <li>{learning}</li>
        ))}
      </ul>
    </div>
  );
}

export default Project;
