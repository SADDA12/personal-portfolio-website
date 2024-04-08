import React from "react";
import profile from "../assets/profilephoto-me.png";
export default function Hero() {
    return(
        <>
        <section className="pt-24 pb-3.5 lg:pb-7 md:justify-center">
        <div className="flex justify-center items-center">
            <img src={profile} alt="my profile pic" className="w-36 h-40 bg-white rounded-full md:w-40 md:h-40 lg:w-48 lg:h-48"/>
        </div>

        <div className="text-center">
            <h1 className="text-red-500 md:text-xl lg:text-3xl">FULL-STACK WEB DEVELOPER</h1>
            <h1 className="text-white font-semibold text-2xl md:text-4xl lg:text-5xl">Samantha Adda</h1>
            <p className="text-white md:text-xl">I am a full-stack web developer from Ghana</p>
            <i class="fa-brands fa-linkedin text-white px-3.5 text-2xl"></i><i class="fa-brands fa-github text-white px-3.5 text-2xl"></i>
        </div>
        </section>
        </>
    )
};