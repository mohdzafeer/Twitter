import { FaSearch } from "react-icons/fa";
import { TwitterTimelineEmbed, TwitterTweetEmbed, } from 'react-twitter-embed'
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
// import { useState } from "react";
import LanguageSelector from "./LanguageSelector";
import UserHistory from "./UserHistory";
import { useContext } from "react";
import { LanguageContext, useLang } from "../../LanguageContext";


export const Widgets = () => {

    const { t } = useTranslation();

    // const changeLanguage = (lng) => {
    //     i18n.changeLanguage(lng);
    // };

    // const [selectedLanguage, setSelectedLanguage] = useState('');

    // const handleSelectChange = (event) => {
    //     const value = event.target.value;
    //     setSelectedLanguage(value);
    //     runFunction(value); // Call your function here
    // };

    // const runFunction = (value) => {
    //     // Your function logic here
    //     // console.log(`Selected language: ${value}`);
    //     changeLanguage(`${value}`)
    // };
    
    const{lang}=useLang()
    const dynamicClassButton=lang==='en'? "bg-blue-500 hover:bg-blue-600 active:bg-blue-500" : lang==='hn' ? 'bg-orange-500 hover:bg-orange-600 active:bg-orange-500' : lang==='fr' ? 'bg-red-500 hover:bg-red-600 active:bg-red-500':lang==='sp' ? 'bg-blue-500 hover:bg-blue-600 active:bg-blue-500':lang==='pr'?'bg-pink-500 hover:bg-pink-600 active:bg-pink-500':lang==='bn'?'bg-green-500 hover:bg-green-600 active:bg-green-500':lang==='tm'?'bg-rose-500 hover:bg-rose-600 active:bg-rose-500': ''

    return (
        <div className="px-2">
            <div className="flex gap-4 items-center">
                <Link className="lg:hidden m-2 text-xl" to={'/home/feed'}><IoMdArrowRoundBack /></Link>
                <p className="lg:text-4xl text-lg font-bold">{t('Widgets')}</p>
            </div>
            {/* <div className="flex items-center  my-5">
                <select value={selectedLanguage} onChange={handleSelectChange} className="bg-blue-500 text-lg px-3 py-2 font-bold rounded-full text-white shadow-xl hover:bg-blue-600 duration-200">
                    
                    <option value="en">English</option>
                    <option value="fr">French</option>
                    <option value="hn">Hindi</option>
                    <option value="sp">Spanish</option>
                    <option value="pr">Portuguese</option>
                    <option value="tm">Tamil</option>
                    <option value="bn">Bengali</option>
                    
                </select>
            </div> */}
            <div className="flex items-center gap-4">
            <LanguageSelector/>
            <UserHistory/>
            </div>
            <div className="flex items-center gap-5">
                <input className="px-3 py-2 border-gray-400 border-2 font-sans rounded-full w-10/12 bg-gray-300" type='text' placeholder={t('Search')}></input>
                <FaSearch className="text-xl cursor-pointer opacity-60 hover:opacity-100 hover:scale-105 duration-150" />
            </div>

            <h1 className="mt-5 mb-10 text-3xl font-bold">{t(`What's happening`)}!</h1>



            <div>
                <TwitterTweetEmbed tweetId={'1557187138352861186'} />

            </div>
            <div>
                <TwitterTimelineEmbed
                    screenName='elonmusk'
                    sourceType='profile'
                    options={{ heigth: 400 }}
                />
            </div>
        </div>
    )
}