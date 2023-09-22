import Navbar from "../components/Navbar";
import { images } from "../utils/images";
import ScrollToTop from "../components/ScrollToTop";
import { useNavbar } from "../utils/navbar-context";
import { FaInstagram } from "react-icons/fa"
import Person0 from "../components/Person0";
import Lottie from 'lottie-react';
import animationData from '../json/4934-hand-shake.json';

const About = () => {
    const { isOpen } = useNavbar();
    return (
        <>
            <Navbar />
            <div className={`transition duration-500 ${isOpen ? 'opacity-0' : 'opacity-100'}`}>
                <div className="NanumSquareEB pageTitleCenter">만든이들</div>
                <div className="flex items-center justify-evenly mt-14">
                    <div className="about-likelion w-4/12 flex flex-col items-center justify-center">
                        <img className="w-2/4" src={images.likelion_logo} alt="멋쟁이사자처럼 로고" />
                        <div className="text-sm NanumSquareR text-center mt-3">성결대학교<br />멋쟁이사자처럼 11기</div>
                    </div>
                    <Lottie className="absolute" animationData={animationData} style={{width: '200px', height: '200px'}}/>
                    <div className="about-renew w-4/12 flex flex-col items-center justify-center">
                        <img className="w-3/5" src={images.renew_logo} alt="리뉴 로고" />
                        <div className="text-sm NanumSquareR text-center mt-3">RE:NEW<br />총학생회</div>
                    </div>
                </div>
                <div className="NanumSquareR text-xs text-center py-16">
                    성결대학교 제39대 RE:NEW 총학생회에서 축제를 기획하였습니다.<br />
                    성결대학교 멋쟁이사자처럼 대학 11기에서 웹 사이트를 제작하였습니다.
                </div>

                <div className="about-team NanumSquareR">
                    
                    <div className="team-likelion flex flex-col justify-center items-center text-center">
                        <img className="w-2/12 mx-auto" src={ images.likelion_logo } alt="멋쟁이사자처럼 로고" />
                        <div className="text-xs mt-3">성결대학교 멋쟁이사자처럼 11기</div>
                        <a className="flex items-center text-xs mb-3" href="https://www.instagram.com/likelion_sku/" target='_blank' rel="noopener noreferrer"><FaInstagram className="me-1"/> likelion_sku</a>
                        <div className="gridpeople">
                            <Person0 id={1}/>
                            <Person0 id={2}/>
                            <Person0 id={3}/>
                            <Person0 id={4}/>
                            <Person0 id={5}/>
                            <Person0 id={6}/>
                        </div>
                    </div>
                    
                    <div className="team-renew flex flex-col justify-center items-center text-center mt-20">
                        <img className="w-3/12 mx-auto" src={ images.renew_logo } alt="리뉴 로고" />
                        <div className="text-xs mt-3">RE:NEW 총학생회</div>
                        <a className="flex items-center text-xs mb-3" href="https://www.instagram.com/sku_39th_renew/" target='_blank' rel="noopener noreferrer"><FaInstagram className="me-1"/> sku_39th_renew</a>
                        <div className="gridpeople">
                            <Person0 id={7}/>
                        </div>
                    </div>
                </div>
                <img className="w-40 mx-auto py-20" src={images.seven_rings} alt="칠륜기" />
                <ScrollToTop />
            </div>
        </>
    )
}

export default About;