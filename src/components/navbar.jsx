import React from "react";
import { useState } from "react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <section className="bg-black rounded-2xl my-2 mx-4 flex justify-between px-2.5 py-1.5 lg:px-6 lg:py-2.5 fixed top-0 left-0 right-0 z-10 border border-orange-200">
                <div>
                    <h1 className="text-white font-semibold text-base md:text-lg lg:text-2xl">Samantha Adda</h1>
                </div>

                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-white text-xs focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>
                    {isOpen && (
                        <div className="absolute right-0 mt-6 w-48 bg-black rounded-lg shadow-xl md:flex">
                            <ul className="py-2">
                                <li className="text-white text-sm px-4 py-2 hover:bg-gray-700">Home</li>
                                <li className="text-white text-sm px-4 py-2 hover:bg-gray-700">Projects</li>
                                <li className="text-white text-sm px-4 py-2 hover:bg-gray-700">Skills</li>
                                <li className="text-white text-sm px-4 py-2 hover:bg-gray-700">Contact</li>
                            </ul>
                            <div>
                            <p className="text-white text-xs">Download Cv</p>
                            </div>
                        </div>
                    )}
                </div>

                <div className="hidden md:block md:flex md:gap-12 lg:gap-20">
                    <ul className="text-white flex gap-4 lg:gap-14">
                        <li className="text-base">Home</li>
                        <li className="text-base">Projects</li>
                        <li className="text-base">Skills</li>
                        <li className="text-base">Contact</li>
                    </ul>
                    <div>
                    <p className="text-white text-base">Download Cv</p>
                    </div>
                </div>
                
            </section>
        </>
    );
}