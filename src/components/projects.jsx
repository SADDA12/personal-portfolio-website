import bakeryscreenshot from "../assets/bakery-screenshot.png";

export default function Projects() {
    return(
        <>
        <section className="bg-black px-3.5 py-4">
            <div>
                <h1 className="text-amber-600 font-semibold text-center md:text-2xl">My Projects</h1>
            </div>

            <div className="bg-gray-800">

            <div className="flex gap-4 text-white">
                <div>
                    <img src={bakeryscreenshot} alt="screenshot of a bakery website" className="w-52 h-24"/>
                </div>
                <div>
                    <p>Butter Bliss Bakery</p>
                    <p className="text-xs">A landing page for a bakery website</p>
                    <p>Html | Css</p>
                    <div className="flex gap-4">
                    <i class="fa-solid fa-eye"></i>
                    <i class="fa-brands fa-github"></i>
                    </div>
                </div>
            </div>

            <div className="flex text-white">
                <div>
                   <p>Project Description</p>    
                </div>
                <div>
                   <h1>Project Image</h1>
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