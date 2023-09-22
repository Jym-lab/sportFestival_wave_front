import Navbar from '../components/Navbar';
import '../css/Prediction.css';
import ScrollToTop from '../components/ScrollToTop';
import { useNavbar } from '../utils/navbar-context';
import LoginBtn, { authenticate, getToken } from '../utils/Auth';
import { useState } from 'react';


const MyPage = () => {
    const { isOpen } = useNavbar()
    const ACCESS_TOKEN = getToken();
    const [student_num, setStudent_num] = useState('');
    const [phone_num, setPhone_num] = useState('');

    const submitHandle = async (e) => {
        e.preventDefault();

        try{
            const formData = {
                student_num,
                phone_num,
            }

            const apiClient = authenticate(getToken());

            await apiClient.post(`/ggggg`, formData)

            setStudent_num('')
            setPhone_num('');
        } catch (e) {
            console.error(e)
            //에러 처리
        }
    }
    return (
        <div className='NanumSquareEB'>
            <Navbar />
            <div className={`transition duration-500 ${isOpen ? 'opacity-0' : 'opacity-100'}`}>
                <div className="pageTitleCenter">
                    <p className="mb-2 pt-10">마이페이지</p>
                </div>
                {ACCESS_TOKEN ?
                <>
                    <div className='NanumSquareR flex flex-col items-center text-center pt-6'>
                        <p className='text-lg'>경품 수령 시 필요한 인적정보를 입력해주세요</p>
                        <p className='text-sm pt-4'>인적정보 불일치 또는 미입력 시 경품 수령이 불가합니다.</p>
                        <form className="text-black px mt-14 w-10/12" onSubmit={submitHandle}>
                            <div className='flex text-center bg-white/[0.8] rounded-xl'>
                                <div className='px-5 py-3'>학 번</div>
                                <input type='text'
                                    className='bg-transparent text-center w-9/12' 
                                    placeholder='예시) 20231234' id="student_num" 
                                    value={student_num} 
                                    onChange={(e) => setStudent_num(e.target.value)} 
                                    required/>
                            </div>
                            <div className='flex text-center bg-white/[0.8] rounded-xl mt-6'>
                            <div className='px-4 py-3'>연락처</div>
                                <input type='text'
                                    className='bg-transparent text-center w-9/12'
                                    placeholder='예시) 01012345678' id="phone_num"
                                    value={phone_num} onChange={(e) => setPhone_num(e.target.value)}
                                    required/>
                            </div>
                            <button className='NanumSquareEB bg-white/[0.8] rounded-md mt-6 px-8 py-1' type="submit">확인</button>
                        </form>
                    </div>
                </>
                :
                <div className={`flex flex-col justify-center items-center`}>
                    <div className='text-lg text-center pt-10'>
                        <p>본 서비스는 로그인 후 이용가능한 서비스입니다.</p>
                    </div>
                    <div className='NanumSquareB text-base text-center my-12'>
                        <p>성결대학교 구글 계정으로 로그인이 가능합니다.</p>
                        <p className='pt-2'>하단 버튼을 누르고 로그인을 진행해 주세요.</p>
                    </div>
                    <LoginBtn/>
                </div>
                }
                <div className="last"></div>
                <ScrollToTop />
            </div >
        </div>
    )
}

export default MyPage