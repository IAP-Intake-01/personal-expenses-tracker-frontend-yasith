import Navbar from "../components/Navbar/Navbar.jsx";
import Hero from "../components/Hero/Hero.jsx";
import Footer from "../components/Footer/Footer.jsx";
import HomePageImageSection from "../components/HomePageImageSection/HomePageImageSection.jsx";
import SimpleHomeCards from "../components/SimpleHomeCards/SimpleHomeCards.jsx";

export default function HomePage(){
    return(
        <div>
            <Navbar/>
            <Hero/>
            <SimpleHomeCards/>
            <HomePageImageSection/>
            <Footer/>
        </div>
    )
}