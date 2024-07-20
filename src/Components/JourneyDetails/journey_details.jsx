import React from 'react';
import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

const JourneyDetails = () => {
    const storedUser = JSON.parse(localStorage.getItem('journey_form'));
    const navigate = useNavigate()
    const handleGoBackButton = async () => {
        navigate('/')
    }
    return (
        <div className='rounded-lg bg-[#FFFFFF] lg:w-[50%] md:w-[90%] w-full mx-auto p-5 mt-14' >
            <div className='flex flex-col justify-between space-y-2' >
                <div className='flex justify-between ' >
                    <p className='ml-2 font-poppins font-bold text-[24px] ' >Confimation</p>
                    <div className='flex items-center bg-[#FBBC05] rounded-lg cursor-pointer text-center p-1 space-x-1' onClick={handleGoBackButton}>
                        <IoMdArrowRoundBack className='text-[#3B5998]' />
                        <button className='text-[#3B5998] font-poppins font-bold text-[12px]'>
                            Go Back
                        </button>
                    </div>
                </div>
                <div className='font-poppins bg-[#FFF0DA] w-full p-5 rounded-lg space-y-2' >
                    <div className='flex justify-between' >
                        <p>Destination:</p>
                        <p>{storedUser.destination} </p>
                    </div>
                    <div className='flex justify-between' >
                        <p>Arrival:</p>
                        <p>{storedUser.arrival} </p>
                    </div>
                    <div className='flex justify-between' >
                        <p>Trip Type</p>
                        <p>{storedUser.trip_type} </p>
                    </div>
                    <div className='flex justify-between' >
                        <p>Number of Passangers:</p>
                        <p>{storedUser.passengers_count} </p>
                    </div>
                    <div className='flex justify-between' >
                        <p>Number of Luggages:</p>
                        <p>{storedUser.luggage_count} </p>
                    </div>
                    <div className='flex justify-between' >
                        <p>Car Type:</p>
                        <p>Executive </p>
                    </div>
                    <div className='flex justify-between' >
                        <p>Car Name:</p>
                        <p>Mercedes </p>
                    </div>
                    <div className='flex justify-between' >
                        <p>Total Price:</p>
                        <p>34 US$ </p>
                    </div>
                </div>
                {/* <div className='' >
                    <div className='bg-[#FBBC05] rounded-lg text-center cursor-pointer p-2'  >
                        <button className='text-[#3B5998] font-poppins font-bold text-[14px] leading-[24px] tracking-[1px]' >
                            EDIT
                        </button>
                    </div>
                </div> */}
            </div>

            <div className='flex justify-center' >
                <div className='bg-[#FBBC05] rounded-lg text-center cursor-pointer p-2 mt-6 w-[50%]'  >
                    <button className='text-[#3B5998] font-poppins font-bold text-[14px] leading-[24px] tracking-[1px]' >
                        PROCEED TO CHECKOUT
                    </button>
                </div>
            </div>
        </div>
    );
}

export default JourneyDetails;
