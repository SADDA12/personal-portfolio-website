import bakeryscreenshot from "../assets/bakery-screenshot.png";
import hairhavenscreenshot from "../assets/hairhaven-screenshot.png";
import agromartshot from "../assets/agromartshot.png";
import onyxcinemashot from "../assets/onyxcinemashot.png";

export default function Projects() {
    return(
        <>
        <section className="px-3.5 py-10">
            <div>
                <h1 className="text-white font-semibold text-center border-b-2 mx-28 text-xl pb-2 md:text-2xl md:mx-40">My Projects</h1>
            </div>

            <div className="bg-white rounded py-4 my-4 mx-6 md:px-14">

            
            <div className="text-red-500 my-6 flex justify-center">
                <div className="w-3/4 border">
                    <img src={bakeryscreenshot} alt="screenshot of a bakery website" className="w-full h-32"/>

                    <div className=" p-1">
                    <p className="text-center">Butter Bliss Bakery</p>
                    <p className="text-xs py-1">A landing page for a bakery website which showcases the bakeries products and services</p>
                    <p className="text-xs py-1">Html | Css | Github | Vercel</p>
                    <div className="text-black flex gap-4">
                    <i class="fa-solid fa-eye"></i>
                    <i class="fa-brands fa-github"></i>
                    </div>
                    </div>
                </div>
            </div>


            <div className="text-red-500 my-6 flex justify-center">
                <div className="w-3/4 border">
                    <img src={hairhavenscreenshot} alt="screenshot of a hair website" className="w-full h-32"/>

                    <div className=" p-1">
                    <p className="text-center">Hair Haven</p>
                    <p className="text-xs py-1">A landing page for a hair website which showcases the salons services and products they offer.</p>
                    <p className="text-xs py-1">React | Css | Github | Vercel</p>
                    <div className="text-black flex gap-4">
                    <i class="fa-solid fa-eye"></i>
                    <i class="fa-brands fa-github"></i>
                    </div>
                    </div>
                </div>
            </div>


            <div className="text-red-500 my-6 flex justify-center">
                <div className="w-3/4 border">
                    <img src={agromartshot} alt="screenshot of an agro ecommerce website" className="w-full h-32"/>

                    <div className=" p-1">
                    <p className="text-center">AgroMart</p>
                    <p className="text-xs py-1">An ecommerce for selling and buying of agro products</p>
                    <p className="text-xs py-1">React | Css | Github | Vercel</p>
                    <div className="text-black flex gap-4">
                    <i class="fa-solid fa-eye"></i>
                    <i class="fa-brands fa-github"></i>
                    </div>
                    </div>
                </div>
            </div>


            <div className="text-red-500 my-6 flex justify-center">
                <div className="w-3/4 border">
                    <img src={onyxcinemashot} alt="screenshot of a movie search app" className="w-full h-32"/>

                    <div className=" p-1">
                    <p className="text-center">OnyxCinema</p>
                    <p className="text-xs py-1">A movie search app</p>
                    <p className="text-xs py-1">React | Tailwind | Github | Vercel</p>
                    <div className="text-black flex gap-4">
                    <i class="fa-solid fa-eye"></i>
                    <i class="fa-brands fa-github"></i>
                    </div>
                    </div>
                </div>
            </div>






            </div>
        </section>
        </>
    )
};