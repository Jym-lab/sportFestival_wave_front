import Navbar from "../components/Navbar";
import '../css/style.css';

const FoodTruck = () => {
    return (
        <div className="FoodTruck">
            <Navbar />
            <div className="pageTitleLeft">
                <p className="mb-1">푸드트럭</p>
                <p>메뉴안내</p>
            </div>
        </div>
    )
}

export default FoodTruck;