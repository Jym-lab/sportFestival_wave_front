import { Link } from "react-router-dom";
import { images } from "../utils/images";
import { BiHomeAlt } from "react-icons/bi"
import { useState } from "react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const onTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };
    return (
        <div className="Navbar fixed top-0 flex justify-between items-center px-3 py-5">
            <div>
                <img className="w-[80px] md:max-w-[375px]" src={images.logo} alt="logo"/>
            </div>
            <div className="chineseFont text-2xl">&#27874;&#21205;</div>
            <div className="flex items-center space-x-2">
                {/* <Link to="/" onClick={onTop()}><BiHomeAlt size="30" color="white"/></Link> */}
                <div className={`mr-1 hamburger-menu ${isOpen ? 'active' : ''} cursor-pointer z-20`} onClick={() => setIsOpen(!isOpen)}>
                    <div className="ham-bar bar-top bg-white"/>
                    <div className="ham-bar bar-mid bg-white"/>
                    <div className="ham-bar bar-bottom bg-white"/>
                </div>
            </div>
        </div>
    )
}

export default Navbar;
