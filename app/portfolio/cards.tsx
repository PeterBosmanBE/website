"use client";

import { Card } from "antd";
import React from "react";
import projects from "../data/data";

const { Meta } = Card;

const Cards = () => {
    return (
        <div className="text-white flex flex-wrap justify-center">
            {projects.map((project) => (
                <div key={project.id} className="m-4">
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <Card
                            hoverable
                            style={{ width: 240 }}
                            cover={<img alt={project.title} src={project.image} />}
                        >
                            <Meta title={project.title} description={project.description} /><br />
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
};

export default Cards;