import React, { useEffect } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBank } from '@fortawesome/free-solid-svg-icons'
import { faHandsHelping } from '@fortawesome/free-solid-svg-icons'
import { faUserFriends } from '@fortawesome/free-solid-svg-icons'
import loan from '../assets/loan.jpg'
import AOS from 'aos'
import 'aos/dist/aos.css'
function Services() {

    useEffect(() => {
        AOS.init({duration: 1000})
    }, [])

    return (
        <>
            <div className="w-full flex flex-col m-10">
                <div>
                <h1 className="text-3xl md:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-green-500 font-extrabold">
                    Services
                </h1>
                </div>
                <div className="flex flex-col md:flex-row flex-wrap md:flex-nowrap items-center justify-center m-10">
                    
                    <div data-aos="zoom-in" className="group md:h-auto md:w-auto border text-white border-cyan-50 m-8 rounded-3xl">
                        
                        <div className="group-hover:opacity-30">
                            <img className="rounded-t-3xl" src={loan} alt="loan approval"/>   
                        </div>

                        <div className="flex flex-row my-8">
                            <FontAwesomeIcon className="mx-5" icon={faBank} size="3x" />
                            <h1 className="text-2xl font-semibold mt-3">Quick Loan Approvals</h1>
                        </div>

                        <p className="left-0 right-0 top-0 text-2xl font-medium bg-gray-600 bg-opacity-60 p-8 rounded-t-3xl absolute z-10 opacity-0 transform -translate-y-2 group-hover:translate-y-0 group-hover:opacity-100 transition-transform duration-1000">
                            We understand the urgency of going solar!
                            That’s why we ensure loan approvals within just one day,
                            making the transition to solar energy seamless and stress-free.
                        </p>
                    </div>

                    <div data-aos="zoom-in" className="group md:h-auto md:w-auto border text-white border-cyan-50 m-8 rounded-3xl">
                        
                        <div className="group-hover:opacity-30">
                            <img className="rounded-t-3xl" src={loan} alt="loan approval"/>   
                        </div>
                        
                        <div className="flex flex-row my-8">
                            <FontAwesomeIcon className="mx-5" icon={faBank} size="3x" />
                            <h1 className="text-2xl font-semibold mt-3">Flexible Loan Tenure</h1>
                        </div>
                        <p className="left-0 right-0 top-0 text-2xl font-medium bg-gray-600 bg-opacity-60 p-8 rounded-t-3xl absolute z-10 opacity-0 transform -translate-y-2 group-hover:translate-y-0 group-hover:opacity-100 transition-transform duration-1000">
                            Our financial solutions are designed to fit your budget.
                            Enjoy a loan tenure of up to 5 years, allowing you to repay
                            at your convenience while enjoying the benefits of solar energy.
                        </p>
                    </div>

                    <div data-aos="zoom-in" className="group md:h-auto md:w-auto border text-white border-cyan-50 m-8 rounded-3xl">
                        
                        <div className="group-hover:opacity-30">
                            <img className="rounded-t-3xl" src={loan} alt="loan approval"/>   
                        </div>

                        <div className="flex flex-row my-8">
                            <FontAwesomeIcon className="mx-5" icon={faHandsHelping} size="3x" />
                            <h1 className="text-2xl font-semibold mt-3">Round-the-Clock Support</h1>
                        </div>
                        <p className="left-0 right-0 top-0 text-2xl font-medium bg-gray-600 bg-opacity-60 p-8 rounded-t-3xl absolute z-10 opacity-0 transform -translate-y-2 group-hover:translate-y-0 group-hover:opacity-100 transition-transform duration-1000">
                            Your satisfaction is our priority. Our 24/7 support team is always available to assist you,
                            whether you have a query or need technical help.
                        </p>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-center">
                    
                    <div data-aos="zoom-in" className="group md:h-auto md:w-1/3 border text-white border-cyan-50 m-8 rounded-3xl">
                        
                        <div className="group-hover:opacity-30">
                            <img className="rounded-t-3xl" src={loan} alt="loan approval"/>   
                        </div>
                        
                        <div className="flex flex-row my-8">
                            <FontAwesomeIcon className="mx-5" icon={faUserFriends} size="3x" />
                            <h1 className="text-2xl font-semibold mt-3">Trusted and Quality Partnerships</h1>
                        </div>
                        <p className="left-0 right-0 top-0 text-2xl font-medium bg-gray-600 bg-opacity-60 p-8 rounded-t-3xl absolute z-10 opacity-0 transform -translate-y-2 group-hover:translate-y-0 group-hover:opacity-100 transition-transform duration-1000">
                            Partnering with the best in the industry, we bring you high-quality solar solutions.
                            Our partners include Adani, Tata, Vikram, and NovaSys, ensuring top-notch products and services.
                        </p>
                    </div>

                    <div data-aos="zoom-in" className="group md:h-auto md:w-1/3 border text-white border-cyan-50 m-8 rounded-3xl">
                        
                        <div className="group-hover:opacity-30">
                            <img className="rounded-t-3xl" src={loan} alt="loan approval"/>   
                        </div>
                        
                        <div className="flex flex-row my-8">
                            <FontAwesomeIcon className="mx-5" icon={faUserFriends} size="3x" />
                            <h1 className="text-2xl font-semibold mt-3">Fast and Reliable Service</h1>
                        </div>
                        <p className="left-0 right-0 top-0 text-2xl font-medium bg-gray-600 bg-opacity-60 p-8 rounded-t-3xl absolute z-10 opacity-0 transform -translate-y-2 group-hover:translate-y-0 group-hover:opacity-100 transition-transform duration-1000">
                            We pride ourselves on our efficiency. From consultation to installation,
                            our team ensures fast and reliable service so you can start saving energy
                            as soon as possible.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Services