// import React from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import tailwindlogo from "../assets/tailwindlogo.png";
// import figmalogo from "../assets/figmalogo.png";

// export default function Skills() {

//     const settings = {
//         dots: true,
//         infinite: true,
//         speed: 100,
//         slidesToShow: 1,
//         slidesToScroll: 0
//       };

//     return(
//         <>
//         <section className="px-6 py-10">
//             <div>
//                 <h1 className="text-white font-semibold text-center border-b border-orange-600 mx-28 text-xl pb-2 md:text-2xl md:mx-40">My Skills</h1>
//             </div>

//             <div className="">
//             <Slider {...settings}>
//             <div>
//                 <ul className="flex space-x-4 text-white md:text-xl">
//                     <li className="my-2"><i class="fa-brands fa-html5 text-red-600 md:text-4xl md:px-2"></i> HTML <span className="text-sm md:text-lg">: Experienced</span></li>
//                     <li className="my-2"><i class="fa-brands fa-css3-alt text-blue-500 md:text-4xl md:px-2"></i> CSS <span className="text-sm md:text-lg">: Experienced</span></li>
//                     <li className="my-2"><i class="fa-brands fa-js text-yellow-400 md:text-4xl md:px-2"></i> JavaScript <span className="text-sm md:text-lg">: Intermediate</span></li>

//                     <div className="flex my-2">
//                     <img src={tailwindlogo} alt="tailwind css logo" className="w-4 h-4 md:w-10 md:h-8 md:px-1"/>
//                     <li> Tailwind <span className="text-sm md:text-lg">: Experienced</span></li>
//                     </div>

//                     <li className="my-2"><i class="fa-brands fa-react text-blue-400 md:text-4xl md:px-2"></i> React <span className="text-sm md:text-lg">: Intermediate</span></li>
//                     <li className="my-2"><i class="fa-brands fa-node-js text-green-500 md:text-4xl md:px-2"></i> Node <span className="text-sm md:text-lg">: Intermediate</span></li>

//                     <div className="flex my-2">
//                         <img src={figmalogo} alt="figma logo" className="w-6 h-6 md:w-10 md:h-10"/>

//                         <li>Figma <span className="text-sm md:text-lg">: Intermediate</span></li>
//                     </div>
                    
//                     <li className="my-2"> <i
//                     class="fa-brands fa-envira fa-rotate-by text-green-500 md:text-3xl  md:px-2"
//                     style={{ rotate: "40deg" }}
//                     ></i> MongoDB <span className="text-sm md:text-lg">: Intermediate</span></li>
//                 </ul>
//             </div>
//             </Slider>
//             </div>

//         </section>
//         </>
//     )
// };