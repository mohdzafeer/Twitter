// import react from 'react'
import { useContext } from 'react'
import { useMatch, useResolvedPath } from 'react-router'
import { Link } from 'react-router-dom'
import { LanguageContext, useLang } from '../../LanguageContext'
const CustomLinks = ({ children, to, ...props }) => {
    let resolved = useResolvedPath(to)
    let match = useMatch({ path: resolved.pathname, end: true })

    const {lang}=useLang()
    const dynamicClassText=lang==='en'? "skyblue" : lang==='hn' ? 'orange' : lang==='fr' ? 'red':lang==='sp' ? 'blue':lang==='pr'?'pink':lang==='bn'?'green':lang==='tm'?'rose': ''

    return (
        <div>
            <Link
                
                style={{
                    
                    color: match ? dynamicClassText : 'black',
                   
                    
                }}
                to={to}
                {...props}
            >
                {children}
            </Link>
        </div>
    )
}
export default CustomLinks