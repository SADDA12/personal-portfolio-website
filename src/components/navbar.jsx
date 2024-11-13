import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const [activeSection, setActiveSection] = useState('#hero');

    const handleScroll = () => {
        const sections = ['hero', 'projects', 'skills', 'contact'];
        const scrollPosition = window.scrollY + window.innerHeight / 2;

        for (const section of sections) {
            const element = document.getElementById(section);
            if (element && scrollPosition >= element.offsetTop && scrollPosition < element.offsetTop + element.offsetHeight) {
                setActiveSection(`#${section}`);
                break;
            }
        }
    };


    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);







    return (
        <>
            <section className="bg-white mb-2  flex justify-between px-2.5 py-4 lg:px-6 lg:py-5 fixed top-0 left-0 right-0 z-10 shadow-md">
                <div>
                    <h1 className="italic font-semibold text-black md:text-lg lg:text-xl">Samantha Adda</h1>
                </div>

                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-violet-600 text-xs focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>
                    {isOpen && (
                        <div className="absolute right-0 mt-6 w-full bg-violet-300 bg-opacity-90 shadow-xl text-right py-2">
                            <ul className="py-2">
                                <li><a href="#hero" className="text-white text-sm px-4 py-2">Home</a></li>
                                <li><a href="#skills" className="text-white text-sm px-4 py-2">Skills</a></li>
                                <li><a href="#projects" className="text-white text-sm px-4 py-2">Projects</a></li>
                                <li><a href="#contact" className="text-white text-sm px-4 py-2">Contact</a></li>
                            </ul>
                            <div>
                            <button className=" text-white text-xs px-3 py-1 m-1 rounded-full bg-gradient-to-b from-violet-400 to-violet-500" ><Link to="/SamanthaAddaResume.docx.pdf" target="_blank" download>Download Cv</Link></button>
                            </div>
                        </div>
                    )}
                </div>

                <div className="hidden md:block md:flex md:gap-12 lg:gap-20">
                    <div className="text-black flex gap-4 lg:gap-14">
                    <a href="#hero" className={`hover:text-violet-300 ${activeSection === '#hero' ? 'font-bold border-b text-violet-300 border-violet-300' : ''}`}>Home</a>
                    <a href="#skills" className={`hover:text-violet-300 ${activeSection === '#skills' ? 'font-bold border-b text-violet-300 border-violet-300' : ''}`}>Skills</a>
                <a href="#projects" className={`hover:text-violet-300 ${activeSection === '#projects' ? 'font-bold border-b text-violet-300 border-violet-300' : ''}`}>Projects</a>
                <a href="#contact" className={`hover:text-violet-300 ${activeSection === '#contact' ? 'font-bold border-b text-violet-300 border-violet-300' : ''}`}>Contact</a>
                    </div>
                    <div>
                    <button className="bg-gradient-to-b from-violet-400 to-violet-500 text-white font-semibold text-sm px-4 py-2 rounded-tr-lg rounded-bl-2xl"><Link to="/SamanthaAddaResume.docx.pdf" target="_blank" download>Download Cv</Link></button>
                    </div>
                </div>
                
            </section>
        </>
    );
}