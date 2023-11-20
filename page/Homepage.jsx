import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Experience from "../components/Experience"
import AboutMe from "../components/AboutMe"
import Footer from "../components/Footer"


export default function Homepage() {
    return (
        <>
            <Navbar/>
            <Hero/>
            <Experience/>
            <AboutMe/>
            <Footer/>
        </>
    )
}