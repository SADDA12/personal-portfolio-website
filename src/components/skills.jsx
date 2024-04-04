export default function Skills() {
    return(
        <>
        <section className="bg-gradient-to-r from-orange-950 to-black px-3.5 py-4">
            <div>
                <h1 className="text-white text-center md:text-2xl">My Skills</h1>
            </div>

            <div className="md:flex md:justify-between">
            <div>
                <ul className="text-white md:text-xl">
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>Tailwind</li>
                </ul>
            </div>

            <div>
                <ul className="text-white md:text-xl">
                    <li>React</li>
                    <li>Node</li>
                    <li>Express</li>
                    <li>MongoDB</li>
                </ul>
            </div>
            </div>

        </section>
        </>
    )
};