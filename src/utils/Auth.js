import React, { useEffect } from 'react'
import Navbar from '../components/Navbar';
import { useNavbar } from './navbar-context';

export const Callback = () => {
    const { isOpen } = useNavbar();
    const urlParams = new URLSearchParams(window.location.search);

    const token = urlParams.get('token');
    const err_msg = urlParams.get('error');
        if (token) {
            localStorage.setItem('token', token);
            window.location.href = '/'
        }
        console.log('에러메시지 출력 후 홈으로 돌아가는 버튼 출력');
        return (
            <>
                <Navbar/>
                <div className={`min-h-screen flex flex-col justify-center items-center transition duration-500 ${isOpen ? 'opacity-0' : 'opacity-100'}`}>
                    <p>{err_msg}</p>
                    <button class="bg-white text-gray-700 font-semibold py-2 px-4 border border-gray-400 rounded shadow" onClick={()=> window.location.href = '/'}>
                        홈으로
                    </button>
                </div>
            </>
        );
    };

const Auth = () => {
    const Login = () => {
        window.location.href = 'http://127.0.0.1:8000/login';
    }
    return (
        <button className="bg-white text-gray-700 font-semibold py-2 px-4 border border-gray-400 rounded shadow" onClick={Login}>
            <div className="flex items-center">
                Sign in with Google
            </div>
        </button>
      );
};

export default Auth