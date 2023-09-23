import Navbar from "../components/Navbar";
import '../css/style.css';
import { useNavbar } from "../utils/navbar-context";
import ScrollToTop from "../components/ScrollToTop";


const FoodTruck = () => {
    const { isOpen } = useNavbar();
    return (
        <div className="FoodTruck about-background">
            <Navbar />
            <div className={`transition duration-500 ${isOpen ? 'opacity-0' : 'opacity-100'}`}>
                <div className={"pageTitleLeft "}>
                    <p className="mb-1">푸드트럭</p>
                    <p>메뉴안내</p>
                </div>
                <div className="flex flex-col justify-center items-center pb-10">
                    <div className="text-center text-lg NanumSquareEB mb-1">꺼리분식</div>
                    <div className="text-lg text-black NanumSquareEB flex flex-col foodmenu-background rounded-2xl bg-gray-200 w-80 py-3 px-4">
                        <div>순대 - 5,000원</div>
                        <div>떡볶이 - 5,000원</div>
                        <div>오뎅 - 3,000원</div>
                    </div>
                    <div className="text-center text-lg NanumSquareEB mt-5 mb-1">꼬지천국</div>
                    <div className="text-lg text-black NanumSquareEB flex flex-col foodmenu-background rounded-2xl bg-gray-200 w-80 py-3 px-4">
                        <div>타코야끼(8pcs)</div>
                        <div>오리지날 - 5,000원</div>
                        <div>바베큐.치즈맛.매운맛 - 6,000원</div>
                    </div>
                    <div className="text-center text-lg NanumSquareEB mt-5 mb-1">파파</div>
                    <div className="text-lg text-black NanumSquareEB flex flex-col foodmenu-background rounded-2xl bg-gray-200 w-80 py-3 px-4">
                        <div>닭꼬치 - 5,000원</div>
                        <div>염통꼬치 - 2개 5,000원</div>
                    </div>
                    <div className="text-center text-lg NanumSquareEB mt-5 mb-1">모니카</div>
                    <div className="text-lg text-black NanumSquareEB flex flex-col foodmenu-background rounded-2xl bg-gray-200 w-80 py-3 px-4">
                        <div>스테이크 - 10,000원</div>
                        <div>스테이크 덮밥 - 10,000원</div>
                    </div>
                    <div className="text-center text-lg NanumSquareEB mt-5 mb-1">온</div>
                    <div className="text-lg text-black NanumSquareEB flex flex-col foodmenu-background rounded-2xl bg-gray-200 w-80 py-3 px-4">
                        <div>닭강정</div>
                        <div>달콤 - 중10,000원, 대 15,000원</div>
                        <div>매콤 - 중11,000원, 대 16,000원</div>
                        <div>어니언 - 중11,000원, 대 16,000원</div>
                        <div>치즈퐁당 - 중11,000원, 대 16,000원</div>
                    </div>
                    <div className="text-center text-lg NanumSquareEB mt-5 mb-1">비바</div>
                    <div className="text-lg text-black NanumSquareEB flex flex-col foodmenu-background rounded-2xl bg-gray-200 w-80 py-3 px-4">
                        <div>탕후루</div>
                        <div>샤인머스캣5알 - 5,000원</div>
                        <div>딸기6알 - 5,000원</div>
                        <div>(2개 구매시 9,000원)</div>
                        <br />
                        <div>회오리감자 - 4,000원</div>
                        <div>소떡소떡 - 3,500원</div>
                    </div>
                    <div className="text-center text-lg NanumSquareEB mt-5 mb-1">미소</div>
                    <div className="text-lg text-black NanumSquareEB flex flex-col foodmenu-background rounded-2xl bg-gray-200 w-80 py-3 px-4">
                        <div>에그와플&아이스크림 - 6,000원</div>
                        <div>에그와플&생크림 - 6,000원</div>
                        <div>컵.소프트아이스크림 - 3,000원</div>
                        <div>컵토핑소프트아이스크림 - 4,000원</div>
                    </div>
                    <div className="text-center text-lg NanumSquareEB mt-5 mb-1">원츄추러스</div>
                    <div className="text-lg text-black NanumSquareEB flex flex-col foodmenu-background rounded-2xl bg-gray-200 w-80 py-3 px-4">
                        <div>츄러스 1개 - 4,000원</div>
                        <div>츄러스 3개 - 10,000원</div>
                    </div>
                    <div className="text-center text-lg NanumSquareEB mt-5 mb-1">러브디아</div>
                    <div className="text-lg text-black NanumSquareEB flex flex-col foodmenu-background rounded-2xl bg-gray-200 w-80 py-3 px-4">
                        <div>소고기불초밥(8pcs) - 10,000원</div>
                    </div>
                    <div className="text-center text-lg NanumSquareEB mt-5 mb-1">디아이</div>
                    <div className="text-lg text-black NanumSquareEB flex flex-col foodmenu-background rounded-2xl bg-gray-200 w-80 py-3 px-4">
                        <div>아메리카노 - 3,000원</div>
                        <div>헤이즐넛아메리카노 - 3,500원</div>
                        <div>카페라떼 - 4,000원</div>
                        <div>바닐라라떼 - 4,500원</div>
                        <div>헤이즐넛라떼 - 4,500원</div>
                        <div>카페모카 - 4,500원</div>
                        <div>연유라떼 - 4,500원</div>
                        <div>초코라떼 - 4,500원</div>
                        <div>딸기라떼 - 4,500원</div>
                        <div>복숭아 아이스티 - 3,000원</div>
                        <div>레몬에이드 - 4,000원</div>
                        <div>자몽에이드 - 4,000원</div>
                        <div>청귤에이드 - 5,000원</div>
                        <div>한라봉에이드 - 5,000원</div>
                        <div>샤인머스켓에이드 - 5,000원</div>
                    </div>
                </div>

            </div>
            <ScrollToTop />
            <div className="last"></div>
        </div>
    )
}

export default FoodTruck;