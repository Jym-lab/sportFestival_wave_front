import Navbar from "../components/Navbar"
import TimeTableCircle from "../components/TimetableCircle"
import timetableInfo from '../json/timetableInfo.json'

const TimeTable = () => {
    return (
        <div className="TimeTable">
            <Navbar />

            <div className="pageTitleLeft flex items-end">
                <div className="grow">
                    <p className="mb-1">영암체전</p>
                    <p>타임테이블</p>
                </div>

                <div className="NanumSquareR">
                    <TimeTableCircle content={'이벤트 게임 및 프로그램'} color={'orange'} />
                    <TimeTableCircle content={'총학생회 및 단과대학 주관 게임'} color={'green'} />
                    <TimeTableCircle content={'개막식, 폐막식'} color={'blue'} />
                    <TimeTableCircle content={'종목별 결승전'} color={'white'} />
                </div>
            </div>

            {/* 9월 25일 월요일  */}
            <div className="NanumSquareB">
                <div className="text-center mb-2 text-xl">9월 25일 월요일</div>

                <div className="flex justify-center">
                    <div className="flex flex-col grow text-end pr-6 pt-4 pb-12">
                        {timetableInfo
                            .filter((item) => item.day === "0925") // day가 "0925"인 요소만 필터링
                            .map((item) => (
                                <div key={item.id} className="mb-3 relative">
                                    <div className={`timetableCirclebigleft timetableCircle_${item.color} absolute`}></div>
                                    <div className="NanumSquareL text-sm">{item.time}</div>
                                    <div className="NanumSquareB text-md">{item.content}</div>
                                </div>
                            ))}
                    </div>
                    <div className="whitebar grow"></div>
                </div>
            </div>

            {/* 9월 25일 화요일  */}
            <div className="NanumSquareB">
                <div className="text-center mb-2 mt-10 text-xl">9월 26일 화요일</div>
                <div className="flex justify-center">
                    <div className="whitebarright grow"></div>
                    <div className="flex flex-col grow text-start pl-6 pt-4 pb-12">
                        {timetableInfo
                            .filter((item) => item.day === "0925") // day가 "0925"인 요소만 필터링
                            .map((item) => (
                                <div key={item.id} className="mb-3 relative">
                                    <div className={`timetableCirclebigright timetableCircle_${item.color} absolute`}></div>
                                    <div className="NanumSquareL text-sm">{item.time}</div>
                                    <div className="NanumSquareB text-md">{item.content}</div>
                                </div>
                            ))}
                    </div>
                </div>
            </div>

            <div className="py-8 px-6 NanumSquareR text-center text-sm break-keep">
                <hr className="my-5" />
                <span>본 타임테이블은 상황에 따라 유동적으로 변경될 수 있으며,
                    학우분들의 너그러운 양해 부탁드립니다.</span>
            </div>
        </div >
    )
}

export default TimeTable