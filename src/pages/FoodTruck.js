import Navbar from "../components/Navbar";
import '../css/style.css';
import SportMenu from "../components/SportMenu";


const FoodTruck = () => {
    return (
        <div className="FoodTruck">
            <Navbar />
            <div className="pageTitleLeft">
                <p className="mb-1">푸드트럭</p>
                <p>메뉴안내</p>

            </div>
            <SportMenu />
        </div>
    )
}

export default FoodTruck;