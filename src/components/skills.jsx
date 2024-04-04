import tailwindlogo from "../assets/tailwindlogo.png";
import figmalogo from "../assets/figmalogo.png";

export default function Skills() {
    return(
        <>
        <section className="px-6 py-10">
            <div>
                <h1 className="text-white font-semibold text-center text-xl pb-2 md:text-2xl">My Skills</h1>
            </div>

            <div className="md:flex md:justify-between">
            <div>
                <ul className="text-white md:text-xl">
                    <li><i class="fa-brands fa-html5 text-red-600"></i> HTML <span className="text-sm">: Experienced</span></li>
                    <li><i class="fa-brands fa-css3-alt text-blue-500"></i> CSS <span className="text-sm">: Experienced</span></li>
                    <li><i class="fa-brands fa-js text-yellow-400"></i> JavaScript <span className="text-sm">: Intermediate</span></li>

                    <div className="flex">
                    <img src={tailwindlogo} alt="tailwind css logo" className="w-4 h-4"/>
                    <li> Tailwind <span className="text-sm">: Experienced</span></li>
                    </div>

                </ul>
            </div>

            <div>
                <ul className="text-white md:text-xl">
                    <li><i class="fa-brands fa-react text-blue-400"></i> React <span className="text-sm">: Intermediate</span></li>
                    <li><i class="fa-brands fa-node-js text-green-500"></i> Node <span className="text-sm">: Intermediate</span></li>

                    <div className="flex">
                        <img src={figmalogo} alt="figma logo" className="w-6 h-6"/>

                        <li>Figma <span className="text-sm">: Intermediate</span></li>
                    </div>
                    
                    <li> <i
              class="fa-brands fa-envira fa-rotate-by text-green-500"
              style={{ rotate: "40deg" }}
            ></i> MongoDB <span className="text-sm">: Intermediate</span></li>
                </ul>
            </div>
            </div>

        </section>
        </>
    )
};