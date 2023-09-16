import Navbar from "../components/Navbar";
import { images } from "../utils/images";

const Home = () => {
    return (
        <>  
        <Navbar/>
        <div className="h-screen flex flex-col items-center justify-center">
            <div className="Bombaran21 text-xl">뜨거운 가을, 우리 모두 하나된 울림</div>
            <div className="Bombaran21 text-3xl pt-10">2023</div>
            <div className="text-3xl py-10">
                <span className="chineseFont">&#38728;&#23721;&#39636;&#20856;</span>
                <span className="Bombaran21"> : 파동</span>
            </div>
            <hr className="w-64" />
            <div className="text-8xl py-14 relative">
                <div className='chineseFont wave'>&#27874;:&#21205;</div>
                <div class="chineseFont wave-outline absolute inset-0 flex items-center justify-center">&#27874;:&#21205;</div>
            </div>
            <hr className="w-64" />
            <div className="Bombaran21 text-center text-xl py-10 leading-tight">
                2023년 9월 25일 <br />
                - <br />
                2023년 9월 26일
            </div>
            <img className="w-40" src={images.seven_rings} alt="칠륜기" />
        </div>
        </>
    )
}

export default Home;
