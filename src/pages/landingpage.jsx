import Navbar from "../components/navbar";
import Hero from "../components/hero";
import About from "../components/about";
import Skills from "../components/skills";
import Projects from "../components/projects";
import Contact from "../components/contact";
import Footer from "../components/footer";
import FollowMe from "../components/followme";

export default function LandingPage() {
    return(
        <>
        <section className="bg-black">
        <Navbar/>
        <Hero/>
        <About/>
        <Skills/>
        <Projects/>
        <Contact/>
        <FollowMe/>
        <Footer/>
        </section>
        </>
    )
}