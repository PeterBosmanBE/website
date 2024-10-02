import {Header} from "../../components/header";
import vrHeavenImage from "../../../public/assets/images/VRHeaven.png";
import React from "react";

export default function Portfolio() {
    return (
        <main className="flex items-center justify-center flex-col">
            <Header/>
            <div className="text-white text-center my-4 flex items-center justify-center w-full pl-8">
                <div className="flex-1 flex justify-center">
                    <a href="https://themasite.peterbosman.be/index.html">
                        <img src={vrHeavenImage.src} alt="VRHeaven" className="w-3/1"/>
                    </a>
                </div>
                <div className="flex-1 flex flex-col justify-center pl-4 pr-4">
                    <h1 className="text-4xl font-bold pb-3">VRHeaven:</h1>
                    <p className={"pb-3"}>VRHeaven is my first project I made for school, I was told I had to make a
                        website about something I was interested in. A hobby, sport, movie, book, etc...</p>
                    <p className={"pb-3"}>I chose Virtual Reality, more specifically VRChat, something I've been really
                        into for over 3
                        years at the time I made the website.</p>
                    <p className={"pb-5"}>On this site you'll find some basic information about the game VRChat, where to download it and a
                        small FAQ about the game itself!</p>
                    <p className="text-2xl"><a href="https://themasite.peterbosman.be/index.html">Click here to go to the website!</a></p>
                </div>
            </div>
        </main>
    );
}