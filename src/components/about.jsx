export default function About() {
    return(
        <>
        <section className="bg-black px-3.5 py-4">
            <div>
                <h1 className="text-amber-600 font-semibold text-center md:text-2xl">About Me</h1>
            </div>

            <div>
                <p className="text-slate-300 md:text-xl">Hi, I am Samantha Adda, a full-stack web developer, passionate about leveraging my skills to build beautiful and scalable web applications. I have acquired a certificate in Frontend Development and am currently expanding my knowledge in both frontend and backend development. I am higly proficient in the programming languages. With a blend of creativity, attention to detail and great teamwork, I aspire to achieve long term goals by learning new skills. feel free to contact me for opportunities and collaborations.</p>
                
                <div className="flex justify-center">
                <button className="bg-white hover:bg-red-800 text-red-500 hover:text-white font-bold py-2 px-4 rounded-3xl mt-4">Contact Me</button>
                </div>
                
            </div>
        </section>
        </>
    )
};