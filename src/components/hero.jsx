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

            <a href="https://www.linkedin.com/in/samantha-adda-09b4821ba" target="_blank" rel="noopener noreferrer">
               <i class="fa-brands fa-linkedin text-white px-3.5 text-2xl lg:text-3xl"></i>
            </a>
            <a href="https://github.com/SADDA12" target="_blank" rel="noopener noreferrer">
               <i class="fa-brands fa-github text-white px-3.5 text-2xl lg:text-3xl"></i>
            </a>
        </div>
        </section>

        <section className="bg-red-50 mx-4 rounded p-3 md:p-6">
            <div className="mb-2">
                <h1 className="text-center text-red-500 font-bold text-xl">Things I love</h1>
            </div>

            <div className="flex gap-6 md:gap-10">
                <div className="bg-white border rounded p-2 md:w-9/12 lg:w-5/12">
                    <div className="text-center">
                      <i class="fa-solid fa-code border p-2 bg-red-500 text-white"></i>
                    </div>
                    <h1 className="text-center text-red-500">Frontend</h1>
                    <p className="text-sm text-center">I am more frontend focused and love to work with Reactjs as well as pure HTML and CSS</p>
                </div>

                <div className="bg-white border rounded p-2 md:w-9/12 lg:w-5/12">
                    <div className="text-center">
                       <i class="fa-solid fa-paintbrush border p-2 bg-red-500 text-white"></i>
                    </div>
                    <h1 className="text-center text-red-500">Creative Coding</h1>
                    <p className="text-sm text-center">I love creative coding because making beautiful art with code is very satisfying to me</p>
                </div>
            </div>
        </section>
        </>
    )
};