import bakeryscreenshot from "../assets/bakery-screenshot.png";
import hairhavenscreenshot from "../assets/hairhaven-screenshot.png";

export default function Projects() {
    return(
        <>
        <section className="px-3.5 py-10">
            <div>
                <h1 className="text-white font-semibold text-center text-xl pb-2 md:text-2xl">My Projects</h1>
            </div>

            <div className="bg-gray-800 py-6">

            <div className="flex gap-4 text-white">
                <div>
                    <img src={bakeryscreenshot} alt="screenshot of a bakery website" className="w-52 h-24"/>
                </div>
                <div>
                    <p>Butter Bliss Bakery</p>
                    <p className="text-xs">A landing page for a bakery website</p>
                    <p>Html | Css | Github | Vercel</p>
                    <div className="flex gap-4">
                    <i class="fa-solid fa-eye"></i>
                    <i class="fa-brands fa-github"></i>
                    </div>
                </div>
            </div>

            <div className="flex gap-4 text-white">
                <div>
                <p>Hair Haven</p>
                    <p className="text-xs">A landing page for a hair website</p>
                    <p>React | Css | Github | Vercel</p>
                    <div className="flex gap-4">
                    <i class="fa-solid fa-eye"></i>
                    <i class="fa-brands fa-github"></i>
                    </div>    
                </div>
                <div>
                   <img src={hairhavenscreenshot} alt="screenshot of a hair website" className="w-52 h-24"/>
                </div>
            </div>

            <div className="flex text-white">
                <div>
                    <h1>Project Image</h1>
                </div>
                <div>
                    <p>Project Description</p>
                </div>
            </div>


            </div>
        </section>
        </>
    )
};