import Navbar from "../components/Navbar"
import { images } from "../utils/images";
import { useNavbar } from "../utils/navbar-context"

const BoothLocation = () => {
    const { isOpen } = useNavbar();
    return (
        <div className="BoothLocation min-h-screen pb-10">
            <Navbar />
            <div className={`transition duration-500 ${isOpen ? 'opacity-0' : 'opacity-100'}`}>
                <div className="pageTitleLeft">
                    <p className="mb-1">영암체전</p>
                    <p className="mb-10">부스배치도</p>
                </div>
                <div className="w-11/12 mx-auto flex flex-col items-center justify-between last">
                <img src={images.boothAll} alt="전체부스지도" />
                <img src={images.locateMenu} alt="각부스위치" className="mt-10" />
            </div>
            </div>
        </div>
    )
}

export default BoothLocation