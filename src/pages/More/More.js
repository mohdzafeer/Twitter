// import react from 'react'
import { FaMoneyBillAlt } from "react-icons/fa";
import { TbDeviceIpadShare } from "react-icons/tb";
import { PiSuitcaseSimpleFill } from "react-icons/pi";
import { FaMicrophoneAlt } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";
import { useTranslation } from 'react-i18next';
const More = () => {

    const { t} = useTranslation();

   

    return (
        <div className='flex flex-col gap-8 font-bold text-3xl'>
            <p className='flex justify-start items-center gap-5 rounded-full hover:bg-blue-100 active:bg-blue-200 cursor-pointer px-3 py-2'><FaMoneyBillAlt/><span>{t('Monetization')}</span></p>
            <p className='flex justify-start items-center gap-5 rounded-full hover:bg-blue-100 active:bg-blue-200 cursor-pointer px-3 py-2'><TbDeviceIpadShare/><span>{t('Advertisements')}</span></p>
            <p className='flex justify-start items-center gap-5 rounded-full hover:bg-blue-100 active:bg-blue-200 cursor-pointer px-3 py-2'><PiSuitcaseSimpleFill/><span>{t('Jobs')}</span></p>
            <p className='flex justify-start items-center gap-5 rounded-full hover:bg-blue-100 active:bg-blue-200 cursor-pointer px-3 py-2'><FaMicrophoneAlt/><span>{t('Create your Own space')}</span></p>
            <p className='flex justify-start items-center gap-5 rounded-full hover:bg-blue-100 active:bg-blue-200 cursor-pointer px-3 py-2'><IoSettings/><span>{t('Settings and Privacy')}</span></p>
        </div>
    )
}
export default More