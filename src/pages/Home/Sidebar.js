import twitter from '../../assets/Images/Logo_of_Twitter.svg.webp'
import { FaHome } from "react-icons/fa";
import { GoHash } from "react-icons/go";
import { FaRegBell } from "react-icons/fa";
import { SlEnvolope } from "react-icons/sl";
import { FaRegBookmark } from "react-icons/fa";
import { LiaClipboardListSolid } from "react-icons/lia";
import { FaRegUser } from "react-icons/fa6";
import { CiCircleMore } from "react-icons/ci";
import { useState } from 'react';
import { Divider, Menu, MenuItem } from '@mui/material';
import { useNavigate } from 'react-router';
import { useAuthState, useSignOut } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase.init';
import { LoadingPage } from '../LoadingPage/LoadingPage';
import { Link } from 'react-router-dom';
import CustomLinks from './CustomLinks';

export const Sidebar = () => {
    const navigate = useNavigate()
    const user = useAuthState(auth)

    const [signOut, loading, error] = useSignOut(auth);
    



    const [anchorEl, setAnchorEl] = useState(null)
    const openMenu = Boolean(anchorEl)

    const handleclick = (event) => {
        setAnchorEl(event.currentTarget)
    }
    const handleclose = () => {
        setAnchorEl(null)
    }

    return (
        <div>
            <Link to='/'><img className=' mx-5 my-2 cursor-pointer' src={twitter} width={70} alt='twitter' /></Link>
            <CustomLinks to='/home/feed' className='flex items-center mx-5 my-2 text-2xl px-4 cursor-pointer rounded-full hover:bg-blue-100 hover:text-blue-400 hover:font-semibold active:bg-blue-200 duration-150'><span><FaHome /></span><span className='flex items-center mx-5 my-2 font-semibold'>Home</span></CustomLinks>
            <CustomLinks to='/home/explore' className='flex items-center mx-5 my-2 text-2xl px-4 cursor-pointer rounded-full hover:bg-blue-100 hover:text-blue-400 hover:font-semibold active:bg-blue-200 duration-150'><span><GoHash /></span><span className='flex items-center mx-5 my-2 font-semibold'>Explore</span></CustomLinks>
            <CustomLinks to='/home/notification' className='flex items-center mx-5 my-2 text-2xl px-4 cursor-pointer rounded-full hover:bg-blue-100 hover:text-blue-400 hover:font-semibold active:bg-blue-200 duration-150'><span><FaRegBell /></span><span className='flex items-center mx-5 my-2 font-semibold'>Notifications</span></CustomLinks>
            <CustomLinks to='/home/messages' className='flex items-center mx-5 my-2 text-2xl px-4 cursor-pointer rounded-full hover:bg-blue-100 hover:text-blue-400 hover:font-semibold active:bg-blue-200 duration-150'><span><SlEnvolope /></span><span className='flex items-center mx-5 my-2 font-semibold'>Messages</span></CustomLinks>
            <CustomLinks to='/home/bookmark' className='flex items-center mx-5 my-2 text-2xl px-4 cursor-pointer rounded-full hover:bg-blue-100 hover:text-blue-400 hover:font-semibold active:bg-blue-200 duration-150'><span><FaRegBookmark /></span><span className='flex items-center mx-5 my-2 font-semibold'>Bookmarks</span></CustomLinks>
            <CustomLinks to='/home/lists' className='flex items-center mx-5 my-2 text-2xl px-4 cursor-pointer rounded-full hover:bg-blue-100 hover:text-blue-400 hover:font-semibold active:bg-blue-200 duration-150'><span><LiaClipboardListSolid /></span><span className='flex items-center mx-5 my-2 font-semibold'>Lists</span></CustomLinks>
            <CustomLinks to='/home/profile' className='flex items-center mx-5 my-2 text-2xl px-4 cursor-pointer rounded-full hover:bg-blue-100 hover:text-blue-400 hover:font-semibold active:bg-blue-200 duration-150'><span><FaRegUser /></span><span className='flex items-center mx-5 my-2 font-semibold'>Profile</span></CustomLinks>
            <CustomLinks to='/home/more' className='flex items-center mx-5 my-2 text-2xl px-4 cursor-pointer rounded-full hover:bg-blue-100 hover:text-blue-400 hover:font-semibold active:bg-blue-200 duration-150'><span><CiCircleMore /></span><span className='flex items-center mx-5 my-2 font-semibold'>More</span></CustomLinks>
            <button className='w-full flex items-center justify-center mx-5 my-2 text-2xl font-bold bg-blue-500 h-14 rounded-full text-white hover:bg-blue-600 active:bg-blue-700 duration-150' >Tweet</button>

            <div className='flex gap-2 mt-48 rounded-full hover:bg-gray-200 h-16 cursor-pointer active:bg-gray-300'>
                <img src='https://cdn-icons-png.flaticon.com/512/149/149071.png' width={60} />
                <div className='flex flex-col justify-center items-start'>
                    <p className='text-lg font-semibold'>Mohammad Zafeer</p>
                    <p className='opacity-75'>mohammadzafeer@gmail.com</p>
                </div>
                <div className='flex justify-center items-center text-4xl w-full'>
                    <CiCircleMore
                        aria-controls={openMenu ? 'basic-menu' : undefined}
                        aria-haspopup='true'
                        aria-expanded={openMenu ? 'true' : undefined}
                        onClick={handleclick}
                    />
                    <Menu
                        className='rounded-e-lg'
                        id='basic-menu'
                        anchorEl={anchorEl}
                        open={openMenu}
                        onClick={handleclose}
                        onClose={handleclose}
                    >
                        <MenuItem className='flex flex-col justify-start'>
                            <div className='flex gap-2'>
                                <img src='https://cdn-icons-png.flaticon.com/512/149/149071.png' width={50} />
                                <div className='flex flex-col justify-start items-start'>
                                    <p className='text-lg font-semibold'>Mohammad Zafeer</p>
                                    <p className='opacity-75'>mohammadzafeer@gmail.com</p>
                                </div>
                            </div>
                            <Divider />
                            <div className='flex flex-col items-start'>
                                <MenuItem onClick={()=>navigate('/login')}>Add an Existing Acoount</MenuItem>
                                <MenuItem onClick={async () => {
                                    await signOut(); 
                                }}>Log Out</MenuItem>
                </div>
            </MenuItem>
        </Menu>
                </div >
            </div >

        </div >
    )
}