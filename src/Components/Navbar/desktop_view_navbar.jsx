import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../App';

const DesktopViewNavbar = () => {
    const navigate = useNavigate()
    const { state, dispatch } = useContext(AuthContext)

    const handleLogin = async () => {
        navigate("/login")
        dispatch({ type: "USER", payload: true })
    }

    const handleLogout = async () => {
        navigate("/")
        dispatch({ type: "USER", payload: false })
    }

    return (
        <div className='hidden lg:flex lg:flex-row justify-between p-5' >

            <div >

            </div>

            <div className='flex flex-row lg:space-x-8 items-center font-poppins  text-[#212121] ml-[10%] ' >
                <Link to='/'>Home</Link>
                <Link to='/'>About Us</Link>
                <Link to='/'>Services</Link>
                <Link to='/'>Blogs</Link>
            </div>
            <div className='flex flex-row font-poppins  ' >
                <div className='cursor-pointer flex items-center text-[12px] py-2  px-4 mr-3  border rounded-lg bg-[#212121] text-[#FFFFFF]' >
                    +1 800-123-456
                </div>
                <div className='cursor-pointer flex items-center text-[12px] py-2 px-4  border rounded-lg bg-[#212121] text-[#FFFFFF]' >
                    +1 800-123-456
                </div>
                {
                    state ?
                        <div className='cursor-pointer ml-16 py-2 px-2 px-4 flex items-center text-[12px] font-bold border rounded-lg bg-[#D89B1C] text-[#FFFFFF]'
                            onClick={handleLogout}
                        >
                            Logout
                        </div> :
                        <div className='cursor-pointer ml-[100px] py-2 px-2 md:px-4 flex items-center text-[12px] font-bold border rounded-lg bg-[#D89B1C] text-[#FFFFFF]'
                            onClick={handleLogin}
                        >
                            Login
                        </div>
                }

            </div>
        </div>

    );
}

export default DesktopViewNavbar;
