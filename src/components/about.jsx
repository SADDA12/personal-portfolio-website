export default function About() {
    return(
        <>
        <section className="px-6 py-10">
            <div>
                <h1 className="text-white font-semibold text-center border-b border-orange-600 mx-28 text-xl pb-2 md:text-2xl md:mx-40">About Me</h1>
            </div>

            <div>
                <p className="text-slate-300 pt-4 md:text-xl">Hi, I am Samantha Adda, a full-stack web developer, passionate about leveraging my skills to build beautiful and scalable web applications. I have acquired a certificate in Frontend Development and am currently expanding my knowledge in both frontend and backend development. I am higly proficient in the programming languages. With a blend of creativity, attention to detail and great teamwork, I aspire to achieve long term goals by learning new skills. feel free to contact me for opportunities and collaborations.</p>
                
                <div className="flex justify-center">
                <button className="bg-orange-600 hover:bg-white text-white hover:text-orange-600 font-bold py-2 px-4 rounded mt-4">Contact Me</button>
                </div>
                
            </div>
        </section>
        </>
    )
};