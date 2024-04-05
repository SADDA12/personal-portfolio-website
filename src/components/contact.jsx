export default function Contact() {
    return(
        <>
        <section className="px-3.5 py-4">
            <div>
                <h1 className="text-white font-semibold text-center border-b border-orange-600 mx-28 text-xl md:text-2xl md:mx-40">Contact Me</h1>
            </div>

            <div className="mx-5 my-4">
                <form>
                    <label for="name" className="text-white">Full Name</label><br/>

                    <input type="text" id="name" placeholder="Enter your full name" className=" mb-3 p-2 w-full rounded-lg"/><br/>



                    <label for="email" className="text-white"> Email</label><br/>

                    <input type="email" id="email" placeholder="Enter your email" className="mb-3 p-2 w-full rounded-lg"/><br/>


                    <label for="contact" className="text-white">Contact Number</label><br/>

                    <div className="w-full">

                    <select id="countrycode" className="mb-3 p-2 border border-l border-slate-300 w-1/4 rounded-lg">
                        <option>+232</option>
                        <option>+233</option>
                        <option>+242</option>
                        <option>+221</option>
                        <option>+227</option>
                        <option>+234</option>
                        <option>+254</option>
                        <option>+256</option>
                        <option>+39</option>
                        <option>+41</option>
                        <option>+44</option>
                        <option>+49</option>
                    </select>
                    <input type="number" id="contact" placeholder="Phone number" className=" mb-3 p-2 border-y border-r border-slate-300 w-3/4 rounded-lg"/><br/>

                    </div>

                    <label for="message" className="text-white">Your Message</label><br/>
                    <textarea id="message" placeholder="Enter your message" className="w-full mb-3 p-2 h-20 rounded-lg"></textarea><br/>

                    <input type="button" onClick={() => alert("Your message has been sent")}  value="Send Message" className="bg-white hover:bg-red-800 text-red-500 hover:text-white font-bold py-1 px-2 rounded-3xl mt-2"/>

                </form>
            </div>

        </section>
        </>
    )
};