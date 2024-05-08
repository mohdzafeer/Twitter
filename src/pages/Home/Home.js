
import { useAuthState } from 'react-firebase-hooks/auth';
import { Main } from './Main';
import { Sidebar } from './Sidebar';
import { Widgets } from './Widgets';
import { auth } from '../../firebase.init';
import { signOut } from 'firebase/auth';
import { Outlet, useNavigate } from 'react-router';
export const Home=()=>{
    

    return (
        <div className='flex h-screen w-screen'>
            <div className='flex flex-col px-16 py-10 w-3/12 border-r-2 border-opacity-50 border-blue-200'>
               <Sidebar />
            </div>
            <div className='flex flex-col px-16 py-10 mx-7 w-5/12  border-r-2 border-opacity-50 border-blue-200' >
                <Outlet/>
            </div>
            <div className='flex flex-col px-16 py-10 w-3/12  border-r-2 border-opacity-50 border-blue-200'>
                <Widgets/>
            </div>
            
        </div>
    )
}