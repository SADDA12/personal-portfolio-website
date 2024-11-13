export default function Contact() {
    return(
        <>
        <section id="contact" className="px-3.5 py-10 bg-white">

            <h1 className="font-semibold text-center mx-28 text-xl pb-2 md:text-2xl md:mx-40 lg:mx-96">Get In Touch</h1>

            <div className="flex justify-center">
            <div className="bg-violet-300 h-40 rounded p-3 w-3/4">
                <div>
                    <h1 className="text-lg">Email: sammiedaga@gmail.com</h1>
                    <h1 className="text-lg pt-2">Phone: +233 20 212 6127</h1>
                </div>

                <div className="pt-2">
            <a href="https://github.com/SADDA12" target="_blank" rel="noopener noreferrer">
               <i class="fa-brands fa-github px-3.5 text-2xl hover:scale-110"></i>
            </a>
            <a href="https://www.linkedin.com/in/samantha-adda-09b4821ba" target="_blank" rel="noopener noreferrer">
               <i class="fa-brands fa-linkedin px-3.5 text-2xl hover:scale-110"></i>
            </a>
            <a href="mailto:sammiedaga@gmail.com" target="_blank" rel="noopener noreferrer">
        <i className="fa-solid fa-envelope px-3.5 text-2xl hover:scale-110"></i>
      </a>
            </div>
            </div>
            </div>

        </section>
        </>
    )
};