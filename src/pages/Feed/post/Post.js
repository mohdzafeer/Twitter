// import react from 'react'

import { TbMessageCircle } from "react-icons/tb";
import { BsRepeat } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa6";
import { FiShare } from "react-icons/fi";
// import { useEffect } from "react";
// import { useAuthState } from 'react-firebase-hooks/auth';
// import { auth } from '../../../firebase.init';


const Post = ({ p }) => {

    // const googleUser = useAuthState(auth)
    // const googleProfilePic = auth.currentUser?.photoURL
    // const googleNameOfUser = auth.currentUser?.displayName
    // const googleEmail = auth.currentUser?.email
    // const splitGoogleEmail = () => {
    //     const result = googleEmail?.split('@')
    //     return (result[0])
    // }
    // const googleUsername = splitGoogleEmail();


    // const log = () => {
    //     console.log(googleProfilePic)
    //     console.log(googleNameOfUser)
    //     console.log(googleEmail)
    //     console.log(googleUsername)
    // }
    // log()
    // const todays_date = new Date();


    
    // console.log(p)

    


    const { name, username, photo, post, profilePhoto, date, hours, minutes } = p;
    return (
        <div className='border rounded-lg my-10 lg:p-5 py-5 px-1'>
            <div className='flex border-b-2 pb-5'>
                <img src={
                    profilePhoto ? profilePhoto : "https://cdn-icons-png.flaticon.com/512/149/149071.png"
                } width={50}
                    className='rounded-full'
                    alt="profilePhoto"
                />
                <div className='ml-5'>
                    <h2 className='font-bold'>{
                        name
                    }</h2>
                    <p className='text-gray-500'>@{
                        username
                    }</p>
                </div>
            </div>
            <div className='mb-2 pb-2 w-full '>
                {photo && <img className=' rounded-lg min-w-full mt-2' src={photo} height={400} alt="post" />}
                <p className='pt-2 font-sans font-semibold'>{post}</p>
            </div>
            <div className='border-b-2 pb-2 w-full text-sm text-blue-400 font-semibold'>
                {date &&
                    <p className="opacity-75">
                        <span className="text-black">{('Posted on')} </span>{date.split('T')[0]}
                        <span className="text-black"> {('at')} </span>{hours && <span className="font-semibold text-blue-400 ">{hours}:{minutes}</span>}
                    </p>}
            </div>

            <div className='flex justify-around pt-2'>
                <TbMessageCircle className='font-bold text-xl cursor-pointer opacity-60 hover:opacity-100 duration-150' />
                <BsRepeat className='font-bold text-xl cursor-pointer opacity-60 hover:opacity-100 duration-150' />
                <FaRegHeart className='font-bold text-xl cursor-pointer opacity-60 hover:opacity-100 duration-150' />
                <FiShare className='font-bold text-xl cursor-pointer opacity-60 hover:opacity-100 duration-150' />
            </div>
        </div>
    )
}
export default Post