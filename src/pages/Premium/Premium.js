
import { IoCloseSharp } from "react-icons/io5";
import { FaRupeeSign } from "react-icons/fa";
import { IoCheckmark } from "react-icons/io5";
import { Link } from 'react-router-dom';
import './Premium.css'
import axios from 'axios';
import { useState } from "react";
import { useTranslation } from "react-i18next";










const Premium = () => {

    const { t } = useTranslation();

    const [basicLoading,setBasicLoading]=useState(false)
    const [premiumLoading,setPremiumLoading]=useState(false)
    const [premiumPlusLoading,setPremiumPlusLoading]=useState(false)

    



    const basic = async () => {
        setBasicLoading(true)
        const response = await axios.post('http://localhost:5000/subscription', {
            amount: 21587,
        })
        if (response && response.status === 200) {
            window.location.href = response.data.url
            console.log(response)
        }
        setBasicLoading(false)
    }
    const basicYearly = async () => {
        setBasicLoading(true)
        const response = await axios.post('http://localhost:5000/subscription', {
            amount: 250000,
        })
        if (response && response.status === 200) {
            window.location.href = response.data.url
            console.log(response)
        }
        setBasicLoading(false)
        
    }
    const premium = async () => {
        setPremiumLoading(true)
        const response = await axios.post('http://localhost:5000/subscription', {
            amount: 56666,
        })
        if (response && response.status === 200) {
            window.location.href = response.data.url
            console.log(response)
        }
        setPremiumLoading(false)
    }
    const premiumYearly = async () => {
        setPremiumLoading(true)
        const response = await axios.post('http://localhost:5000/subscription', {
            amount: 650000,
        })
        if (response && response.status === 200) {
            window.location.href = response.data.url
            console.log(response)
        }
        setPremiumLoading(false)
    }
    const premiumPlus = async () => {
        setPremiumPlusLoading(true)
        const response = await axios.post('http://localhost:5000/subscription', {
            amount: 113333,
        })
        if (response && response.status === 200) {
            window.location.href = response.data.url
            console.log(response)
        }
        setPremiumPlusLoading(false)
    }
    const premiumPlusYearly = async () => {
        setPremiumPlusLoading(true)
        const response = await axios.post('http://localhost:5000/subscription', {
            amount: 1100000,
        })
        if (response && response.status === 200) {
            window.location.href = response.data.url
            console.log(response)
        }
        setPremiumPlusLoading(false)
    }


    const [monthly, setMonthly] = useState(true)


    return (
        <div className='pb-5' >



            {monthly
                ?
                <>
                    <div><Link to={'/home/feed'}><IoCloseSharp className='m-5 font-bold text-2xl  rounded-full ' /></Link></div>
                    <div className='w-screen flex flex-col gap-8 justify-center items-center mt-10'>
                        <h1 className='lg:text-6xl md:text-4xl sm:text-3xl text-2xl font-bold'>{t('Upgrade to Premium')}</h1>
                        <h2 className='lg:hidden md:text-lg sm:text-sm text-sm font-semibold'>Enjoy an enhanced experience, exclusive creator tools,<br /> top-tier verification and security.</h2>
                        <h2 className='lg:text-xl md:text-lg sm:text-sm text-sm font-semibold'>Enjoy an enhanced experience, exclusive creator tools, top-tier verification and security.</h2>
                    </div>
                    <div className="flex items-center w-full justify-center mt-10">
                        <div className="flex p-1 rounded-full bg-gray-200 w-fit items-center justify-center">
                            <button onClick={()=>{
                                setMonthly(true)
                            }} className="bg-blue-500 text-white rounded-full m-1 px-4 py-3 font-bold text-lg w-32 flex items-center justify-center active:scale-90 duration-200">{t('Monthly')}</button>
                            <button onClick={()=>{
                                setMonthly(false)
                            }} className="bg-white rounded-full m-1 px-4 py-3 font-bold text-lg w-32 flex items-center justify-center active:scale-90 duration-200">{t('Yearly')}</button>
                        </div>
                    </div>
                    <div action="/create-checkout-session" method="POST" className='flex items-center justify-center mt-20 lg:flex-row flex-col lg:gap-0 gap-4 md:flex-row  md:flex-wrap'>
                        {/* Card 1 */}
                        <div className=' bg-gray-100 rounded-xl flex flex-col gap-2 px-10 py-8 shadow-lg card'>
                            <h2 className='text-3xl font-normal '>{t('Basic')}</h2>
                            <h1 className='flex items-end'><span className='flex gap-2 items-center font-bold text-4xl'><FaRupeeSign />215.87</span><span>/{t('Month')}</span></h1>
                            <button onClick={() => {

                                basic()

                            }}

                                className='w-full flex items-center justify-center bg-blue-600 font-bold text-white rounded-full px-3 py-2 hover:bg-blue-500 active:bg-blue-600 duration-300'>{basicLoading ===true ?'Loading...' : <>{t('Subscribe')}</>}</button>
                            <div>
                                <p className='flex items-center gap-2'><span><IoCheckmark /></span><span>{t('basicP1')}</span></p>
                                <p className='flex items-center gap-2'><span><IoCheckmark /></span><span>{t('basicP2')}</span></p>
                                <p className='flex items-center gap-2'><span><IoCheckmark /></span><span>{t('basicP3')}</span></p>
                                <p className='flex items-center gap-2'><span><IoCheckmark /></span><span>{t('basicP4')}</span></p>
                                <p className='flex items-center gap-2'><span><IoCheckmark /></span><span>{t('basicP5')}</span></p>
                                <p className='flex items-center gap-2'><span><IoCheckmark /></span><span>{t('basicP6')}</span></p>
                                <p className='flex items-center gap-2'><span><IoCheckmark /></span><span>{t('basicP7')}</span></p>
                            </div>
                        </div>
                        {/* Card 2 */}
                        <div className=' bg-gray-100 rounded-xl flex flex-col gap-2 px-10 py-8 shadow-lg mx-20 card'>
                            <h2 className='text-3xl font-normal '>{t('_Premium')}</h2>
                            <h1 className='flex items-end'><span className='flex gap-2 items-center font-bold text-4xl'><FaRupeeSign />566.66</span><span>/{t('Month')}</span></h1>
                            <button onClick={() => {
                                premium()

                            }} className='w-full flex items-center justify-center bg-blue-600 font-bold text-white rounded-full px-3 py-2 hover:bg-blue-500 active:bg-blue-600 duration-300'>{premiumLoading ===true ?'Loading...' : <>{t('Subscribe')}</>}</button>
                            <div>
                                <p className='flex items-center gap-2 font-bold'>{t('premium_heading')}</p>
                                <p className='flex items-center gap-2'><span><IoCheckmark /></span><span>{t('premiumP1')}</span></p>
                                <p className='flex items-center gap-2'><span><IoCheckmark /></span><span>{t('premiumP2')}</span></p>
                                <p className='flex items-center gap-2'><span><IoCheckmark /></span><span>{t('premiumP3')}</span></p>
                                <p className='flex items-center gap-2'><span><IoCheckmark /></span><span>{t('premiumP4')}</span></p>
                                <p className='flex items-center gap-2'><span><IoCheckmark /></span><span>{t('premiumP5')}</span></p>
                                <p className='flex items-center gap-2'><span><IoCheckmark /></span><span>{t('premiumP6')}</span></p>
                                <p className='flex items-center gap-2'><span><IoCheckmark /></span><span>{t('premiumP7')}</span></p>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className=' bg-blue-100 rounded-xl flex flex-col gap-2 px-10 py-8 shadow-lg card mt-5 lg:mt-0'>
                            <h2 className='text-3xl font-normal '>{t('_Premium')}+</h2>
                            <h1 className='flex items-end'><span className='flex gap-2 items-center font-bold text-4xl'><FaRupeeSign />1,133.33</span><span>/{t('Month')}</span></h1>
                            <button onClick={() => {
                                premiumPlus()

                            }} className='w-full flex items-center justify-center bg-blue-600 font-bold text-white rounded-full px-3 py-2 hover:bg-blue-500 active:bg-blue-600 duration-300 animate-pulse hover:animate-none'>{premiumPlusLoading ===true ?'Loading...' : <>{t('Subscribe')}</>}</button>
                            <div>
                                <p className='flex items-center gap-2 font-bold'>{t('premium_plus_heading')}</p>
                                <p className='flex items-center gap-2'><span><IoCheckmark /></span><span>{t('premium_plusP1')}</span></p>
                                <p className='flex items-center gap-2'><span><IoCheckmark /></span><span>{t('premium_plusP2')}</span></p>
                                <p className='flex items-center gap-2'><span><IoCheckmark /></span><span>{t('premium_plusP3')}</span></p>

                            </div>
                        </div>
                    </div>
                </>
                :
                <>
                    <div><Link to={'/home/feed'}><IoCloseSharp className='m-5 font-bold text-2xl  rounded-full ' /></Link></div>
                    <div className='w-screen flex flex-col gap-8 justify-center items-center mt-10'>
                        <h1 className='lg:text-6xl md:text-4xl sm:text-3xl text-2xl font-bold'>{t('Upgrade to Premium')}</h1>
                        <h2 className='lg:hidden md:text-lg sm:text-sm text-sm font-semibold'>Enjoy an enhanced experience, exclusive creator tools,<br /> top-tier verification and security.</h2>
                        <h2 className='lg:text-xl md:text-lg sm:text-sm text-sm font-semibold'>Enjoy an enhanced experience, exclusive creator tools, top-tier verification and security.</h2>
                    </div>
                    <div className="flex items-center w-full justify-center mt-10">
                        <div className="flex p-1 rounded-full bg-gray-200 w-fit items-center justify-center">
                            <button onClick={()=>setMonthly(true)} className="bg-white rounded-full m-1 px-4 py-3 font-bold text-lg w-32 flex items-center justify-center active:scale-90 duration-200">{t('Monthly')}</button>
                            <button onClick={()=>setMonthly(false)} className="bg-blue-500 text-white rounded-full m-1 px-4 py-3 font-bold text-lg w-32 flex items-center justify-center active:scale-90 duration-200">{t('Yearly')}</button>
                        </div>
                    </div>
                    <div action="/create-checkout-session" method="POST" className='flex items-center justify-center mt-20 lg:flex-row flex-col lg:gap-0 gap-4 md:flex-row  md:flex-wrap'>
                        {/* Card 1 */}
                        <div className=' bg-gray-100 rounded-xl flex flex-col gap-2 px-10 py-8 shadow-lg card'>
                            <h2 className='text-3xl font-normal '>{t('Basic')}</h2>
                            <h1 className='flex items-end'><span className='flex gap-2 items-center font-bold text-4xl'><FaRupeeSign />2,500</span><span>/{t('Year')}</span></h1>
                            <button onClick={() => {

                                basicYearly()

                            }}

                                className='w-full flex items-center justify-center bg-blue-600 font-bold text-white rounded-full px-3 py-2 hover:bg-blue-500 active:bg-blue-600 duration-300'>{basicLoading ===true ?'Loading...' : <>{t('Subscribe')}</>}</button>
                            <div>
                                <p className='flex items-center gap-2'><span><IoCheckmark /></span><span>{t('basicP1')}</span></p>
                                <p className='flex items-center gap-2'><span><IoCheckmark /></span><span>{t('basicP2')}</span></p>
                                <p className='flex items-center gap-2'><span><IoCheckmark /></span><span>{t('basicP3')}</span></p>
                                <p className='flex items-center gap-2'><span><IoCheckmark /></span><span>{t('basicP4')}</span></p>
                                <p className='flex items-center gap-2'><span><IoCheckmark /></span><span>{t('basicP5')}</span></p>
                                <p className='flex items-center gap-2'><span><IoCheckmark /></span><span>{t('basicP6')}</span></p>
                                <p className='flex items-center gap-2'><span><IoCheckmark /></span><span>{t('basicP7')}</span></p>
                            </div>
                        </div>
                        {/* Card 2 */}
                        <div className=' bg-gray-100 rounded-xl flex flex-col gap-2 px-10 py-8 shadow-lg mx-20 card'>
                            <h2 className='text-3xl font-normal '>{t('_Premium')}</h2>
                            <h1 className='flex items-end'><span className='flex gap-2 items-center font-bold text-4xl'><FaRupeeSign />6,500</span><span>/{t('Year')}</span></h1>
                            <button onClick={() => {
                                premiumYearly()

                            }} className='w-full flex items-center justify-center bg-blue-600 font-bold text-white rounded-full px-3 py-2 hover:bg-blue-500 active:bg-blue-600 duration-300'>{premiumLoading ===true ?'Loading...' : <>{t('Subscribe')}</>}</button>
                            <div>
                                <p className='flex items-center gap-2 font-bold'>{t('premium_heading')}</p>
                                <p className='flex items-center gap-2'><span><IoCheckmark /></span><span>{t('premiumP1')}</span></p>
                                <p className='flex items-center gap-2'><span><IoCheckmark /></span><span>{t('premiumP2')}</span></p>
                                <p className='flex items-center gap-2'><span><IoCheckmark /></span><span>{t('premiumP3')}</span></p>
                                <p className='flex items-center gap-2'><span><IoCheckmark /></span><span>{t('premiumP4')}</span></p>
                                <p className='flex items-center gap-2'><span><IoCheckmark /></span><span>{t('premiumP5')}</span></p>
                                <p className='flex items-center gap-2'><span><IoCheckmark /></span><span>{t('premiumP6')}</span></p>
                                <p className='flex items-center gap-2'><span><IoCheckmark /></span><span>{t('premiumP7')}</span></p>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className=' bg-blue-100 rounded-xl flex flex-col gap-2 px-10 py-8 shadow-lg card mt-5 lg:mt-0'>
                            <h2 className='text-3xl font-normal '>{t('_Premium')}+</h2>
                            <h1 className='flex items-end'><span className='flex gap-2 items-center font-bold text-4xl'><FaRupeeSign />11,000</span><span>/{t('Year')}</span></h1>
                            <button onClick={() => {
                                premiumPlusYearly()

                            }} className='w-full flex items-center justify-center bg-blue-600 font-bold text-white rounded-full px-3 py-2 hover:bg-blue-500 active:bg-blue-600 duration-300 animate-pulse hover:animate-none'>{premiumPlusLoading ===true ?'Loading...' : <>{t('Subscribe')}</>}</button>
                            <div>
                                <p className='flex items-center gap-2 font-bold'>{t('premium_plus_heading')}</p>
                                <p className='flex items-center gap-2'><span><IoCheckmark /></span><span>{t('premium_plusP1')}</span></p>
                                <p className='flex items-center gap-2'><span><IoCheckmark /></span><span>{t('premium_plusP2')}</span></p>
                                <p className='flex items-center gap-2'><span><IoCheckmark /></span><span>{t('premium_plusP3')}</span></p>

                            </div>
                        </div>
                    </div>
                </>
            }





        </div>
    )





}
export default Premium




