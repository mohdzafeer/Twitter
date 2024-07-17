import { createContext, useContext, useEffect, useState } from "react"


const LanguageContext=createContext()

export const useLang=()=>useContext(LanguageContext)

const LanguageProvider = ({children}) => {
    const [lang,setLang]=useState(()=>{
        const savedLang=localStorage.getItem('lang')
        return savedLang || 'en'
    })
    
    useEffect(()=>{
        localStorage.setItem('lang',lang)
    },[lang])


    return (
        <LanguageContext.Provider value={{lang,setLang}}>
            {children}
        </LanguageContext.Provider>
    )
}
export  {LanguageContext ,LanguageProvider }