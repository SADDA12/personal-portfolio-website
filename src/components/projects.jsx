import bakeryscreenshot from "../assets/bakery-screenshot.png";
import hairhavenscreenshot from "../assets/hairhaven-screenshot.png";
import agromartshot from "../assets/agromartshot.png";
import onyxcinemashot from "../assets/onyxcinemashot.png";

export default function Projects() {
    return(
        <>
        <section className="px-3.5 py-10">
            <div>
                <h1 className="text-white font-semibold text-center border-b border-orange-600 mx-28 text-xl pb-2 md:text-2xl md:mx-40">My Projects</h1>
            </div>

            <div className="py-4 mt-4 md:px-14">

            <div className="flex gap-4 text-white my-6 border-b border-orange-600 pb-4">
                <div className="w-2/4">
                    <img src={bakeryscreenshot} alt="screenshot of a bakery website" className="w-52 h-24"/>
                </div>
                <div className="w-2/4">
                    <p>Butter Bliss Bakery</p>
                    <p className="text-xs">A landing page for a bakery website which showcases the bakeries products and services</p>
                    <p className="text-xs">Html | Css | Github | Vercel</p>
                    <div className="flex gap-4">
                    <i class="fa-solid fa-eye"></i>
                    <i class="fa-brands fa-github"></i>
                    </div>
                </div>
            </div>

            <div className="flex gap-4 my-6 text-white border-b border-orange-600 pb-4">
                <div className="w-2/4">
                <p>Hair Haven</p>
                    <p className="text-xs">A landing page for a hair website which showcases the salons services and products they offer.</p>
                    <p className="text-xs">React | Css | Github | Vercel</p>
                    <div className="flex gap-4">
                    <i class="fa-solid fa-eye"></i>
                    <i class="fa-brands fa-github"></i>
                    </div>    
                </div>
                <div className="w-2/4">
                   <img src={hairhavenscreenshot} alt="screenshot of a hair website" className="w-52 h-24"/>
                </div>
            </div>

            <div className="flex gap-4 text-white my-6 border-b border-orange-600 pb-4">
                <div className="w-2/4">
                    <img src={agromartshot} alt="screenshot of an agro ecommerce website" className="w-52 h-24"/>
                </div>
                <div className="w-2/4">
                    <p>AgroMart</p>
                    <p className="text-xs">An ecommerce for selling and buying of agro products</p>
                    <p className="text-xs">React | Css | Github | Vercel</p>
                    <div className="flex gap-4">
                    <i class="fa-solid fa-eye"></i>
                    <i class="fa-brands fa-github"></i>
                    </div>
                </div>
            </div>

            <div className="flex gap-4 my-6 text-white">
                <div className="w-2/4">
                <p>OnyxCinema</p>
                    <p className="text-xs">A movie search app</p>
                    <p className="text-xs">React | Tailwind | Github | Vercel</p>
                    <div className="flex gap-4">
                    <i class="fa-solid fa-eye"></i>
                    <i class="fa-brands fa-github"></i>
                    </div>    
                </div>
                <div className="w-2/4">
                   <img src={onyxcinemashot} alt="screenshot of a movie search app" className="w-52 h-24"/>
                </div>
            </div>


            </div>
        </section>
        </>
    )
};