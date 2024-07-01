
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
const Failed = () => {

    const navigate=useNavigate()
    const [seconds,setSeconds]=useState(10)

    const time=()=>{
        setInterval(() => {
            setSeconds(seconds-1)
        }, 1000);
        if(seconds===0){
            navigate('/home/feed')
        }
        
        
    }

    time()

    return (
        <div className='flex justify-center items-center h-screen flex-col'>
            <h1 className='font-bold text text-3xl text-red-500'>Payment Failed</h1>
            <Link to={'/premium'} className='bg-black px-5 py-3 rounded-full mt-5 text-white hover:bg-gray-800 duration-200 active:bg-black font-bold'>Try Again</Link>
            <Link to={'/home/feed'} className='bg-blue-500 px-5 py-3 rounded-full mt-5 text-white hover:bg-blue-600 duration-200 active:bg-blue-500 font-bold'>Go to Home</Link>
            {
                seconds>=1 ? <p className='font-semibold m-5'>Automatically redirecting to Home in {seconds-1} seconds</p>
                :
                <p className='font-semibold m-5'>Redirecting to Home...</p>
            }
        </div>
    )
}
export default Failed