import bakeryscreenshot from "../assets/bakery-screenshot.png";
import hairhavenscreenshot from "../assets/hairhaven-screenshot.png";
import agromartshot from "../assets/agromartshot.png";
import onyxcinemashot from "../assets/onyxcinemashot.png";
import techguideme from "../assets/TGM.png";
import dlTravels from "../assets/dlTravels.png";
import magazine from "../assets/magazine.png";


export default function Projects() {
    return(
        <>
        <section id="projects" className="px-3.5 py-10 bg-slate-50">
            <div>
                <h1 className="font-semibold text-center mx-28 text-xl pb-2 md:text-2xl md:mx-40 lg:mx-96">Projects</h1>
            </div>

            <div className="block md:hidden">

            <div className="my-6 flex justify-center">
                <div className="w-3/4 border rounded-lg shadow">
                    <img src={dlTravels} alt="airline website" className="w-full h-32 md:h-48"/>

                    <div className=" p-1">
                    <p className="font-semibold md:text-2xl">DLTravels</p>
                    <p className="text-xs py-1 md:text-xl">A landing page for an airline website built with no code platform</p>
                    <p className="text-xs py-1 md:text-sm">Flutterflow</p>
                    <div className="text-black flex gap-4">
                    <a href="https://dl-travels-u54afn.flutterflow.app/" target="_blank" rel="noopener noreferrer">
                    <i class="fa-solid fa-eye md:text-2xl"></i>
                    </a>
                    </div>
                    </div>
                </div>
            </div>

            <div className="my-6 flex justify-center">
                <div className="w-3/4 border rounded-lg shadow">
                    <img src={magazine} alt="magazine website" className="w-full h-32 md:h-48"/>

                    <div className=" p-1">
                    <p className="font-semibold md:text-2xl">Magazine</p>
                    <p className="text-xs py-1 md:text-xl">A landing page for a simple magazine website</p>
                    <p className="text-xs py-1 md:text-sm">React | Github | Vercel</p>
                    <div className="text-black flex gap-4">
                    <a href="https://magazinelandingpage.vercel.app/" target="_blank" rel="noopener noreferrer">
                    <i class="fa-solid fa-eye md:text-2xl"></i>
                    </a>
                    <a href="https://github.com/SADDA12/magazine" target="_blank" rel="noopener noreferrer">
                    <i class="fa-brands fa-github md:text-2xl"></i>
                    </a>
                    </div>
                    </div>
                </div>
            </div>

            <div className="my-6 flex justify-center">
                <div className="w-3/4 border rounded-lg shadow">
                    <img src={bakeryscreenshot} alt="screenshot of a bakery website" className="w-full h-32 md:h-48"/>

                    <div className="p-1">
                    <p className="font-semibold md:text-2xl">Butter Bliss Bakery</p>
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

            <div className="my-6 flex justify-center">
                <div className="w-3/4 border rounded-lg shadow">
                    <img src={hairhavenscreenshot} alt="screenshot of a hair website" className="w-full h-32 md:h-48"/>

                    <div className=" p-1">
                    <p className="font-semibold md:text-2xl">Hair Haven</p>
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

            <div className="my-6 flex justify-center">
                <div className="w-3/4 border rounded-lg shadow">
                    <img src={agromartshot} alt="screenshot of an agro ecommerce website" className="w-full h-32 md:h-48"/>

                    <div className=" p-1 lg:h-48 lg:border-t">
                    <p className="font-semibold md:text-2xl">AgroMart</p>
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

            <div className="my-6 flex justify-center">
                <div className="w-3/4 border rounded-lg shadow">
                    <img src={onyxcinemashot} alt="screenshot of a movie search app" className="w-full h-32 md:h-48"/>

                    <div className="p-1 lg:h-48">
                    <p className="font-semibold md:text-2xl">OnyxCinema</p>
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

            <div className="my-6 flex justify-center">
                <div className="w-3/4 border rounded-lg shadow">
                    <img src={techguideme} alt="screenshot of a mentor website" className="w-full h-32 md:h-48"/>

                    <div className=" p-1">
                    <p className="font-semibold md:text-2xl">TechGuideMe</p>
                    <p className="text-xs py-1 md:text-xl">A mentor app that allows mentees look for mentors in the tech industry and book them based on their availability.</p>
                    <p className="text-xs py-1 md:text-sm">React | Tailwind | Github | Vercel</p>
                    <div className="text-black flex gap-4">
                    <a href="https://tech-guide-me.vercel.app" target="_blank" rel="noopener noreferrer">
                    <i class="fa-solid fa-eye md:text-2xl"></i>
                    </a>
                    <a href="https://github.com/SADDA12/Tech-Guide-Me" target="_blank" rel="noopener noreferrer">
                    <i class="fa-brands fa-github md:text-2xl"></i>
                    </a>
                    </div>
                    </div>
                </div>
            </div>


            </div>

            <div className="hidden md:block lg:hidden">

                <div className="flex justify-center gap-4 my-4">

                        <div className="border rounded-lg shadow w-1/2">
                            <img src={dlTravels} alt="airline website" className="h-48"/>

                            <div className=" p-1">
                            <p className="font-semibold text-xl">DLTravels</p>
                            <p className="py-1 text-lg">A landing page for an airline website built with no code platform</p>
                            <p className="py-1 text-sm">Flutterflow</p>
                            <div className="text-black flex gap-4">
                            <a href="https://dl-travels-u54afn.flutterflow.app/" target="_blank" rel="noopener noreferrer">
                            <i class="fa-solid fa-eye text-xl"></i>
                            </a>
                            </div>
                            </div>
                        </div>

                            <div className="border rounded-lg shadow w-1/2">
                                <img src={magazine} alt="magazine website" className="h-48"/>

                                <div className=" p-1">
                                <p className="font-semibold text-xl">Magazine</p>
                                <p className="py-1 text-lg">A landing page for a simple magazine website</p>
                                <p className="py-1 text-sm">React | Github | Vercel</p>
                                <div className="text-black flex gap-4">
                                <a href="https://magazinelandingpage.vercel.app/" target="_blank" rel="noopener noreferrer">
                                <i class="fa-solid fa-eye text-xl"></i>
                                </a>
                                <a href="https://github.com/SADDA12/magazine" target="_blank" rel="noopener noreferrer">
                                <i class="fa-brands fa-github text-xl"></i>
                                </a>
                                </div>
                                </div>
                            </div>

                </div>

                <div className="flex justify-center gap-4 my-4">

                <div className="border rounded-lg shadow w-1/2">
                    <img src={bakeryscreenshot} alt="screenshot of a bakery website" className="h-48"/>

                    <div className="p-1">
                    <p className="font-semibold text-xl">Butter Bliss Bakery</p>
                    <p className="py-1 text-lg">A landing page for a bakery website which showcases the bakeries products and services</p>
                    <p className="py-1 text-sm">Html | Css | Github | Vercel</p>
                    <div className="text-black flex gap-4">
                    <a href="https://bliss-bakery-landing-page-master.vercel.app/" target="_blank" rel="noopener noreferrer">
                    <i class="fa-solid fa-eye text-xl"></i>
                    </a>
                    <a href="https://github.com/SADDA12/Bliss-Bakery-Landing-Page-master" target="_blank" rel="noopener noreferrer">
                    <i class="fa-brands fa-github text-xl"></i>
                    </a>
                    </div>
                    </div>
                </div>

                <div className="border rounded-lg shadow w-1/2">
                    <img src={hairhavenscreenshot} alt="screenshot of a hair website" className="h-48"/>

                    <div className=" p-1">
                    <p className="font-semibold text-xl">Hair Haven</p>
                    <p className="py-1 text-lg">A landing page for a hair website which showcases the salons services and products they offer.</p>
                    <p className="py-1 text-sm">React | Css | Github | Vercel</p>
                    <div className="text-black flex gap-4">
                    <a href="https://hair-haven-landing-page.vercel.app/" target="_blank" rel="noopener noreferrer">
                    <i class="fa-solid fa-eye text-xl"></i>
                    </a>
                    <a href="https://github.com/SADDA12/hair_haven_landing_page" target="_blank" rel="noopener noreferrer">
                    <i class="fa-brands fa-github text-xl"></i>
                    </a>
                    </div>
                    </div>
                </div>

                </div>

                <div className="flex justify-center gap-4 my-4">

                <div className="border rounded-lg shadow w-1/2">
                    <img src={agromartshot} alt="screenshot of an agro ecommerce website" className="h-48"/>

                    <div className=" p-1">
                    <p className="font-semibold text-xl">AgroMart</p>
                    <p className="py-1 text-lg">A digital market place for selling and buying of agro products</p>
                    <p className="py-1 text-sm">React | Css | Github | Vercel</p>
                    <div className="text-black flex gap-4">
                    <a href="https://onyx-agro-mart-eta.vercel.app/products" target="_blank" rel="noopener noreferrer">
                    <i class="fa-solid fa-eye text-xl"></i>
                    </a>
                    <a href="https://github.com/OnyxAlpha/ONYX-AgroMart" target="_blank" rel="noopener noreferrer">
                    <i class="fa-brands fa-github text-xl"></i>
                    </a>
                    </div>
                    </div>
                </div>

                <div className="border rounded-lg shadow w-1/2">
                    <img src={onyxcinemashot} alt="screenshot of a movie search app" className="h-48"/>

                    <div className="p-1">
                    <p className="font-semibold text-xl">OnyxCinema</p>
                    <p className="py-1 text-lg">A movie search app to keep track of all your favourite popular movies and TV shows</p>
                    <p className="py-1 text-sm">React | Tailwind | Github | Vercel</p>
                    <div className="text-black flex gap-4">
                    <a href="https://onyx-movie-search-app-hazel.vercel.app/" target="_blank" rel="noopener noreferrer">
                    <i class="fa-solid fa-eye text-xl"></i>
                    </a>
                    <a href="https://github.com/OnyxAlpha/ONYX-Movie-Search-App" target="_blank" rel="noopener noreferrer">
                    <i class="fa-brands fa-github text-xl"></i>
                    </a>
                    </div>
                    </div>
                </div>

                </div>



                <div className="border rounded-lg shadow w-1/2 mr-4">
                    <img src={techguideme} alt="screenshot of a mentor website" className="h-48 w-full"/>

                    <div className=" p-1">
                    <p className="font-semibold text-xl">TechGuideMe</p>
                    <p className="py-1 text-lg">A mentor app that allows mentees look for mentors in the tech industry and book them based on their availability.</p>
                    <p className="py-1 text-sm">React | Tailwind | Github | Vercel</p>
                    <div className="text-black flex gap-4">
                    <a href="https://tech-guide-me.vercel.app" target="_blank" rel="noopener noreferrer">
                    <i class="fa-solid fa-eye text-xl"></i>
                    </a>
                    <a href="https://github.com/SADDA12/Tech-Guide-Me" target="_blank" rel="noopener noreferrer">
                    <i class="fa-brands fa-github text-xl"></i>
                    </a>
                    </div>
                    </div>
                </div>


            </div>

            <div className="hidden md:hidden lg:block">

            <div className="flex justify-center gap-4">


                <div className="w-1/3 border rounded-lg shadow">
                    <img src={dlTravels} alt="airline website" className="w-full h-32 md:h-48"/>

                    <div className=" p-1">
                    <p className="font-semibold text-xl">DLTravels</p>
                    <p className="py-1 text-lg">A landing page for an airline website built with no code platform</p>
                    <p className="py-1 text-sm">Flutterflow</p>
                    <div className="text-black flex gap-4">
                    <a href="https://dl-travels-u54afn.flutterflow.app/" target="_blank" rel="noopener noreferrer">
                    <i class="fa-solid fa-eye text-xl"></i>
                    </a>
                    </div>
                    </div>
                </div>

                <div className="w-1/3 border rounded-lg shadow">
                    <img src={magazine} alt="magazine website" className="w-full h-32 md:h-48"/>

                    <div className=" p-1">
                    <p className="font-semibold text-xl">Magazine</p>
                    <p className="py-1 text-lg">A landing page for a simple magazine website</p>
                    <p className="py-1 text-sm">React | Github | Vercel</p>
                    <div className="text-black flex gap-4">
                    <a href="https://magazinelandingpage.vercel.app/" target="_blank" rel="noopener noreferrer">
                    <i class="fa-solid fa-eye text-xl"></i>
                    </a>
                    <a href="https://github.com/SADDA12/magazine" target="_blank" rel="noopener noreferrer">
                    <i class="fa-brands fa-github text-xl"></i>
                    </a>
                    </div>
                    </div>
                </div>

                <div className="w-1/3 border rounded-lg shadow">
                    <img src={bakeryscreenshot} alt="screenshot of a bakery website" className="w-full h-32 md:h-48"/>

                    <div className="p-1">
                    <p className="font-semibold text-xl">Butter Bliss Bakery</p>
                    <p className="py-1 text-lg">A landing page for a bakery website which showcases the bakeries products and services</p>
                    <p className="py-1 text-sm">Html | Css | Github | Vercel</p>
                    <div className="text-black flex gap-4">
                    <a href="https://bliss-bakery-landing-page-master.vercel.app/" target="_blank" rel="noopener noreferrer">
                    <i class="fa-solid fa-eye text-xl"></i>
                    </a>
                    <a href="https://github.com/SADDA12/Bliss-Bakery-Landing-Page-master" target="_blank" rel="noopener noreferrer">
                    <i class="fa-brands fa-github text-xl"></i>
                    </a>
                    </div>
                    </div>
                </div>



            </div>

    

           

            <div className="my-6 flex justify-center gap-4">


                <div className="w-1/3 border rounded-lg shadow">
                    <img src={hairhavenscreenshot} alt="screenshot of a hair website" className="w-full h-32 md:h-48"/>

                    <div className=" p-1">
                    <p className="font-semibold text-xl">Hair Haven</p>
                    <p className="py-1 text-lg">A landing page for a hair website which showcases the salons services and products they offer.</p>
                    <p className="py-1 text-sm">React | Css | Github | Vercel</p>
                    <div className="text-black flex gap-4">
                    <a href="https://hair-haven-landing-page.vercel.app/" target="_blank" rel="noopener noreferrer">
                    <i class="fa-solid fa-eye text-xl"></i>
                    </a>
                    <a href="https://github.com/SADDA12/hair_haven_landing_page" target="_blank" rel="noopener noreferrer">
                    <i class="fa-brands fa-github text-xl"></i>
                    </a>
                    </div>
                    </div>
                </div>

                <div className="w-1/3 border rounded-lg shadow">
                    <img src={agromartshot} alt="screenshot of an agro ecommerce website" className="w-full h-32 md:h-48"/>

                    <div className=" p-1 lg:h-48 lg:border-t">
                    <p className="font-semibold text-xl">AgroMart</p>
                    <p className="py-1 text-lg">A digital market place for selling and buying of agro products</p>
                    <p className="py-1 text-sm">React | Css | Github | Vercel</p>
                    <div className="text-black flex gap-4">
                    <a href="https://onyx-agro-mart-eta.vercel.app/products" target="_blank" rel="noopener noreferrer">
                    <i class="fa-solid fa-eye text-xl"></i>
                    </a>
                    <a href="https://github.com/OnyxAlpha/ONYX-AgroMart" target="_blank" rel="noopener noreferrer">
                    <i class="fa-brands fa-github text-xl"></i>
                    </a>
                    </div>
                    </div>
                </div>

                <div className="w-1/3 border rounded-lg shadow">
                    <img src={onyxcinemashot} alt="screenshot of a movie search app" className="w-full h-32 md:h-48"/>

                    <div className="p-1 lg:h-48">
                    <p className="font-semibold text-xl">OnyxCinema</p>
                    <p className="py-1 text-lg">A movie search app to keep track of all your favourite popular movies and TV shows</p>
                    <p className="py-1 text-sm">React | Tailwind | Github | Vercel</p>
                    <div className="text-black flex gap-4">
                    <a href="https://onyx-movie-search-app-hazel.vercel.app/" target="_blank" rel="noopener noreferrer">
                    <i class="fa-solid fa-eye text-xl"></i>
                    </a>
                    <a href="https://github.com/OnyxAlpha/ONYX-Movie-Search-App" target="_blank" rel="noopener noreferrer">
                    <i class="fa-brands fa-github text-xl"></i>
                    </a>
                    </div>
                    </div>
                </div>



            </div>

            

                <div className="w-1/3 border rounded-lg shadow">
                    <img src={techguideme} alt="screenshot of a mentor website" className="w-full h-32 md:h-48"/>

                    <div className=" p-1">
                    <p className="font-semibold text-xl">TechGuideMe</p>
                    <p className="py-1 text-lg">A mentor app that allows mentees look for mentors in the tech industry and book them based on their availability.</p>
                    <p className="text-xs py-1 text-lg">React | Tailwind | Github | Vercel</p>
                    <div className="text-black flex gap-4">
                    <a href="https://tech-guide-me.vercel.app" target="_blank" rel="noopener noreferrer">
                    <i class="fa-solid fa-eye text-xl"></i>
                    </a>
                    <a href="https://github.com/SADDA12/Tech-Guide-Me" target="_blank" rel="noopener noreferrer">
                    <i class="fa-brands fa-github text-xl"></i>
                    </a>
                    </div>
                    </div>
                </div>


            </div>

            
        </section>
        </>
    )
};