import React, { useState, useContext } from 'react';
import { AuthContext } from '../../App';
import { Link, useNavigate } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
import { FaWhatsapp } from "react-icons/fa6";
import { MdCall } from "react-icons/md";
import { IoHome } from "react-icons/io5";
import { MdOutlineDetails } from "react-icons/md";
import { FaServicestack } from "react-icons/fa6";
import { FaRegNewspaper } from "react-icons/fa";
import { LuLogIn } from "react-icons/lu";


const MobileViewNavbar = () => {
    const navigate = useNavigate()
    const [mobileView, setMobileView] = useState(false)
    const { state, dispatch } = useContext(AuthContext)

    const handleButtonClick = async () => {
        setMobileView(!mobileView)
    }


    const handleLogin = async () => {
        navigate('/login')
        dispatch({ type: "USER", payload: true })
    }

    const handleLogout = async () => {
        navigate('/')
        dispatch({ type: "USER", payload: false })
    }
    return (
        <>
            <div className='lg:hidden flex flex-row  justify-between p-5' >

                <div>

                </div>
                <div className="cursor-pointer   " onClick={handleButtonClick} >
                    <GiHamburgerMenu className='text-[30px]' />
                </div>
            </div>
            {
                mobileView ?
                    <div>
                        <div className='flex flex-col font-poppins bg-[#FFE8C6] text-[#916d00] font-bold text-[18px] space-y-2' >
                            <div className='flex space-x-2 cursor-pointer py-2 px-4   '>
                                <div className="w-[5%]" >
                                    <IoHome size='sm' />
                                </div>
                                <Link to='/'  >Home</Link>
                            </div>

                            <div className='flex space-x-2 cursor-pointer py-2 px-4  '>
                                <div className="w-[5%]" >
                                    <MdOutlineDetails size='sm' />
                                </div>
                                <Link to='/'  >About Us</Link>
                            </div>

                            <div className='flex space-x-2 cursor-pointer py-2 px-4  '>
                                <div className="w-[5%]" >
                                    <FaServicestack size='sm' />
                                </div>
                                <Link to='/'  >Services</Link>
                            </div>

                            <div className='flex space-x-2 cursor-pointer py-2 px-4  '>
                                <div className="w-[5%]" >
                                    <FaRegNewspaper size='sm' />
                                </div>
                                <Link to='/'  >Blogs</Link>
                            </div>

                            {
                                state ?
                                    <div className='flex space-x-2 cursor-pointer py-2 px-4  ' >
                                        <div className="w-[5%]" >
                                            <LuLogIn size='sm' />
                                        </div>
                                        <div onClick={handleLogout}>
                                            Logout
                                        </div>
                                    </div>
                                    :
                                    <div className='flex space-x-2 cursor-pointer py-2 px-4  ' >
                                        <div className="w-[5%]" >
                                            <LuLogIn size='sm' />
                                        </div>
                                        <div onClick={handleLogin}>
                                            Login
                                        </div>
                                    </div>

                            }


                            <div className='flex space-x-2 cursor-pointer py-2 px-4  ' >
                                <div className="w-[5%]" >
                                    <FaWhatsapp size='sm' />
                                </div>
                                <div>
                                    +1 800-123-456
                                </div>
                            </div>
                            <div className='flex space-x-2 cursor-pointer py-2 px-4   ' >
                                <div className="w-[5%]" >
                                    <MdCall size='sm' />
                                </div>
                                <div>
                                    +1 800-123-456
                                </div>
                            </div>
                        </div>

                    </div> : ""
            }
        </>


    );
}

export default MobileViewNavbar;
