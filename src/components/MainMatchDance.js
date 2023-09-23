import { images } from "../utils/images";
import { IoLocationSharp } from "react-icons/io5";
import { AiOutlineCalendar } from "react-icons/ai";

const MainMatchDance = () => {
    return (
        <div>
            <div className='text-center flex flex-col'>
                <div className='NanumGothicEB text-center my-8 text-3xl'>댄스</div>

                <p className="NanumGothicB text-sm">심사위원의 심사를 통해<br /> 경기 종료 후 점수가 등록됩니다.</p>
                <p className="danceContent mt-2 mb-8">안무구성 (40점 만점) 댄스실력 (50점 만점)<br /> 통일성 (10점 만점) = 총점(100점 만점)</p>

                <div className='w-10/12 mx-auto flex justify-around items-center text-center'>
                    <div className="">
                        <div className='team p-5  mx-2'>
                            <div>
                                <img className='w-12' src={images.문선} alt="문선" />

                                <p className='NanumGothicEB text-black pt-3 flex justify-center items-center'>문선</p>
                            </div>
                        </div>
                        <div className="danceScore NanumGothicB text-md mt-3">
                            <p>점수 : 00점</p>
                        </div>
                    </div>
                    <p className='NanumGothicB text-xl'>VS</p>
                    <div className="">
                        <div className='team p-5 mx-2'>
                            <div>
                                <img className='w-12' src={images.체교} alt="체교" />

                                <p className='NanumGothicEB text-black pt-3 flex justify-center items-center'>체교</p>
                            </div>
                        </div>
                        <div className="danceScore NanumGothicB text-md mt-3">
                            <p>점수 : 00점</p>
                        </div>
                    </div>
                    <p className='NanumGothicB text-xl'>VS</p>
                    <div className="">
                        <div className='team p-5  mx-2'>
                            <div>
                                <img className='w-12' src={images.중문} alt="중문" />

                                <p className='NanumGothicEB text-black pt-3 flex justify-center items-center'>중문</p>
                            </div>
                        </div>
                        <div className="danceScore NanumGothicB text-md mt-3">
                            <p>점수 : 00점</p>
                        </div>
                    </div>
                </div>
                <div className='w-8/12 mx-auto flex justify-evenly items-center text-center mt-5'>
                    <div className="danceBottom">
                        <div className='team p-5 mx-1'>
                            <div>
                                <img className='w-12' src={images.신학} alt="신학" />

                                <p className='NanumGothicEB text-black pt-3 flex justify-center items-center'>신학</p>
                            </div>

                        </div>
                        <div className="danceScore NanumGothicB text-md mt-3">
                            <p className="">점수 : 00점</p>
                        </div>
                    </div>
                    <p className='NanumGothicB text-xl'>VS</p>
                    <div className="danceBottom">
                        <div className='team p-5 mx-1'>
                            <div>
                                <img className='w-12' src={images.뷰티} alt="뷰티" />
                                <p className='NanumGothicEB text-black pt-3 flex justify-center items-center'>뷰티</p>
                            </div>
                        </div>
                        <div className="danceScore NanumGothicB text-md mt-3">
                            <p>점수 : 00점</p>
                        </div>
                    </div>

                </div>


                <div className='py-8 NanumGothicB text-lg w-8/12 mx-auto'>
                    <div className='flex items-center justify-evenly'>
                        <IoLocationSharp className='mr-1' />
                        위치 : 성결대학교 운동장
                    </div>
                    <div className='flex items-center justify-evenly'>
                        <AiOutlineCalendar className='mr-1' />
                        일정 : 9월 25일 화 15:20
                    </div>
                </div>
            </div>
        </div >
    )
}

export default MainMatchDance;