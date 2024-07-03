// import { useAuthState } from 'react-firebase-hooks/auth';
import { Sidebar } from './Sidebar';
import { Widgets } from './Widgets';
import { Outlet } from 'react-router';
// import { auth } from '../../firebase.init';

import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from 'react-router-dom';

// import useLoggedInUser from '../../hooks/useLoggedInUser';
export const Home = () => {

    // const user = useAuthState(auth)
    // console.log(user[0].email)
    // const [loggedinuser]=useLoggedInUser()
    // console.log(loggedinuser)  .

    return (
        <div className='flex h-screen w-screen relative'>
            <div className='hidden lg:inline-flex flex-col px-16 py-10 lg:max-w-5/12 border-r-2 border-opacity-50 border-blue-200  '>
                <Sidebar className='w-full' />
            </div>
            <div className='lg:hidden'>
                <Link to={'/home/sidebar'} className='h-screen bg-white flex justify-center text-xl px-2 py-8'><GiHamburgerMenu/></Link>
            </div>
            <div className='flex flex-col lg:px-5 px-1 py-5 lg:mx-7 mx-1 lg:w-5/12 w-full  lg:border-r-2 border-opacity-50 border-blue-200 overflow-y-scroll scrollbar-none' >
                <Outlet />
            </div>
            <div className='hidden lg:inline-flex flex-col px-5 py-10 w-4/12  overflow-y-scroll scrollbar-none'>
                <Widgets />
            </div>


        </div>
    )
}