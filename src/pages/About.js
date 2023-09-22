import Navbar from "../components/Navbar";
import { images } from "../utils/images";
import ScrollToTop from "../components/ScrollToTop";
import { useNavbar } from "../utils/navbar-context";

const About = () => {
    const { isOpen } = useNavbar();
    return (
        <div className="About">
            <Navbar />
            
            <ScrollToTop />
        </div>
    )
}

export default About;