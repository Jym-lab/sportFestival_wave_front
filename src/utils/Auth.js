import axios from 'axios';
import Navbar from '../components/Navbar';
import { useNavbar } from './navbar-context';
import { images } from './images';

export const Callback = () => {
    const { isOpen } = useNavbar();
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('token');
    const err_msg = urlParams.get('error');
    const userValid = async () => {
        const response = await authenticate(getToken()).get(`/user/valid`);
        return response.data
    }
    if (token) {
        localStorage.setItem('token', token);
        userValid()
            .then(res => {
                if (res.validation === true)
                    window.location.href = localStorage.getItem('last')
                else
                    window.location.href = '/mypage'
            })
            .catch(e => console.error(e))
    }
    console.log('에러메시지 출력 후 홈으로 돌아가는 버튼 출력');
    return (
        <>
            <Navbar />
            <div className={`min-h-screen flex flex-col justify-center items-center transition duration-500 ${isOpen ? 'opacity-0' : 'opacity-100'}`}>
                <p>{err_msg}</p>
                <button class="bg-white text-gray-700 font-semibold py-2 px-4 border border-gray-400 rounded shadow" onClick={() => window.location.href = '/'}>
                    홈으로
                </button>
            </div>
        </>
    );
};

export const getToken = () => localStorage.getItem('token');

export const authenticate = (token) => axios.create({
    baseURL: 'http://127.0.0.1:8000',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
    },
});


export const get_current_user = async () => {
    const response = await authenticate(getToken()).get(`/validation`);
    return response.data
}

const LoginBtn = () => {
    const Login = () => {
        localStorage.setItem('last', window.location.href)
        window.location.href = 'http://127.0.0.1:8000/login';
    }
    return (
        <button className="bg-white py-2 px-4 rounded border shadow" onClick={Login}>
            <div className="flex items-center">
                <img src={images.sungkyul} className='md:max-w-[375px] w-[45px] mr-3' />
                <span className='NanumSquareEB text-black text-xl'>Login with Sungkyul</span>
            </div>
        </button>
    );
};

export default LoginBtn