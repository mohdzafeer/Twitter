import react from 'react'
import { useMatch, useResolvedPath } from 'react-router'
import { Link } from 'react-router-dom'
const CustomLinks = ({ children, to, ...props }) => {
    let resolved = useResolvedPath(to)
    let match = useMatch({ path: resolved.pathname, end: true })
    return (
        <div>
            <Link
                className='hover:bg-blue-200'
                style={{
                    color: match ? 'skyblue' : 'black',
                    
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