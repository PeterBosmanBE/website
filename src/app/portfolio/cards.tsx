"use client";

import { Card } from "../../components/ui/cards";
import projects from "../../data/data";

export default function Cards() {
  return (
    <div className="text-white flex flex-wrap justify-center">
      {projects.map((project) => (
        <div key={project.id} className="m-4">
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            <Card style={{ width: 240 }}>
              <img src={project.image} alt={project.title} />
              <div>
                <div>{project.title}</div> <div>{project.description}</div>
              </div>
              <div>
                <div>Date of project:</div>
                <div>{project.dateOfProject}</div>
              </div>
            </Card>
          </a>
        </div>
      ))}
    </div>
  );
}
