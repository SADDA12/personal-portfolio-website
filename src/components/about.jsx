import React from 'react';
import webDev from "../assets/webDev.png";
import mobDev from "../assets/mobDev.png";


export default function About() {
    return(
        <>

        <section className="bg-slate-50 flex flex-col items-center py-10">
            <div className="w-4/5 text-center">
            <h1 className="font-semibold text-xl md:text-2xl">About Me</h1>
            <p className="pt-2">Hi, I am Samantha Adda, a frontend developer, passionate about leveraging my skills to build beautiful and scalable web and mobile applications. I have acquired a certificate in Frontend Development and am currently expanding my knowledge in UI/UX design. I am higly proficient in the programming languages. With a blend of creativity, attention to detail and great teamwork, I aspire to achieve long term goals by learning new skills. Feel free to contact me for opportunities and collaborations.</p>
            </div>

            <h1 className="font-semibold py-4 md:text-xl">Specializing In</h1>
            <div className="md:flex md:gap-6 lg:justify-center">
                <div className='bg-slate-100 rounded p-3 flex flex-col items-center w-80 shadow-lg mb-4 md:h-96 lg:w-2/5 lg:h-80'>
                    <img src={webDev} alt="webDev" className='w-24 h-20'/>
                    <h1 className='text-center font-semibold'>Web Development</h1>
                    <p>With a strong foundation in both frontend development, I craft scalable and visually appealing web applications. Leveraging the latest technologies and frameworks, I prioritize responsive design, performance, and seamless user experiences to deliver high-quality web solutions that meet modern standards</p>
                </div>

                <div className='bg-slate-100 rounded p-3 flex flex-col items-center w-80 shadow-lg md:h-96 lg:w-2/5 lg:h-80'>
                    <img src={mobDev} alt="webDev" className='w-24 h-20'/>
                    <h1 className='text-center font-semibold'>Mobile App Development</h1>
                    <p>Specializing in cross-platform and native app development, I create mobile applications that are intuitive, efficient, and visually engaging. From design to deployment, I focus on user-centered interfaces and optimized performance to provide impactful mobile experiences across a range of devices</p>
                </div>

                
            </div>
        </section>


        
        </>
    )
};