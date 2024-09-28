import { Header } from '../components/header';
import React from "react";

export default function Portfolio() {
    return (
        <main className="flex items-center justify-center">
            <Header />
            <div className="text-white text-center">
                <div>
                    <h1 className={"mb-5"}>I am Peter Bosman, a 21 year old programmer from Belgium</h1>
                    <p>I have a passion for Virtual Reality, Music, Programming, and Virtual Machines.</p>
                    <p>I am currently learning Javascript, Docker, React, Spring Boot, and more.</p>
                    <p className={"mt-5"}>Click <a href="/assets/CV.pdf">here</a> to go to see my <a href="/assets/CV.pdf">CV.</a></p>
                    <p className={"mt-5"}>Click <a href="/portfolio">here</a> to go to my <a href="/portfolio">portfolio.</a></p>
                </div>
            </div>
        </main>
    );
}
