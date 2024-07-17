// import react from 'react'
import { FaMoneyBillAlt } from "react-icons/fa";
import { TbDeviceIpadShare } from "react-icons/tb";
import { PiSuitcaseSimpleFill } from "react-icons/pi";
import { FaMicrophoneAlt } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";
import { useTranslation } from 'react-i18next';
import { useContext } from "react";
import { LanguageContext, useLang } from "../../LanguageContext";
const More = () => {

    const { t} = useTranslation();

    const{lang}=useLang()
    const dynamicClassHover=lang==='en'? "hover:bg-blue-200" : lang==='hn' ? 'hover:bg-orange-200' : lang==='fr' ? 'hover:bg-red-200':lang==='sp' ? 'hover:bg-blue-200':lang==='pr'?'hover:bg-pink-200':lang==='bn'?'hover:bg-green-200':lang==='tm'?'hover:bg-rose-200': ''
   

    return (
        <div className='flex flex-col gap-8 font-bold text-3xl'>
            <p className={`flex justify-start items-center gap-5 rounded-full  cursor-pointer px-3 py-2 ${dynamicClassHover}`}><FaMoneyBillAlt/><span>{t('Monetization')}</span></p>
            <p className={`flex justify-start items-center gap-5 rounded-full  cursor-pointer px-3 py-2 ${dynamicClassHover}`}><TbDeviceIpadShare/><span>{t('Advertisements')}</span></p>
            <p className={`flex justify-start items-center gap-5 rounded-full  cursor-pointer px-3 py-2 ${dynamicClassHover}`}><PiSuitcaseSimpleFill/><span>{t('Jobs')}</span></p>
            <p className={`flex justify-start items-center gap-5 rounded-full  cursor-pointer px-3 py-2 ${dynamicClassHover}`}><FaMicrophoneAlt/><span>{t('Create your Own space')}</span></p>
            <p className={`flex justify-start items-center gap-5 rounded-full  cursor-pointer px-3 py-2 ${dynamicClassHover}`}><IoSettings/><span>{t('Settings and Privacy')}</span></p>
        </div>
    )
}
export default More