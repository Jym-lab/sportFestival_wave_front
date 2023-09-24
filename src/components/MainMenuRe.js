import SingleSlider from "./SingleSlider";
import Mainbottom from "./Mainbottom";

const MainMenuRe = () => {
    return (
        <div className="MainMenuRe min-h-screen  flex flex-col justify-center">
            {/* <SportMenu main={true} /> */}
            <div>
                <SingleSlider />
                <div>
                    <Mainbottom title={'결승전 승부예측 응모'} color={'red'} url={'/matchprediction'} />
                    <Mainbottom title={'2023 영암체전 부스 배치도'} color={'blue'} url={'/boothlocation'} />
                    <Mainbottom title={'2023 영암체전 타임테이블'} color={'yellow'} url={'/timetable'} />
                    <Mainbottom title={'푸드트럭 메뉴 한 곳에 모았.zip'} color={'green'} url={'/foodtruck'} />
                </div>
            </div>
        </div>
    )
}

export default MainMenuRe;
