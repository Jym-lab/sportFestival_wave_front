import { useNavigate } from "react-router-dom";

const MainMenu = () => {
    const Navigate = useNavigate();

    return (
        <>
            <div className="h-screen flex flex-col items-center justify-center main-background">
                <div className="main-menu-box-1 my-8">
                    <div className="NanumSquareEB">
                        <div className="text-5xl ms-6 mt-8 leading-tight">결승전<br />승부예측<br />경품안내</div>
                        <div className="text-2xl ms-6 mt-4">바로 보러가기▶</div>
                    </div>
                </div>
                {/* <div className="main-menu-box-2 my-8">
                    <div className="NanumSquareEB">
                        <div className="text-5xl ms-6 mt-8 leading-tight">2023<br />영암체전<br />굿즈</div>
                        <div className="text-2xl ms-6 mt-4">바로 보러가기▶</div>
                    </div>
                </div>
                <div className="main-menu-box-3 my-8">
                    <div className="NanumSquareEB">
                        <div className="text-5xl ms-6 mt-8 leading-tight">가을밤의<br />시네마</div>
                        <div className="text-4xl ms-6 mt-4">with. <span className="text-red-600">롯데시네마</span></div>
                        <div className="text-2xl ms-6 mt-4">바로 보러가기▶</div>
                    </div>
                </div>
                <div className="main-menu-box-4 my-8">
                    <div className="NanumSquareEB">
                        <div className="text-5xl ms-6 mt-8 leading-tight">영암체전<br />응원전</div>
                        <div className="text-2xl ms-6 mt-4">바로 보러가기▶</div>
                    </div>
                </div> */}

                <div className="NanumSquareEB text-black ">
                    <div className="main-menu-button my-3 flex items-center justify-between px-3">
                        <div className="text-lg flex items-center">학과별 결승전 승부예측 응모</div>
                        <div className="text-sm main-menu-sub-button-1 text-center flex items-center justify-center">
                            <button onClick={() => { Navigate('/') }}>바로가기</button>
                        </div>
                    </div>
                    <div className="main-menu-button my-3 flex items-center justify-between px-3">
                        <div className="text-lg flex items-center">푸드트럭 메뉴 한 곳에 모았.zip</div>
                        <div className="text-sm main-menu-sub-button-2 text-center flex items-center justify-center">
                            <button onClick={() => { Navigate('/foodtruck') }}>바로가기</button>
                        </div>
                    </div>
                    <div className="main-menu-button my-3 flex items-center justify-between px-3">
                        <div className="text-lg flex items-center">2023 영암체전 부스 배치도</div>
                        <div className="text-sm main-menu-sub-button-3 text-center flex items-center justify-center">
                            <button onClick={() => { Navigate('/') }}>바로가기</button>
                        </div>
                    </div>
                    <div className="main-menu-button my-3 flex items-center justify-between px-3">
                        <div className="text-lg flex items-center">영암체전 타임테이블</div>
                        <div className="text-sm main-menu-sub-button-4 text-center flex items-center justify-center">
                            <button onClick={() => { Navigate('/') }}>바로가기</button>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default MainMenu;
