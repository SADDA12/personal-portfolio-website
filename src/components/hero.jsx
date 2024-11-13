import React from "react";
import me2 from "../assets/me2.png";
export default function Hero() {
    return(
        <>

        <section id="hero" className="bg-white">

        <section className="block lg:hidden flex flex-col items-center justify-center py-20 px-3.5 md:py-32 md:px-6">
            <div>
            <img src={me2} alt="my profile pic" className="w-40 h-44 md:w-52 md:h-52 rounded-full"/>
            </div>

            <div className="flex flex-col items-center justify-center my-4">
            <h1 className="text-black md:text-xl"> I'M <span className="text-black">DEVELOPER</span></h1>
            <h1 className="text-black font-semibold text-2xl md:text-4xl my-2">SAMANTHA ADDA</h1>
            <p className="text-black md:text-xl text-center">Greetings, fellow digital explorers! I am Samantha, a passionate and innovative developer, dedicated to crafting immersive digital experiences. Welcome to my online abode.</p>

            <div className="mt-2">
            <a href="https://www.linkedin.com/in/samantha-adda-09b4821ba" target="_blank" rel="noopener noreferrer">
                <i class="fa-brands fa-linkedin text-slate-600 px-3.5 text-2xl lg:text-3xl"></i>
            </a>
            <a href="https://github.com/SADDA12" target="_blank" rel="noopener noreferrer">
                <i class="fa-brands fa-github text-slate-600 px-3.5 text-2xl"></i>
            </a>
            </div>
            
            </div>
        </section>

        <section className="hidden lg:block mt-20 px-20 py-10">
         <div className="flex justify-center items-center">

            <div>
            <a href="https://www.linkedin.com/in/samantha-adda-09b4821ba" target="_blank" rel="noopener noreferrer">
                <i class="fa-brands fa-linkedin text-slate-600 hover:scale-110 hover:text-violet-600 py-4 text-2xl lg:text-3xl"></i>
            </a>
            <a href="https://github.com/SADDA12" target="_blank" rel="noopener noreferrer">
                <i class="fa-brands fa-github text-slate-600 hover:scale-110 hover:text-violet-600 py-4 text-2xl"></i>
            </a>

            </div>

            <div className="w-2/3 px-5">
            <h1 className="text-black md:text-xl"> I'M <span className="text-black">DEVELOPER</span></h1>
            <h1 className="text-black font-semibold text-2xl md:text-4xl my-2">SAMANTHA ADDA</h1>
            <p className="text-black md:text-xl">Greetings, fellow digital explorers! I am Samantha, a passionate and innovative developer, dedicated to crafting immersive digital experiences. Welcome to my online abode.</p>

            </div>

            <div className="w-1/3">
            <img src={me2} alt="my profile pic" className="h-80 w-72 rounded-full"/>
            </div>
         </div>
        </section>

        </section>


        </>
    )
};