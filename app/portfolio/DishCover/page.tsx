import { Header } from "../../components/header";
import dishCoverImage from "../../../public/assets/images/DishCover.png";
import React from "react";

export default function Portfolio() {
    return (
        <main className="flex items-center justify-center flex-col">
            <Header />
            <div className="text-white text-center my-4 flex items-center justify-center w-full pl-8">
                <div className="flex-1 flex flex-col items-center">
                    <a href="https://dishcover-frkr2pe4bq-ew.a.run.app/recipeslist">
                        <img src={dishCoverImage.src} alt="DishCover" className="w-3/4 mt-4 mx-auto" />
                    </a>
                    <div className="w-3/4 mt-4 flex justify-center">
                        <iframe
                            src="https://www.youtube.com/embed/5rSmR26AZDg"
                            className="w-full h-64"
                            title="DishCover Video"
                        ></iframe>
                    </div>
                </div>
                <div className="flex-1 flex flex-col justify-center pl-4 pr-4">
                    <h1 className="text-4xl font-bold pb-3">DishCover:</h1>
                    <p className="pb-3">DishCover is my first team project made by Peter, Carolina, Rob and Mohamed.</p>
                    <p className="pb-3">This website is made with Java, Spring Boot, Basic (and small amounts of) Javascript, HTML, CSS and Bootstrap</p>
                    <p className="pb-5">Given a limited amount of time (1.5 months) we created a great website to show our teamwork, skills, communication and dedication to delivering a fantastic product in a short amount of time.</p>
                    <p className="text-2xl"><a href="https://dishcover-frkr2pe4bq-ew.a.run.app/recipeslist">Click here to go to the website!</a></p>
                </div>
            </div>
        </main>
    );
}