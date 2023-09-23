import Navbar from "../components/Navbar";
import { images } from "../utils/images";
import ScrollToTop from "../components/ScrollToTop";
import { useNavbar } from "../utils/navbar-context";

const Cinema = () => {
    const { isOpen } = useNavbar()
    return (
        <div className="Cinema min-h-screen">
            <Navbar />
            <div className={`transition duration-500 ${isOpen ? 'opacity-0' : 'opacity-100'}`}>
                <div className="pageTitleCenter">
                    <p className="mb-2 tracking-in-contract">가을밤의</p>
                    <p className="tracking-in-contract">시네마</p>
                </div>

                <div className="NanumSquareL text-center cinemacontent">
                    <p className="mb-2">Q : '가을밤의 시네마'란?</p>
                    <p className="mb-2">A : 총학생회 주관행사 <span className="NanumSquareB">‘우리가 만드는 행사’ 대상작으로 선정된</span><br />
                        조유정 학우님의 기획안을 바탕으로 제작된 프로그램입니다.
                    </p>
                    <p>2023 영암체전 본식 첫째날,
                        <br /><span className="NanumSquareB">9월 25일 18시에 기념관 대강당</span>에서 진행됩니다.
                    </p>
                </div>

                {/* 포스터 */}
                <div>
                    <div className="flex items-center justify-around w-11/12 mx-auto poster my-6 p-5">
                        <div className="w-7/12">
                            <img src={images.poster} alt="포스터" className="" />
                            <p className="NanumSquareL cinemacontent1 text-center mt-2 break-keep">본 상영작은 수요조사 결과를 통하여 선정되었음을 알려드립니다.</p>
                        </div>
                        <div className=" ml-3">
                            <div className="NanumSquareEB text-xl mb-1">상영작</div>

                            <p className="mb-1">
                                <p className="NanumSquareB cinemacontent -mb-8">너의 결혼식</p><br />
                                <span className="NanumSquareL cinemacontent1">on Your wedding day</span>
                            </p>
                            <p className="mb-1">
                                <p className="NanumSquareB cinemacontent -mb-8">개봉</p><br />
                                <span className="NanumSquareL cinemacontent1">2018.08.22.</span>
                            </p>
                            <p className="mb-1">
                                <p className="NanumSquareB cinemacontent -mb-8">등급</p><br />
                                <span className="NanumSquareL cinemacontent1">12세 관람가</span>
                            </p>
                            <p className="mb-1">
                                <p className="NanumSquareB cinemacontent -mb-8">장르</p><br />
                                <span className="NanumSquareL cinemacontent1">멜로/로맨스</span>
                            </p>
                            <p className="mb-1">
                                <p className="NanumSquareB cinemacontent -mb-8">국가</p><br />
                                <span className="NanumSquareL cinemacontent1">대한민국</span>
                            </p>
                            <p className="mb-1">
                                <p className="NanumSquareB cinemacontent -mb-8">러닝타임</p><br />
                                <span className="NanumSquareL cinemacontent1">110분</span>
                            </p><p className="mb-1">
                                <p className="NanumSquareB cinemacontent -mb-8">배급</p><br />
                                <span className="NanumSquareL cinemacontent1">플러스엠 엔터테인먼트</span>
                            </p>


                        </div>
                    </div>
                </div>

                {/* 하단 */}
                <div className="flex justify-around items-center w-10/12 mx-auto mt-10">
                    <div className="w-1/2 ">
                        <p className="NanumSquareL cinemacontent1 break-keep">
                            가을밤의 시네마는<br />
                            학생회비 납부 여부와 상관없이 <br />
                            모든 학우분들께서 <br />관람하실 수 있습니다.
                            <br /><br />
                            가을밤의 시네마를 <br />
                            찾아주시는 학우분들께는
                            <br />팝콘과 음료과 제공될 예정입니다.<br />
                            *음료수 선착순 50개
                        </p>
                    </div>
                    <div className="w-1/2 ml-3"><img src={images.popcon} alt="팝콘" /></div>
                </div>

                <div className="last"></div>
                <ScrollToTop />
            </div>
        </div>
    )
}

export default Cinema;