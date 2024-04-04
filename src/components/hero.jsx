import React from "react";
import profilepic from "../assets/my-profile-pic.png";

export default function Hero() {
    return(
        <>
        <section className="bg-gradient-to-r from-black to-orange-950 pt-24 pb-3.5 lg:pb-7 md:flex md:justify-center">
        <div className="flex justify-center items-center">
            <img src={profilepic} alt="profilepic" className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48"/>
        </div>

        <div className="text-center">
            <h1 className="text-slate-300 md:text-xl lg:text-3xl">FULL-STACK WEB DEVELOPER</h1>
            <h1 className="text-white font-semibold md:text-4xl lg:text-5xl">Samantha Adda</h1>
            <p className="text-slate-300 md:text-xl">I am a full-stack web developer from Ghana</p>
        </div>
        </section>
        </>
    )
};