import bakeryscreenshot from "../assets/bakery-screenshot.png";
import hairhavenscreenshot from "../assets/hairhaven-screenshot.png";
import agromartshot from "../assets/agromartshot.png";
import onyxcinemashot from "../assets/onyxcinemashot.png";

export default function Projects() {
    return(
        <>
        <section id="projects" className="px-3.5 py-10">
            <div>
                <h1 className="text-white font-semibold text-center border-b-2 mx-28 text-xl pb-2 md:text-2xl md:mx-40 lg:mx-96">My Projects</h1>
            </div>

            <div className="bg-white rounded py-4 my-4 mx-6 md:px-14 lg:flex">

            <div className="lg:w-1/2">
            <div className="text-red-500 my-6 flex justify-center">
                <div className="w-3/4 border">
                    <img src={bakeryscreenshot} alt="screenshot of a bakery website" className="w-full h-32 md:h-48"/>

                    <div className=" p-1">
                    <p className="text-center font-semibold md:text-2xl">Butter Bliss Bakery</p>
                    <p className="text-xs py-1 md:text-xl">A landing page for a bakery website which showcases the bakeries products and services</p>
                    <p className="text-xs py-1 md:text-sm">Html | Css | Github | Vercel</p>
                    <div className="text-black flex gap-4">
                    <a href="https://bliss-bakery-landing-page-master.vercel.app/" target="_blank" rel="noopener noreferrer">
                    <i class="fa-solid fa-eye md:text-2xl"></i>
                    </a>
                    <a href="https://github.com/SADDA12/Bliss-Bakery-Landing-Page-master" target="_blank" rel="noopener noreferrer">
                    <i class="fa-brands fa-github md:text-2xl"></i>
                    </a>
                    </div>
                    </div>
                </div>
            </div>


            <div className="text-red-500 my-6 flex justify-center">
                <div className="w-3/4 border">
                    <img src={hairhavenscreenshot} alt="screenshot of a hair website" className="w-full h-32 md:h-48"/>

                    <div className=" p-1">
                    <p className="text-center font-semibold md:text-2xl">Hair Haven</p>
                    <p className="text-xs py-1 md:text-xl">A landing page for a hair website which showcases the salons services and products they offer.</p>
                    <p className="text-xs py-1 md:text-sm">React | Css | Github | Vercel</p>
                    <div className="text-black flex gap-4">
                    <a href="https://hair-haven-landing-page.vercel.app/" target="_blank" rel="noopener noreferrer">
                    <i class="fa-solid fa-eye md:text-2xl"></i>
                    </a>
                    <a href="https://github.com/SADDA12/hair_haven_landing_page" target="_blank" rel="noopener noreferrer">
                    <i class="fa-brands fa-github md:text-2xl"></i>
                    </a>
                    </div>
                    </div>
                </div>
            </div>
            </div>

            <div className="lg:w-1/2">
            <div className="text-red-500 my-6 flex justify-center">
                <div className="w-3/4 border">
                    <img src={agromartshot} alt="screenshot of an agro ecommerce website" className="w-full h-32 md:h-48"/>

                    <div className=" p-1 lg:h-48 lg:border-t">
                    <p className="text-center font-semibold md:text-2xl">AgroMart</p>
                    <p className="text-xs py-1 md:text-xl">A digital market place for selling and buying of agro products</p>
                    <p className="text-xs py-1 md:text-sm">React | Css | Github | Vercel</p>
                    <div className="text-black flex gap-4">
                    <a href="https://onyx-agro-mart-eta.vercel.app/products" target="_blank" rel="noopener noreferrer">
                    <i class="fa-solid fa-eye md:text-2xl"></i>
                    </a>
                    <a href="https://github.com/OnyxAlpha/ONYX-AgroMart" target="_blank" rel="noopener noreferrer">
                    <i class="fa-brands fa-github md:text-2xl"></i>
                    </a>
                    </div>
                    </div>
                </div>
            </div>


            <div className="text-red-500 my-6 flex justify-center">
                <div className="w-3/4 border">
                    <img src={onyxcinemashot} alt="screenshot of a movie search app" className="w-full h-32 md:h-48"/>

                    <div className="p-1 lg:h-48">
                    <p className="text-center font-semibold md:text-2xl">OnyxCinema</p>
                    <p className="text-xs py-1 md:text-xl">A movie search app to keep track of all your favourite popular movies and TV shows</p>
                    <p className="text-xs py-1 md:text-sm">React | Tailwind | Github | Vercel</p>
                    <div className="text-black flex gap-4">
                    <a href="https://onyx-movie-search-app-hazel.vercel.app/" target="_blank" rel="noopener noreferrer">
                    <i class="fa-solid fa-eye md:text-2xl"></i>
                    </a>
                    <a href="https://github.com/OnyxAlpha/ONYX-Movie-Search-App" target="_blank" rel="noopener noreferrer">
                    <i class="fa-brands fa-github md:text-2xl"></i>
                    </a>
                    </div>
                    </div>
                </div>
            </div>
            </div>


            </div>
        </section>
        </>
    )
};