
import { IoCloseSharp } from "react-icons/io5";
import { FaRupeeSign } from "react-icons/fa";
import { IoCheckmark } from "react-icons/io5";
import { Link } from 'react-router-dom';
import './Premium.css'
import axios from 'axios';
import { useContext, useState } from "react";
import { useTranslation } from "react-i18next";
import { LanguageContext, useLang } from "../../LanguageContext";










const Premium = () => {

    const { t } = useTranslation();

    const [basicLoading, setBasicLoading] = useState(false)
    const [premiumLoading, setPremiumLoading] = useState(false)
    const [premiumPlusLoading, setPremiumPlusLoading] = useState(false)





    const basic = async () => {
        setBasicLoading(true)

        // const response = await axios.post('https://twitter-bcakend.vercel.app/subscription', {
        const response = await axios.post('https://twitter-backend-aexh.onrender.com/subscription', {
        // const response = await axios.post('http://localhost:5000/subscription', {
            amount: 21587,
            plan_name: 'Twitter Basic Monthly Plan',
            details: "Small reply boost -Encrypted direct messages -Bookmark folders -Highlight tab -Edit post -Post longer videos -Longer posts",
           
        })
        if (response && response.status === 200) {
            window.location.href = response.data.url
            console.log(response)
        }
        setBasicLoading(false)
    }
    const basicYearly = async () => {
        setBasicLoading(true)
        const response = await axios.post('https://twitter-backend-aexh.onrender.com/subscription', {
            amount: 250000,
            plan_name: 'Twitter Basic Yearly Plan',
            details: "Small reply boost -Encrypted direct messages -Bookmark folders -Highlight tab -Edit post -Post longer videos -Longer posts"
        })
        if (response && response.status === 200) {
            window.location.href = response.data.url
            console.log(response)
        }
        setBasicLoading(false)

    }
    const premium = async () => {
        setPremiumLoading(true)
        const response = await axios.post('https://twitter-backend-aexh.onrender.com/subscription', {
            amount: 56666,
            plan_name: 'Twitter Premim Monthly Plan',
            details: "Half Ads in For You and Following -Larger reply boost -Get paid to post -Checkmark -Grok Early Access -Twitter Pro, Analytics, Media Studio -Creator Subscriptions"
        })
        if (response && response.status === 200) {
            window.location.href = response.data.url
            console.log(response)
        }
        setPremiumLoading(false)
    }
    const premiumYearly = async () => {
        setPremiumLoading(true)
        const response = await axios.post('https://twitter-backend-aexh.onrender.com/subscription', {
            amount: 650000,
            plan_name: 'Twitter Premium Yearly Plan',
            details: "Half Ads in For You and Following -Larger reply boost -Get paid to post -Checkmark -Grok Early Access -Twitter Pro, Analytics, Media Studio -Creator Subscriptions"
        })
        if (response && response.status === 200) {
            window.location.href = response.data.url
            console.log(response)
        }
        setPremiumLoading(false)
    }
    const premiumPlus = async () => {
        setPremiumPlusLoading(true)
        const response = await axios.post('https://twitter-backend-aexh.onrender.com/subscription', {
            amount: 113333,
            plan_name: 'Twitter Premium Plus Monthly Plan',
            details: "No Ads in for You and Following -Largest reply boost -White Articles"
        })
        if (response && response.status === 200) {
            window.location.href = response.data.url
            console.log(response)
        }
        setPremiumPlusLoading(false)
    }
    const premiumPlusYearly = async () => {
        setPremiumPlusLoading(true)
        const response = await axios.post('https://twitter-backend-aexh.onrender.com/subscription', {
            amount: 1100000,
            plan_name: 'Twitter Premium Plus Yearly Plan',
            details: "No Ads in for You and Following -Largest reply boost -White Articles"
        })
        if (response && response.status === 200) {
            window.location.href = response.data.url
            console.log(response)
        }
        setPremiumPlusLoading(false)
    }


    const [monthly, setMonthly] = useState(true)


    const{lang}=useLang()
    const dynamicClassBackground=lang==='en'? "bg-white" : lang==='hn' ? 'bg-orange-100' : lang==='fr' ? 'bg-red-100':lang==='sp' ? 'bg-blue-100':lang==='pr'?'bg-pink-100':lang==='bn'?'bg-green-100':lang==='tm'?'bg-rose-100': ''
    const dynamicClassPremiumBackground=lang==='en'? "bg-blue-200" : lang==='hn' ? 'bg-orange-200' : lang==='fr' ? 'bg-red-200':lang==='sp' ? 'bg-blue-200':lang==='pr'?'bg-pink-200':lang==='bn'?'bg-green-200':lang==='tm'?'bg-rose-200': ''
    
    const dynamicClassButton=lang==='en'? "bg-blue-500 hover:bg-blue-600 active:bg-blue-500" : lang==='hn' ? 'bg-orange-500 hover:bg-orange-600 active:bg-orange-500' : lang==='fr' ? 'bg-red-500 hover:bg-red-600 active:bg-red-500':lang==='sp' ? 'bg-blue-500 hover:bg-blue-600 active:bg-blue-500':lang==='pr'?'bg-pink-500 hover:bg-pink-600 active:bg-pink-500':lang==='bn'?'bg-green-500 hover:bg-green-600 active:bg-green-500':lang==='tm'?'bg-rose-500 hover:bg-rose-600 active:bg-rose-500': ''

    return (
        <div className={`pb-5 h-screen m-0 ${dynamicClassBackground}`} >



            {monthly
                ?
                <>
                    <div><Link to={'/home/feed'}><IoCloseSharp className='font-bold text-2xl  rounded-full ' /></Link></div>
                    <div className='w-screen flex flex-col gap-8 justify-center items-center mt-10'>
                        <h1 className='lg:text-6xl md:text-4xl sm:text-3xl text-2xl font-bold'>{t('Upgrade to Premium')}</h1>
                        {/* <h2 className='lg:hidden md:text-lg sm:text-sm text-sm font-semibold'>Enjoy an enhanced experience, exclusive creator tools,<br /> top-tier verification and security.</h2> */}
                        <h2 className='lg:text-xl md:text-lg sm:text-sm text-sm font-semibold'>{t('Enjoy an enhanced experience, exclusive creator tools, top-tier verification and security.')}</h2>
                    </div>
                    <div className="flex items-center w-full justify-center mt-10">
                        <div className="flex p-1 rounded-full bg-gray-200 w-fit items-center justify-center">
                            <button onClick={() => {
                                setMonthly(true)
                            }} className={`${dynamicClassButton} text-white rounded-full m-1 px-4 py-3 font-bold text-lg w-32 flex items-center justify-center active:scale-90 duration-200`}>{t('Monthly')}</button>
                            <button onClick={() => {
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

                                className={`w-full flex items-center justify-center b font-bold text-white rounded-full px-3 py-2  duration-300 ${dynamicClassButton}`}>{basicLoading === true ? 'Loading...' : <>{t('Subscribe')}</>}</button>
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

                            }} className={`w-full flex items-center justify-center b font-bold text-white rounded-full px-3 py-2  duration-300 ${dynamicClassButton}`}>{premiumLoading === true ? 'Loading...' : <>{t('Subscribe')}</>}</button>
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
                        <div className={`${dynamicClassPremiumBackground} rounded-xl flex flex-col gap-2 px-10 py-8 shadow-lg card mt-5 lg:mt-0`}>
                            <h2 className='text-3xl font-normal '>{t('_Premium')}+</h2>
                            <h1 className='flex items-end'><span className='flex gap-2 items-center font-bold text-4xl'><FaRupeeSign />1,133.33</span><span>/{t('Month')}</span></h1>
                            <button onClick={() => {
                                premiumPlus()

                            }}className={`w-full flex items-center justify-center b font-bold text-white rounded-full px-3 py-2  duration-300 ${dynamicClassButton} animate-pulse hover:animate-none`}>{premiumPlusLoading === true ? 'Loading...' : <>{t('Subscribe')}</>}</button>
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
                    <div><Link to={'/home/feed'}><IoCloseSharp className=' font-bold text-2xl  rounded-full ' /></Link></div>
                    <div className='w-screen flex flex-col gap-8 justify-center items-center mt-10'>
                        <h1 className='lg:text-6xl md:text-4xl sm:text-3xl text-2xl font-bold'>{t('Upgrade to Premium')}</h1>
                        {/* <h2 className='lg:hidden md:text-lg sm:text-sm text-sm font-semibold'>Enjoy an enhanced experience, exclusive creator tools,<br /> top-tier verification and security.</h2> */}
                        <h2 className='lg:text-xl md:text-lg sm:text-sm text-sm font-semibold'>{t('Enjoy an enhanced experience, exclusive creator tools, top-tier verification and security.')}</h2>
                    </div>
                    <div className="flex items-center w-full justify-center mt-10">
                        <div className="flex p-1 rounded-full bg-gray-200 w-fit items-center justify-center">
                            <button onClick={() => setMonthly(true)} className="bg-white rounded-full m-1 px-4 py-3 font-bold text-lg w-32 flex items-center justify-center active:scale-90 duration-200">{t('Monthly')}</button>
                            <button onClick={() => setMonthly(false)} className={` text-white rounded-full m-1 px-4 py-3 font-bold text-lg w-32 flex items-center justify-center active:scale-90 duration-200 ${dynamicClassButton}`}>{t('Yearly')}</button>
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

                            className={`w-full flex items-center justify-center b font-bold text-white rounded-full px-3 py-2  duration-300 ${dynamicClassButton}`}>{basicLoading === true ? 'Loading...' : <>{t('Subscribe')}</>}</button>
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

                            }} className={`w-full flex items-center justify-center b font-bold text-white rounded-full px-3 py-2  duration-300 ${dynamicClassButton}`}>{premiumLoading === true ? 'Loading...' : <>{t('Subscribe')}</>}</button>
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
                        <div className={`${dynamicClassPremiumBackground} rounded-xl flex flex-col gap-2 px-10 py-8 shadow-lg card mt-5 lg:mt-0`}>
                            <h2 className='text-3xl font-normal '>{t('_Premium')}+</h2>
                            <h1 className='flex items-end'><span className='flex gap-2 items-center font-bold text-4xl'><FaRupeeSign />11,000</span><span>/{t('Year')}</span></h1>
                            <button onClick={() => {
                                premiumPlusYearly()

                            }} className={`w-full flex items-center justify-center b font-bold text-white rounded-full px-3 py-2  duration-300 ${dynamicClassButton} animate-pulse hover:animate-none`}>{premiumPlusLoading === true ? 'Loading...' : <>{t('Subscribe')}</>}</button>
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




