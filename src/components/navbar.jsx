import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <section className="bg-white mb-2  flex justify-between px-2.5 py-1.5 lg:px-6 lg:py-2.5 fixed top-0 left-0 right-0 z-10 shadow-md">
                <div>
                    <h1 className=" font-semibold text-red-600 md:text-xl lg:text-2xl">Samantha Adda</h1>
                </div>

                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-red-500 text-xs focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>
                    {isOpen && (
                        <div className="absolute right-0 mt-6 w-48 bg-red-500 rounded-lg shadow-xl md:flex">
                            <ul className="py-2">
                                <li className="text-white text-sm px-4 py-2 hover:bg-gray-700">Home</li>
                                <li className="text-white text-sm px-4 py-2 hover:bg-gray-700">Projects</li>
                                <li className="text-white text-sm px-4 py-2 hover:bg-gray-700">Skills</li>
                                <li className="text-white text-sm px-4 py-2 hover:bg-gray-700">Contact</li>
                            </ul>
                            <div>
                            <button className="text-white text-xs px-2 py-1 m-1 rounded bg-slate-950" ><Link to="/SamanthaAddaCv.pdf.pdf" target="_blank" download>Download Cv</Link></button>
                            </div>
                        </div>
                    )}
                </div>

                <div className="hidden md:block md:flex md:gap-12 lg:gap-20">
                    <ul className="text-white flex gap-4 lg:gap-14">
                        <li className="text-red-600">Home</li>
                        <li className="text-red-600">Projects</li>
                        <li className="text-red-600">Skills</li>
                        <li className="text-red-600">Contact</li>
                    </ul>
                    <div>
                    <button className="bg-red-600 text-white font-semibold text-sm px-2 py-1 rounded"><Link to="/SamanthaAddaCv.pdf.pdf" target="_blank" download>Download Cv</Link></button>
                    </div>
                </div>
                
            </section>
        </>
    );
}