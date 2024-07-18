import React, { useState } from 'react';
import { MdLocationPin } from "react-icons/md";
import { FaLocationArrow } from "react-icons/fa";
import { IoMdAddCircle } from "react-icons/io";
import { GrSubtractCircle } from "react-icons/gr";
import Calandar from "../Calander/calander"
import './journey_form.css'

const JourneyForm = ({ ToggleAvailableCars }) => {


    const [numberOfPassengers, setNumberOfPassengers] = useState(0)
    const [numberOfLuggages, setNumberOfLuggages] = useState(0)
    const [isOneTrip, setIsOneTrip] = useState(true)

    const ToggleRadioButton = async (payload) => {
        setIsOneTrip(payload)
    }

    const [formData, setFormData] = useState(
        {
            destination: "",
            arrival: "",
            trip_type: "",
            passengers_count: 1,
            luggage_count: 0
        })

    const passangersAdd = async () => {
        setNumberOfPassengers(numberOfPassengers + 1)
        setFormData({
            ...formData,
            passengers_count: numberOfPassengers
        });
    }

    const passengersSubtract = async () => {
        setNumberOfPassengers(numberOfPassengers - 1)
        setFormData({
            ...formData,
            passengers_count: numberOfPassengers
        });
    }
    const luggagesAdd = async () => {
        setNumberOfLuggages(numberOfLuggages + 1)
        setFormData({
            ...formData,
            luggage_count: numberOfLuggages
        });
    }

    const luggagesSubtract = async () => {
        setNumberOfLuggages(numberOfLuggages - 1)
        setFormData({
            ...formData,
            luggage_count: numberOfLuggages
        });
    }

    const handleInputChangeFormData = async (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });

    };
    console.log("ONE", isOneTrip)

    return (
        <div className='flex flex-col border border-2 border-[#FFFFFF] rounded-[30px] mt-5 p-8 md:w-[90%] mx-auto ' >
            <div className='flex bg-[#FFE8C6] space-x-2 p-2 rounded-lg'>
                <FaLocationArrow className='text-[#D89B1C] text-[20px]' />
                <input
                    type="text"
                    name="destination"
                    value={formData.destination}
                    placeholder='From:'
                    className='w-[100%] text-[#73788C] font-poppins bg-transparent focus:outline-none'
                    onChange={handleInputChangeFormData} />
            </div>
            <div className='flex bg-[#FFE8C6] space-x-2 p-2 rounded-lg mt-4'>
                <MdLocationPin className='text-[#D89B1C] text-[20px]' />
                <input
                    type="text"
                    name="arrival"
                    value={formData.arrival}
                    placeholder='To:'
                    className='w-[100%] text-[#73788C] font-poppins bg-transparent focus:outline-none'
                    onChange={handleInputChangeFormData} />
            </div>
            <label className='flex space-x-2 items-center justify-around mt-4 '>
                <div className='flex space-x-2 items-center '>
                    <input type="radio" name="trip_type" value="one_trip"
                        onClick={(e) => {
                            handleInputChangeFormData(e)
                            ToggleRadioButton(true)
                        }}

                    />
                    <span className='text-[#F1F1F1]' >One Trip</span>
                </div>
                <div className='flex space-x-2 items-center '>
                    <input type="radio" name="trip_type" value="round_trip"
                        onClick={(e) => {
                            handleInputChangeFormData(e)
                            ToggleRadioButton(false)
                        }}
                        className='border border-red-400'
                    />
                    <span className='text-[#F1F1F1]'>Round Trip</span>
                </div>
            </label>
            <div className='flex justify-around mt-4 '>
                <div className='flex flex-col '>
                    <div className=' text-[#F1F1F1] text-center p-2' >Passengers</div>
                    <div className='flex items-center space-x-2'>
                        <GrSubtractCircle className='cursor-pointer text-[#FFAF37] text-[22px]' onClick={passengersSubtract} />
                        <div className='bg-[#FFE8C6]  text-[20px] py-2 px-8 rounded-lg'>{formData.passengers_count}</div>
                        <IoMdAddCircle className='cursor-pointer text-[#FFAF37] text-[24px]' onClick={passangersAdd} />
                    </div>
                </div>
                <div className='flex flex-col'>
                    <div className=' text-[#F1F1F1] text-center p-2' >Luggages</div>
                    <div className='flex items-center space-x-2'>
                        <GrSubtractCircle className='cursor-pointer text-[#FFAF37] text-[22px]' onClick={luggagesSubtract} />
                        <div className='bg-[#FFE8C6]  text-[20px] py-2 px-8 rounded-lg'>{formData.luggage_count}</div>
                        <IoMdAddCircle className='cursor-pointer text-[#FFAF37] text-[24px]' onClick={luggagesAdd} />
                    </div>
                </div>
            </div>

            {/* CALENDAR */}

            <div className='flex space-x-4 mt-8' >
                <div className='flex flex-col w-full p-2 space-y-1' >
                    <p className='text-[#F1F1F1]'>First Trip</p>
                    <div className=' bg-[#FFE8C6] rounded-lg p-2 w-full' >
                        <Calandar />
                    </div>
                </div>
                <div className={`flex flex-col w-full  p-2 space-y-1 ${isOneTrip ? 'pointer-events-none opacity-60 cursor-none' : ''} `}>
                    <p className='text-[#F1F1F1]'>Round Trip</p>
                    <div className='bg-[#FFE8C6] rounded-lg p-2 w-full' >
                        <Calandar />
                    </div>
                </div>
            </div>

            <div className='bg-[#FBBC05] rounded-lg text-center cursor-pointer p-2 mt-6' onClick={ToggleAvailableCars} >
                <button className='text-[#3B5998] font-poppins font-bold text-[14px] leading-[24px] tracking-[1px]' >
                    GET A QOUTE / BOOK NOW
                </button>
            </div>



        </div>
    );
}

export default JourneyForm;
