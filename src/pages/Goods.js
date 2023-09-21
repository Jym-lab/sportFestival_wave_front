import Navbar from "../components/Navbar";
import { images } from "../utils/images";
import ScrollToTop from "../components/ScrollToTop";
import { useNavbar } from "../utils/navbar-context";

const Goods = () => {
    const { isOpen } = useNavbar()
    return (
        <div className="Goods min-h-screen">
            <Navbar />
            <div className={`transition duration-500 ${isOpen ? 'opacity-0' : 'opacity-100'}`}>
                <div className="pageTitleLeft">
                    <p className="mb-1">2023</p>
                    <p>영암체전 <span className="goodsText">굿즈</span></p>
                </div>

                {/* 유료 */}
                <div className="flex flex-col items-center justify-center w-10/12 mx-auto NanumSquareEB mb-5">
                    <div className="goodsTitle py-3 text-center text-xl">유료 굿즈</div>
                    <div className="flex justify-evenly items-center py-6 NanumSquareB">
                        <img className='w-3/12' src={images.kiring} alt="리늉이 키링" />
                        <div>
                            <div className="text-lg">리늉이 키링</div>
                            <div className="text-xs">판매가격 : 1000원<span className="towelcontent">(선착순 판매600명)</span></div>
                        </div>
                    </div>
                </div>

                {/* 무료 */}
                <div className="flex flex-col items-center justify-center w-10/12 mx-auto NanumSquareEB mb-5">
                    <div className="goodsTitle py-3 text-center text-xl">무료 굿즈</div>
                    <div>
                        <div className="flex justify-start ml-10 items-center py-6 NanumSquareB">
                            <div className="w-3/12 shrink-0"><img className='' src={images.airStick} alt="에어방망이" /></div>
                            <div>
                                <div className="text-lg ml-8">에어방망이</div>
                            </div>
                        </div>
                        <div className="flex justify-start ml-10 items-center py-6 NanumSquareB">
                        <div className="w-3/12 shrink-0 "><img className='w-9/12 mx-auto' src={images.hairpin} alt="머리핀" /></div>
                            <div>
                                <div className="text-lg ml-8">머리핀</div>
                                <div className="towelcontent ml-8">선착순(500명)</div>
                            </div>
                        </div>
                        <div className="flex justify-start ml-10 items-center py-6 NanumSquareB">
                            <div className="w-3/12 shrink-0 "> <img className='' src={images.tatoo} alt="타투스티커" /></div>
                            <div>
                                <div className="text-lg ml-8">타투스티커</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-center justify-center w-10/12 mx-auto NanumSquareEB mb-3">
                    <div className="goodsTitle py-3 text-center text-xl">학생회비 납부자 혜택</div>
                    <div className="flex justify-evenly items-center py-6 NanumSquareB">
                        <img className='w-3/12' src={images.towel} alt="리늉이 키링" />
                        <div>
                            <div className="text-lg">스포츠 타올</div>
                            <div className="towelcontent">*단과대학별로 디자인이 상이하여<br/>응원 머플러로 사용 가능합니다.</div>
                        </div>
                    </div>
                </div>
                <div className="last"></div>
                <ScrollToTop />
            </div>
        </div>
    )
}

export default Goods;