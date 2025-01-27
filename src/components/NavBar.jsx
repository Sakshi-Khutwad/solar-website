import React, { useEffect, useState } from "react";
import { Link } from 'react-scroll';
import { FaTimes } from 'react-icons/fa';
import { CiMenuFries } from 'react-icons/ci';
import logo from '../assets/logo_cropped.png'
import AOS from 'aos'
import 'aos/dist/aos.css'

function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    const handleClick = () => setIsOpen(!isOpen);

    useEffect(() => {
        AOS.init({duration: 2000})
    }, [])

    const content = (
        <div className="md:hidden bg-black absolute top-20 left-0 w-full">
            <ul className="flex flex-col items-center">
                <Link to="Home" smooth={true}>
                    <li className="hover:text-orange-700 text-slate-50 text-xl cursor-pointer font-normal w-full text-center py-2">
                        Home
                    </li>
                </Link>
                <Link to="Services" smooth={true}>
                    <li className="hover:text-orange-700 text-slate-50 text-xl cursor-pointer font-normal w-full text-center py-2">
                        Our Services
                    </li>
                </Link>
                <Link to="About" smooth={true}>
                    <li className="hover:text-orange-700 text-slate-50 text-xl cursor-pointer font-normal w-full text-center py-2">
                        About Us
                    </li>
                </Link>
                <Link to="Contact" smooth={true}>
                    <li className="hover:text-orange-700 text-slate-50 text-xl cursor-pointer font-normal w-full text-center py-2">
                        Contact
                    </li>
                </Link>
            </ul>
        </div>
    );

    return (
        <nav>

            <div className="flex my-4">

                <div className="flex flex-1 h-8 mx-6 md:h-14">
                    <img data-aos="fade-right" src={logo} alt="Aditya Solar Logo"/>
                </div>

                <div className="hidden md:flex mx-6 my-2">

                    <div className="flex md:space-x-16">

                        <div data-aos="fade-left">
                            <Link to="Home" smooth={true}>
                                <span className="transition duration-700 ease-in-out border-b border-transparent hover:border-orange-700 hover:text-orange-700 text-slate-50 text-xl cursor-pointer font-normal">
                                    Home
                                </span>
                            </Link>
                        </div>

                        <div data-aos="fade-left">
                            <Link to="Services" smooth={true}>
                                <span className="transition duration-700 ease-in-out border-b border-transparent hover:border-orange-700 hover:text-orange-700 text-slate-50 text-xl cursor-pointer font-normal">
                                    Our Services
                                </span>
                            </Link>
                        </div>

                        <div data-aos="fade-left">
                            <Link to="About" smooth={true}>
                                <span className="transition duration-700 ease-in-out border-b border-transparent hover:border-orange-700 hover:text-orange-700 text-slate-50 text-xl cursor-pointer font-normal">
                                    About Us
                                </span>
                            </Link>
                        </div>
                        <div data-aos="fade-left">
                            <Link to="Contact Us" smooth={true}>
                                <span className="transition duration-700 ease-in-out border-b border-transparent hover:border-orange-700 hover:text-orange-700 text-slate-50 text-xl cursor-pointer font-normal">
                                    Contact
                                </span>
                            </Link>
                        </div>

                    </div>
                </div>

                <div className="md:hidden mx-4">
                    <button onClick={handleClick} className="text-white">
                        {isOpen ? <FaTimes /> : <CiMenuFries />}
                        {isOpen && content}
                    </button>
                </div>
            </div>
        </nav >
    );
}

export default NavBar
