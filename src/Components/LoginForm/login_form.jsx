import React, { useState } from 'react';
import { MdOutlineMail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { AiTwotoneEyeInvisible } from "react-icons/ai";
import { AiTwotoneEye } from "react-icons/ai";
import Error from "../../Components/ErrorInputValidation/error"
import "./login_form.css"
const LoginForm = () => {
    const [emailError, setEmailError] = useState(false)
    const [passwordError, setPasswordError] = useState(false)

    const [passwordVisible, setPasswordVisible] = useState(false);
    const [formData, setFormData] = useState(
        {
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

        switch (true) {
            case formData.email.trim() === '':
                setEmailError(true);
                break;
            case formData.password.trim() === '':
                setPasswordError(true);
                break;

            default:
                setEmailError(false);
                setPasswordError(false);

        }


        // if (formData.email.trim() === '') {
        //     setEmailError(true)
        //     if (formData.password.trim() === '') {
        //         setPasswordError(true);
        //     }
        //     else {
        //         setPasswordError(false);
        //     }
        // }
        // else if (formData.password.trim() === '') {
        //     setPasswordError(true)
        //     if (formData.email.trim() === '') {
        //         setEmailError(true);
        //     }
        //     else {
        //         setEmailError(false);
        //     }
        // }
        // else {
        //     setEmailError(false);
        //     setPasswordError(false);

        // }
    }


    return (
        <div className='w-[100%] flex flex-col justify-center'  >
            <div className='flex flex-col mt-5' >
                <div>
                    <p className='font-poppins text-[#555555] mb-2 ml-1' >Email Address</p>
                    <div className='flex border rounded-md ' >
                        <div className='w-[10%]  rounded-md p-2 '>
                            <MdOutlineMail size={"sm"} className='text-[#D89B1C] ' />
                        </div>
                        <input
                            name="email"
                            placeholder='Enter Email Address' type="email"
                            value={formData.email}
                            onChange={handleInputChangeFormData}
                            className='login-input-email font-poppins text-[#555555] w-full bg-transparent py-2  focus:outline-none'
                        />
                    </div>
                    {emailError && <Error />}
                </div>

                <div>
                    <p className='font-poppins text-[#555555] mt-2 mb-1 ml-1' >Password</p>
                    <div className="flex border rounded-md">
                        <div className='w-[10%] rounded-md p-2'>
                            <RiLockPasswordLine size={"sm"} className='text-[#D89B1C]  ' />

                        </div>
                        <input
                            name='password'
                            value={formData.password}
                            placeholder='Enter password'
                            type={passwordVisible ? 'text' : 'password'}
                            onChange={handleInputChangeFormData}
                            className='login-input-password font-poppins text-[#555555]  w-full  bg-transparent  py-2 focus:outline-none'
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
                <div className='flex  justify-end ' >
                    <p className='font-poppins text-[#1E2772] text-[14px] underline cursor-pointer mt-2 mb-2'  >Forgot Password?</p>
                </div>

                <div className='bg-[#D89B1C] p-2 flex justify-center rounded-md cursor-pointer mt-5 mb-5' onClick={handleSubmit} >
                    <button className='text-[#FFFFFF] font-poppins font-semibold' >Login now</button>
                </div>

            </div>

        </div>



    );
}

export default LoginForm;
