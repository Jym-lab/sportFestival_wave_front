import Navbar from "../components/Navbar";
import '../css/style.css';
<<<<<<< Updated upstream
import SportMenu from "../components/SportMenu";
import { useNavbar } from "../utils/navbar-context";

=======
>>>>>>> Stashed changes

const FoodTruck = () => {
    const { isOpen } = useNavbar();
    return (
        <div className="FoodTruck">
            <Navbar />
<<<<<<< Updated upstream
            <div className={`transition duration-500 ${isOpen ? 'opacity-0' : 'opacity-100'}`}>
                <div className={"pageTitleLeft "}>
                    <p className="mb-1">푸드트럭</p>
                    <p>메뉴안내</p>

                </div>
                <SportMenu />
=======
            <div className="pageTitleLeft">
                <p className="mb-2">푸드트럭</p>
                <p>메뉴안내</p>
>>>>>>> Stashed changes
            </div>
        </div>
    )
}

export default FoodTruck;