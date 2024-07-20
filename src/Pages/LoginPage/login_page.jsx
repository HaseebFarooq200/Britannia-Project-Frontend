import React, { useState } from 'react';
import LoginForm from "../../Components/LoginForm/login_form"
import RegisterationForm from '../../Components/RegisterationForm/registeration_form';
import LoginPageImage2 from "../../assets/images/LoginPageImage2.svg"

const LoginPage = () => {
    const [activeTab, setActiveTab] = useState('login');

    const RenderTabs = () => {
        switch (activeTab) {
            case 'login':
                return <LoginForm />;
            case 'register':
                return <RegisterationForm />;
            default:
                return null;
        }
    };

    return (
        <div className='h-screen flex flex-col lg:flex-row lg:justify-center bg-loginpageimage bg-cover bg-center ' >
            <div className='hidden md:flex flex-col w-full lg:w-[50%] text-white mt-14 md:p-16 p-4 '>
                <img src={LoginPageImage2} alt="" />
                <p>Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec dignissim purus. </p>
            </div>
            <div className='flex justify-center lg:self-start self-center w-[90%] lg:w-[50%] ' >
                <div className='flex flex-col rounded-lg bg-[#FFFFFF] p-5 mt-8 mb-5 w-full lg:w-[70%] '>
                    <div className='space-x-4' >
                        <button className={`${activeTab === "register" ? "opacity-60" : ""} `} onClick={() => setActiveTab('login')} >Login </button>
                        <button className={`${activeTab === "login" ? "opacity-60" : ""} `} onClick={() => setActiveTab('register')} > Register</button>
                    </div>
                    <div className='mt-5'>
                        <RenderTabs />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;
