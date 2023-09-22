import Navbar from "../components/Navbar";
import React from "react";
import { useNavbar } from "../utils/navbar-context";
import Cheersong from "../components/Cheersong";
import Cheeringslogan from './../components/Cheeringslogan';

const Cheers = () => {
    const { isOpen } = useNavbar();
    return (
        <div>
            <div className="Cheers min-h-screen">
                <Navbar />
                <div className={`transition duration-500 ${isOpen ? 'opacity-0' : 'opacity-100'}`}>
                    <Cheersong />
                    <Cheeringslogan />
                </div>
            </div >
        </div>
    );
};

export default Cheers;