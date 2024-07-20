import React, { useState } from 'react';
import { MdOutlineMail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { AiTwotoneEyeInvisible } from "react-icons/ai";
import { AiTwotoneEye } from "react-icons/ai";
import { CiUser } from "react-icons/ci";
import { BiPhone } from "react-icons/bi";
import Error from "../../Components/ErrorInputValidation/error"

import "./registeration_form.css"


const RegisterationForm = () => {
    const [nameError, setNameError] = useState(false)
    const [phoneError, setPhoneError] = useState(false)
    const [emailError, setEmailError] = useState(false)
    const [passwordError, setPasswordError] = useState(false)

    const [passwordVisible, setPasswordVisible] = useState(false);
    const [formData, setFormData] = useState(
        {
            full_name: "",
            phone_number: "",
            email: "",
            password: ""
        })

    const handleInputChangeFormData = async (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });

    };
    const togglePasswordVisibility = async () => {
        setPasswordVisible(!passwordVisible)
    }

    const handleSubmit = async () => {
        setEmailError(false);
        setPasswordError(false);
        setNameError(false);
        setPhoneError(false);
        switch (true) {
            case formData.email.trim() === '':
                setEmailError(true);
                break;
            case formData.full_name.trim() === '':
                setNameError(true);
                break;
            case formData.phone_number.trim() === '':
                setPhoneError(true);
                break;
            case formData.password.trim() === '':
                setPasswordError(true);
                break;
            default:
                setEmailError(false);
                setPasswordError(false);
                setPhoneError(false)
                setNameError(false)
        }


    }

    return (
        <div className='w-[100%] flex flex-col justify-center'  >
            <div className='flex flex-col mt-2 space-y-4' >
                <div>
                    <p className='font-poppins text-[#555555] ml-1 text-[14px]' >Email Address</p>
                    <div className='flex border rounded-md ' >
                        <div className='w-[10%]  rounded-md p-2 '>
                            <MdOutlineMail size={"sm"} className='text-[#D89B1C] ' />
                        </div>
                        <input
                            className='register-input-email font-poppins text-[#555555] w-full bg-transparent py-2  focus:outline-none'
                            placeholder='Enter Email Address' type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChangeFormData}
                        />
                    </div>
                    {emailError && <Error />}
                </div>

                <div>
                    <p className='font-poppins text-[#555555] ml-1 text-[14px]' >Full Name</p>
                    <div className='flex border rounded-md ' >
                        <div className='w-[10%]  rounded-md p-2 '>
                            <CiUser size={"sm"} className='text-[#D89B1C] ' />
                        </div>
                        <input
                            className='register-input-fullname font-poppins text-[#555555] w-full bg-transparent py-2  focus:outline-none'
                            placeholder='Enter Full Name' type="text"
                            name="full_name"
                            value={formData.full_name}
                            onChange={handleInputChangeFormData}
                        />
                    </div>
                    {nameError && <Error />}

                </div>

                <div>
                    <p className='font-poppins text-[#555555] ml-1 text-[14px]' >Phone Number</p>
                    <div className='flex border rounded-md ' >
                        <div className='w-[10%]  rounded-md p-2 '>
                            <BiPhone size={"sm"} className='text-[#D89B1C] ' />
                        </div>
                        <input
                            className='register-input-phonenumber font-poppins text-[#555555] w-full bg-transparent py-2  focus:outline-none'
                            placeholder='Enter Phone Number' type="number"
                            name="phone_number"
                            value={formData.phone_number}
                            onChange={handleInputChangeFormData}
                        />
                    </div>
                    {phoneError && <Error />}

                </div>

                <div>
                    <p className='font-poppins text-[#555555] ml-1 text-[14px]' >Password</p>
                    <div className="flex border rounded-md">
                        <div className='w-[10%] rounded-md p-2'>
                            <RiLockPasswordLine size={"sm"} className='text-[#D89B1C]  ' />

                        </div>
                        <input className='register-input-password font-poppins text-[#555555]  w-full  bg-transparent  py-2 focus:outline-none'
                            placeholder='Enter password'
                            name='password'
                            value={formData.password}
                            onChange={handleInputChangeFormData}
                            type={passwordVisible ? 'text' : 'password'}
                        />
                        <button
                            type="button"
                            className="pr-3 flex items-center text-gray-700"
                            onClick={togglePasswordVisibility}
                        >
                            {
                                passwordVisible ?
                                    <AiTwotoneEye
                                    />
                                    :
                                    <AiTwotoneEyeInvisible
                                    />
                            }
                        </button>

                    </div>
                    {passwordError && <Error />}

                </div>

            </div>
            <div className='bg-[#D89B1C] p-2 flex justify-center rounded-md cursor-pointer mt-8' onClick={handleSubmit}>
                <button className='text-[#FFFFFF] font-poppins font-semibold' >Register</button>
            </div>

        </div>
    );
}

export default RegisterationForm;
