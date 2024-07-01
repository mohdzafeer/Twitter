
import { IoCloseSharp } from "react-icons/io5";
import { FaRupeeSign } from "react-icons/fa";
import { IoCheckmark } from "react-icons/io5";
import { Link } from 'react-router-dom';
import './Premium.css'

import axios from 'axios';
import { useState } from "react";










const Premium = () => {





    const basic = async () => {
        const response = await axios.post('http://localhost:8000/subscription', {
            amount: 21587,
        })
        if (response && response.status === 200) {
            window.location.href = response.data.url
            console.log(response)
        }
    }
    const basicYearly = async () => {
        const response = await axios.post('http://localhost:8000/subscription', {
            amount: 250000,
        })
        if (response && response.status === 200) {
            window.location.href = response.data.url
            console.log(response)
        }
    }
    const premium = async () => {

        const response = await axios.post('http://localhost:8000/subscription', {
            amount: 56666,
        })
        if (response && response.status === 200) {
            window.location.href = response.data.url
            console.log(response)
        }
    }
    const premiumYearly = async () => {

        const response = await axios.post('http://localhost:8000/subscription', {
            amount: 650000,
        })
        if (response && response.status === 200) {
            window.location.href = response.data.url
            console.log(response)
        }
    }
    const premiumPlus = async () => {

        const response = await axios.post('http://localhost:8000/subscription', {
            amount: 113333,
        })
        if (response && response.status === 200) {
            window.location.href = response.data.url
            console.log(response)
        }
    }
    const premiumPlusYearly = async () => {

        const response = await axios.post('http://localhost:8000/subscription', {
            amount: 1100000,
        })
        if (response && response.status === 200) {
            window.location.href = response.data.url
            console.log(response)
        }
    }


    const [monthly, setMonthly] = useState(true)


    return (
        <div className='pb-5' >



            {monthly
                ?
                <>
                    <div><Link to={'/home/feed'}><IoCloseSharp className='m-5 font-bold text-2xl  rounded-full ' /></Link></div>
                    <div className='w-screen flex flex-col gap-8 justify-center items-center mt-10'>
                        <h1 className='lg:text-6xl md:text-4xl sm:text-3xl text-2xl font-bold'>Upgrade to Premium</h1>
                        <h2 className='lg:hidden md:text-lg sm:text-sm text-sm font-semibold'>Enjoy an enhanced experience, exclusive creator tools,<br /> top-tier verification and security.</h2>
                        <h2 className='lg:text-xl md:text-lg sm:text-sm text-sm font-semibold'>Enjoy an enhanced experience, exclusive creator tools, top-tier verification and security.</h2>
                    </div>
                    <div className="flex items-center w-full justify-center mt-10">
                        <div className="flex p-1 rounded-full bg-gray-200 w-fit items-center justify-center">
                            <button onClick={()=>{
                                setMonthly(true)
                            }} className="bg-blue-500 text-white rounded-full m-1 px-4 py-3 font-bold text-lg w-32 flex items-center justify-center">Monthly</button>
                            <button onClick={()=>{
                                setMonthly(false)
                            }} className="bg-white rounded-full m-1 px-4 py-3 font-bold text-lg w-32 flex items-center justify-center">Yearly</button>
                        </div>
                    </div>
                    <div action="/create-checkout-session" method="POST" className='flex items-center justify-center mt-20 lg:flex-row flex-col lg:gap-0 gap-4 md:flex-row  md:flex-wrap'>
                        {/* Card 1 */}
                        <div className=' bg-gray-100 rounded-xl flex flex-col gap-2 px-10 py-8 shadow-lg card'>
                            <h2 className='text-3xl font-normal '>Basic</h2>
                            <h1 className='flex items-end'><span className='flex gap-2 items-center font-bold text-4xl'><FaRupeeSign />215.87</span><span>/month</span></h1>
                            <button onClick={() => {

                                basic()

                            }}

                                className='w-full flex items-center justify-center bg-blue-600 font-bold text-white rounded-full px-3 py-2 hover:bg-blue-500 active:bg-blue-600 duration-300'>Subscribe</button>
                            <div>
                                <p className='flex items-center gap-2'><span><IoCheckmark /></span><span>Small reply boost</span></p>
                                <p className='flex items-center gap-2'><span><IoCheckmark /></span><span>Encrypted direct messages</span></p>
                                <p className='flex items-center gap-2'><span><IoCheckmark /></span><span>Bookmark folders</span></p>
                                <p className='flex items-center gap-2'><span><IoCheckmark /></span><span>Highlight tab</span></p>
                                <p className='flex items-center gap-2'><span><IoCheckmark /></span><span>Edit post</span></p>
                                <p className='flex items-center gap-2'><span><IoCheckmark /></span><span>Post longer videos</span></p>
                                <p className='flex items-center gap-2'><span><IoCheckmark /></span><span>Longer posts</span></p>
                            </div>
                        </div>
                        {/* Card 2 */}
                        <div className=' bg-gray-100 rounded-xl flex flex-col gap-2 px-10 py-8 shadow-lg mx-20 card'>
                            <h2 className='text-3xl font-normal '>Premium</h2>
                            <h1 className='flex items-end'><span className='flex gap-2 items-center font-bold text-4xl'><FaRupeeSign />566.66</span><span>/month</span></h1>
                            <button onClick={() => {
                                premium()

                            }} className='w-full flex items-center justify-center bg-blue-600 font-bold text-white rounded-full px-3 py-2 hover:bg-blue-500 active:bg-blue-600 duration-300'>Subscribe</button>
                            <div>
                                <p className='flex items-center gap-2 font-bold'>Everything in basic, and</p>
                                <p className='flex items-center gap-2'><span><IoCheckmark /></span><span>Half Ads in For You and Following</span></p>
                                <p className='flex items-center gap-2'><span><IoCheckmark /></span><span>Larger reply boost</span></p>
                                <p className='flex items-center gap-2'><span><IoCheckmark /></span><span>Get pais to post</span></p>
                                <p className='flex items-center gap-2'><span><IoCheckmark /></span><span>Checkmark</span></p>
                                <p className='flex items-center gap-2'><span><IoCheckmark /></span><span>Grok Early Access</span></p>
                                <p className='flex items-center gap-2'><span><IoCheckmark /></span><span>Twitter Pro, Analytics, Media Studio</span></p>
                                <p className='flex items-center gap-2'><span><IoCheckmark /></span><span>Creator Subscriptions</span></p>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className=' bg-blue-100 rounded-xl flex flex-col gap-2 px-10 py-8 shadow-lg card mt-5 lg:mt-0'>
                            <h2 className='text-3xl font-normal '>Premium+</h2>
                            <h1 className='flex items-end'><span className='flex gap-2 items-center font-bold text-4xl'><FaRupeeSign />1,133.33</span><span>/month</span></h1>
                            <button onClick={() => {
                                premiumPlus()

                            }} className='w-full flex items-center justify-center bg-blue-600 font-bold text-white rounded-full px-3 py-2 hover:bg-blue-500 active:bg-blue-600 duration-300 animate-pulse hover:animate-none'>Subscribe</button>
                            <div>
                                <p className='flex items-center gap-2 font-bold'>Everything in Premium, and</p>
                                <p className='flex items-center gap-2'><span><IoCheckmark /></span><span>No Ads in for You and Following</span></p>
                                <p className='flex items-center gap-2'><span><IoCheckmark /></span><span>Largest reply boost</span></p>
                                <p className='flex items-center gap-2'><span><IoCheckmark /></span><span>White Articles</span></p>

                            </div>
                        </div>
                    </div>
                </>
                :
                <>
                    <div><Link to={'/home/feed'}><IoCloseSharp className='m-5 font-bold text-2xl  rounded-full ' /></Link></div>
                    <div className='w-screen flex flex-col gap-8 justify-center items-center mt-10'>
                        <h1 className='lg:text-6xl md:text-4xl sm:text-3xl text-2xl font-bold'>Upgrade to Premium</h1>
                        <h2 className='lg:hidden md:text-lg sm:text-sm text-sm font-semibold'>Enjoy an enhanced experience, exclusive creator tools,<br /> top-tier verification and security.</h2>
                        <h2 className='lg:text-xl md:text-lg sm:text-sm text-sm font-semibold'>Enjoy an enhanced experience, exclusive creator tools, top-tier verification and security.</h2>
                    </div>
                    <div className="flex items-center w-full justify-center mt-10">
                        <div className="flex p-1 rounded-full bg-gray-200 w-fit items-center justify-center">
                            <button onClick={()=>setMonthly(true)} className="bg-white rounded-full m-1 px-4 py-3 font-bold text-lg w-32 flex items-center justify-center">Monthly</button>
                            <button onClick={()=>setMonthly(false)} className="bg-blue-500 text-white rounded-full m-1 px-4 py-3 font-bold text-lg w-32 flex items-center justify-center">Yearly</button>
                        </div>
                    </div>
                    <div action="/create-checkout-session" method="POST" className='flex items-center justify-center mt-20 lg:flex-row flex-col lg:gap-0 gap-4 md:flex-row  md:flex-wrap'>
                        {/* Card 1 */}
                        <div className=' bg-gray-100 rounded-xl flex flex-col gap-2 px-10 py-8 shadow-lg card'>
                            <h2 className='text-3xl font-normal '>Basic</h2>
                            <h1 className='flex items-end'><span className='flex gap-2 items-center font-bold text-4xl'><FaRupeeSign />2,500</span><span>/year</span></h1>
                            <button onClick={() => {

                                basicYearly()

                            }}

                                className='w-full flex items-center justify-center bg-blue-600 font-bold text-white rounded-full px-3 py-2 hover:bg-blue-500 active:bg-blue-600 duration-300'>Subscribe</button>
                            <div>
                                <p className='flex items-center gap-2'><span><IoCheckmark /></span><span>Small reply boost</span></p>
                                <p className='flex items-center gap-2'><span><IoCheckmark /></span><span>Encrypted direct messages</span></p>
                                <p className='flex items-center gap-2'><span><IoCheckmark /></span><span>Bookmark folders</span></p>
                                <p className='flex items-center gap-2'><span><IoCheckmark /></span><span>Highlight tab</span></p>
                                <p className='flex items-center gap-2'><span><IoCheckmark /></span><span>Edit post</span></p>
                                <p className='flex items-center gap-2'><span><IoCheckmark /></span><span>Post longer videos</span></p>
                                <p className='flex items-center gap-2'><span><IoCheckmark /></span><span>Longer posts</span></p>
                            </div>
                        </div>
                        {/* Card 2 */}
                        <div className=' bg-gray-100 rounded-xl flex flex-col gap-2 px-10 py-8 shadow-lg mx-20 card'>
                            <h2 className='text-3xl font-normal '>Premium</h2>
                            <h1 className='flex items-end'><span className='flex gap-2 items-center font-bold text-4xl'><FaRupeeSign />6,500</span><span>/year</span></h1>
                            <button onClick={() => {
                                premiumYearly()

                            }} className='w-full flex items-center justify-center bg-blue-600 font-bold text-white rounded-full px-3 py-2 hover:bg-blue-500 active:bg-blue-600 duration-300'>Subscribe</button>
                            <div>
                                <p className='flex items-center gap-2 font-bold'>Everything in basic, and</p>
                                <p className='flex items-center gap-2'><span><IoCheckmark /></span><span>Half Ads in For You and Following</span></p>
                                <p className='flex items-center gap-2'><span><IoCheckmark /></span><span>Larger reply boost</span></p>
                                <p className='flex items-center gap-2'><span><IoCheckmark /></span><span>Get pais to post</span></p>
                                <p className='flex items-center gap-2'><span><IoCheckmark /></span><span>Checkmark</span></p>
                                <p className='flex items-center gap-2'><span><IoCheckmark /></span><span>Grok Early Access</span></p>
                                <p className='flex items-center gap-2'><span><IoCheckmark /></span><span>Twitter Pro, Analytics, Media Studio</span></p>
                                <p className='flex items-center gap-2'><span><IoCheckmark /></span><span>Creator Subscriptions</span></p>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className=' bg-blue-100 rounded-xl flex flex-col gap-2 px-10 py-8 shadow-lg card mt-5 lg:mt-0'>
                            <h2 className='text-3xl font-normal '>Premium+</h2>
                            <h1 className='flex items-end'><span className='flex gap-2 items-center font-bold text-4xl'><FaRupeeSign />11,000</span><span>/year</span></h1>
                            <button onClick={() => {
                                premiumPlusYearly()

                            }} className='w-full flex items-center justify-center bg-blue-600 font-bold text-white rounded-full px-3 py-2 hover:bg-blue-500 active:bg-blue-600 duration-300 animate-pulse hover:animate-none'>Subscribe</button>
                            <div>
                                <p className='flex items-center gap-2 font-bold'>Everything in Premium, and</p>
                                <p className='flex items-center gap-2'><span><IoCheckmark /></span><span>No Ads in for You and Following</span></p>
                                <p className='flex items-center gap-2'><span><IoCheckmark /></span><span>Largest reply boost</span></p>
                                <p className='flex items-center gap-2'><span><IoCheckmark /></span><span>White Articles</span></p>

                            </div>
                        </div>
                    </div>
                </>
            }





        </div>
    )





}
export default Premium




