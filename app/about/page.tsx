import { Header } from '../components/header';
import React from "react";

export default function Portfolio() {
    return (
        <main className="flex items-center justify-center">
            <Header />
            <div className="text-white text-center">
                <div>
                    <h1>I am Peter Bosman, a 21 year old programmer from Belgium</h1>
                    <p>Click <a href="/portfolio">here</a> to go to my <a href="/portfolio">portfolio.</a></p>
                </div>
            </div>
        </main>
    );
}
