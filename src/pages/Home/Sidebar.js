import twitter from '../../assets/Images/Logo_of_Twitter.svg.webp'
import { FaHome } from "react-icons/fa";
import { GoHash } from "react-icons/go";
import { FaRegBell } from "react-icons/fa";
import { SlEnvolope } from "react-icons/sl";
import { FaRegBookmark } from "react-icons/fa";

import { FaRegUser } from "react-icons/fa6";
import { CiCircleMore } from "react-icons/ci";
import { SlSocialTwitter } from "react-icons/sl";
import { useState } from 'react';
import { Divider, Menu, MenuItem } from '@mui/material';
import { useNavigate } from 'react-router';
import {  useSignOut } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase.init';
import { Link } from 'react-router-dom';
import CustomLinks from './CustomLinks';
import useLoggedInUser from '../../hooks/useLoggedInUser';


export const Sidebar = () => {
    const navigate = useNavigate()
    // const user = useAuthState(auth)

    const [signOut] = useSignOut(auth);





    const [anchorEl, setAnchorEl] = useState(null)
    const openMenu = Boolean(anchorEl)

    const handleclick = (event) => {
        setAnchorEl(event.currentTarget)
    }
    const handleclose = () => {
        setAnchorEl(null)
    }

    const [loggedInUser] = useLoggedInUser();
    // console.log(loggedInUser)
    const name = loggedInUser[0]?.name ? loggedInUser[0]?.name : auth.currentUser?.displayName
    const username = loggedInUser[0]?.username ? loggedInUser[0].username : "No Username Found :(";
    const googleProfilePic = auth.currentUser?.photoURL
    const userProfilePic = loggedInUser[0]?.profileImage ? loggedInUser[0]?.profileImage : googleProfilePic ? googleProfilePic : "https://cdn-icons-png.flaticon.com/512/149/149071.png"





    return (
        <div>
            <Link to='/home/feed'><img className=' mx-5 my-2 cursor-pointer' src={twitter} width={70} alt='twitter' /></Link>
            <CustomLinks to='/home/feed' className='flex items-center mx-5 my-2 text-2xl px-4 cursor-pointer rounded-full hover:bg-blue-100 hover:text-blue-400 hover:font-semibold active:bg-blue-200 duration-150'><span><FaHome /></span><span className='flex items-center mx-5 my-2 font-semibold'>Home</span></CustomLinks>
            <CustomLinks to='/home/explore' className='flex items-center mx-5 my-2 text-2xl px-4 cursor-pointer rounded-full hover:bg-blue-100 hover:text-blue-400 hover:font-semibold active:bg-blue-200 duration-150'><span><GoHash /></span><span className='flex items-center mx-5 my-2 font-semibold'>Explore</span></CustomLinks>
            <CustomLinks to='/home/notification' className='flex items-center mx-5 my-2 text-2xl px-4 cursor-pointer rounded-full hover:bg-blue-100 hover:text-blue-400 hover:font-semibold active:bg-blue-200 duration-150'><span><FaRegBell /></span><span className='flex items-center mx-5 my-2 font-semibold'>Notifications</span></CustomLinks>
            <CustomLinks to='/home/messages' className='flex items-center mx-5 my-2 text-2xl px-4 cursor-pointer rounded-full hover:bg-blue-100 hover:text-blue-400 hover:font-semibold active:bg-blue-200 duration-150'><span><SlEnvolope /></span><span className='flex items-center mx-5 my-2 font-semibold'>Messages</span></CustomLinks>
            <CustomLinks to='/home/widgets' className='lg:hidden flex items-center mx-5 my-2 text-2xl px-4 cursor-pointer rounded-full hover:bg-blue-100 hover:text-blue-400 hover:font-semibold active:bg-blue-200 duration-150'><span><FaRegBookmark /></span><span className='flex items-center mx-5 my-2 font-semibold'>Widgets</span></CustomLinks>
            {/* <CustomLinks to='/home/lists' className='flex items-center mx-5 my-2 text-2xl px-4 cursor-pointer rounded-full hover:bg-blue-100 hover:text-blue-400 hover:font-semibold active:bg-blue-200 duration-150'><span><LiaClipboardListSolid /></span><span className='flex items-center mx-5 my-2 font-semibold'>Lists</span></CustomLinks> */}
            <CustomLinks to='/premium' className='flex items-center mx-5 my-2 text-2xl px-4 cursor-pointer rounded-full hover:bg-blue-100 hover:text-blue-400 hover:font-semibold active:bg-blue-200 duration-150'><span><SlSocialTwitter /></span><span className='flex items-center mx-5 my-2 font-semibold'>Premium</span></CustomLinks>
            <CustomLinks to='/home/profile' className='flex items-center mx-5 my-2 text-2xl px-4 cursor-pointer rounded-full hover:bg-blue-100 hover:text-blue-400 hover:font-semibold active:bg-blue-200 duration-150'><span><FaRegUser /></span><span className='flex items-center mx-5 my-2 font-semibold'>Profile</span></CustomLinks>
            <CustomLinks to='/home/more' className='flex items-center mx-5 my-2 text-2xl px-4 cursor-pointer rounded-full hover:bg-blue-100 hover:text-blue-400 hover:font-semibold active:bg-blue-200 duration-150'><span><CiCircleMore /></span><span className='flex items-center mx-5 my-2 font-semibold'>More</span></CustomLinks>
            <Link to='/home/feed' className='lg:w-full w-2/3 flex items-center justify-center lg:mx-5 mx-2 my-2 text-2xl font-bold bg-blue-500 h-14 rounded-full text-white hover:bg-blue-600 active:bg-blue-700 duration-150' >Tweet</Link>

            <div className='flex gap-2 mt-28 lg:mt-60 rounded-full bg-gray-100 shadow-lg hover:bg-gray-200 duration-150 h-24 max-h-32 cursor-pointer active:bg-gray-300 px-3 py-2'>
                <div className='w-44  border-white border-4 rounded-full overflow-hidden flex justify-center items-center bg-white shadow-xl'>
                <img className='min-w-full min-h-full shrink-0' width={100} src={userProfilePic} alt='userProfil' />
                </div>
                <Link to='/home/profile' className='flex flex-col justify-center items-start'>
                    <div className='flex flex-col justify-center items-start'>
                        <p className='text-lg font-semibold '>{name}</p>
                        <p className='opacity-75 text-sm'>{name ? `@${username}` : auth.currentUser?.email}</p>
                    </div>
                </Link>
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
                                <div className='h-14 w-14 border-white border-4 rounded-full overflow-hidden flex justify-center items-center bg-white shadow-xl'>
                                    <img className='rounded-full min-w-full min-h-full shrink-0 overflow-hidden' width={100} src={userProfilePic} alt='userProfile' />
                                </div>
                                <Link to='/home/profile'>
                                    <div className='flex flex-col justify-center items-start'>
                                        <p className='text-lg font-semibold '>{name}</p>
                                        <p className='opacity-75 text-sm'>{name ? `@${username}` : auth.currentUser?.email}</p>
                                    </div>
                                </Link>
                            </div>
                            <Divider />
                            <div className='flex flex-col items-start'>
                                <MenuItem onClick={() => navigate('/login')}>Add an Existing Acoount</MenuItem>
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