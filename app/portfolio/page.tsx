"use client";

import { Header } from "../components/header";
import React from "react";
import Cards from "./cards";

export default function Portfolio() {
    return (
        <main className="flex items-center justify-center flex-col">
            <Header />
            <div className="text-white text-center my-4">
                <p>Here are some of the current projects I have worked on:</p>
            </div>
            <Cards />
        </main>
    );
}