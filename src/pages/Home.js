import Navbar from "../components/Navbar";
import { images } from "../utils/images";
import { useNavbar } from "../utils/navbar-context";
import MainMenuRe from "../components/MainMenuRe";
import { useEffect, useRef } from "react";

const Home = () => {
    const { isOpen } = useNavbar();
    const guideRef = useRef();

    useEffect(() => {
        const handleClickOutsideModal = (event) => {
          if (event.target === guideRef.current) {
            guideRef.current.close();
          }
        };
    
        document.addEventListener('mousedown', handleClickOutsideModal);
    
        return () => {
          document.removeEventListener('mousedown', handleClickOutsideModal);
        };
      }, []);

    useEffect(()=> {
        guideRef.current.showModal();
    }, [])
    const hadleCloseModal = () => {
        guideRef.current.close()
    }

    return (
        <>
        <div className="about-background">
            <Navbar />
            <div className={`transition duration-500 ${isOpen ? 'opacity-0' : 'opacity-100'}`}>
                <div className={`min-h-screen flex flex-col items-center justify-center pt-14`}>
                    <div className="Bombaran21 text-xl fade-in" style={{ animationDelay: '1s' }}>뜨거운 가을, 우리 모두 하나된 울림</div>
                    <div className="Bombaran21 text-3xl pt-6 fade-in" style={{ animationDelay: '2.5s' }}>2023</div>
                    <div className="text-3xl py-6 fade-in" style={{ animationDelay: '2.8s' }}>
                        <span className="chineseFont">&#38728;&#23721;&#39636;&#20856;</span>
                        <span className="Bombaran21"> : 파동</span>
                    </div>
                    <hr className="w-64" />
                    <div className="text-8xl py-14 relative fade-in" style={{ animationDelay: '0.3s' }}>
                        <div className='chineseFont wave'>&#27874;:&#21205;</div>
                        <div className="chineseFont wave-outline absolute inset-0 flex items-center justify-center">&#27874;:&#21205;</div>
                    </div>
                    <hr className="w-64" />
                    <div className="Bombaran21 text-center text-xl py-6 leading-tight fade-in" style={{ animationDelay: '3s' }}>
                        2023년 9월 25일 <br />
                        - <br />
                        2023년 9월 26일
                    </div>
                    <img className="w-40 fade-in" src={images.seven_rings} alt="칠륜기" style={{ animationDelay: '3.5s' }} />
                </div>
                <MainMenuRe />
                <div>
                    <dialog className="NanumSquareB rounded-2xl px-8 py-4 bg-[#081434] text-white text-center" ref= {guideRef}>
                        <div className="NanumSquareEB">
                            <p>우천으로 인하여 2023 영암체전은</p>
                            <p>학생회관 4층 체육관에서 진행됩니다.</p>
                            <p>학우 여러분의 많은 관심 부탁드립니다.</p>
                        </div>
                        <div className="mt-4 ">
                            <button className="bg-[#0F2949] rounded-xl py-2 px-5" onClick={hadleCloseModal}>닫기</button>
                        </div>
                    </dialog>
                </div>
            </div>
        </div>
        </>
    )
}

export default Home;
