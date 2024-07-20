import React from 'react';
import { useNavigate } from 'react-router-dom';
import { GoPeople } from "react-icons/go";
import { HiOutlineArrowsUpDown } from "react-icons/hi2";
import Car from "../../assets/images/Car.svg"
import './available_cars.css'

const AvailableCars = () => {
    const navigate = useNavigate()
    const handleSubmit = async (e) => {
        navigate('/journey_details')
    }
    return (
        <div className='flex flex-col items-center text-white mt-5 md:px-4 overflow-y-auto space-y-4  max-h-[450px]'>
            <div className='w-full md:w-[90%] flex flex-col md:flex-row md:items-center md:justify-between border border-2 border-[#FFFFFF] rounded-[30px] p-4' >
                <div className='flex flex-col md:flex-row md:space-x-5' >
                    <div>
                        <img src={Car} alt="No img found" className='rounded-lg w-[100%]' />
                    </div>
                    <div className='flex flex-col justify-center font-poppins text-[#F1F1F1] mt-2 md:mt-0 space-y-3' >
                        <p className='font-bold' >Executive</p>
                        <p>Mercedes</p>
                        <div className='flex flex-row items-center space-x-2'>
                            <GoPeople />
                            <p>2-8 people</p>
                        </div>
                        <div className='flex flex-row items-center space-x-2'>
                            <HiOutlineArrowsUpDown />
                            <p>5.212</p>
                        </div>
                        <p>Total Price: 34</p>
                    </div>
                </div>
                <div className='md:w-[17%] w-[30%] md:self-center self-end bg-[#FBBC05] rounded-lg cursor-pointer text-center p-2 ' onClick={handleSubmit}>
                    <button className='text-[#3B5998] font-poppins font-bold text-[12px]'  >
                        BOOK NOW
                    </button>
                </div>
            </div>
            <div className='w-full md:w-[90%] flex items-center justify-between border border-2 border-[#FFFFFF] rounded-[30px] p-4' >
                <div className='flex space-x-5' >
                    <div>
                        <img src={Car} alt="No img found" className='rounded-lg w-[100%]' />
                    </div>
                    <div className='flex flex-col justify-center font-poppins text-[#F1F1F1] space-y-3' >
                        <p className='font-bold' >Executive</p>
                        <p>Mercedes</p>
                        <div className='flex flex-row items-center space-x-2'>
                            <GoPeople />
                            <p>2-8 people</p>
                        </div>
                        <div className='flex flex-row items-center space-x-2'>
                            <HiOutlineArrowsUpDown />
                            <p>5.212</p>
                        </div>
                        <p>Total Price: 34</p>
                    </div>
                </div>
                <div className='bg-[#FBBC05] rounded-lg cursor-pointer p-2 ' >
                    <button className='text-[#3B5998] font-poppins font-bold text-[12px]  ' >
                        BOOK NOW
                    </button>
                </div>
            </div>
            <div className='w-full md:w-[90%] flex items-center justify-between border border-2 border-[#FFFFFF] rounded-[30px] p-4' >
                <div className='flex space-x-5' >
                    <div>
                        <img src={Car} alt="No img found" className='rounded-lg w-[100%]' />
                    </div>
                    <div className='flex flex-col justify-center font-poppins text-[#F1F1F1] space-y-3' >
                        <p className='font-bold' >Executive</p>
                        <p>Mercedes</p>
                        <div className='flex flex-row items-center space-x-2'>
                            <GoPeople />
                            <p>2-8 people</p>
                        </div>
                        <div className='flex flex-row items-center space-x-2'>
                            <HiOutlineArrowsUpDown />
                            <p>5.212</p>
                        </div>
                        <p>Total Price: 34</p>
                    </div>
                </div>
                <div className='bg-[#FBBC05] rounded-lg cursor-pointer p-2 ' >
                    <button className='text-[#3B5998] font-poppins font-bold text-[12px]  ' >
                        BOOK NOW
                    </button>
                </div>
            </div>
        </div>
    );
}

export default AvailableCars;
