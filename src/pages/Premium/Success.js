
import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
const Success = () => {
    const [seconds,setSeconds]=useState(5)
    const navigate=useNavigate()

    

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
            <h1 className='font-bold text text-5xl text-blue-500'>Payment Success</h1>
            <h2 className='mt-5 font-bold text-xl'>Email has been sent to you for your payment confirmation</h2>
            
            <Link to={'/home/feed'} className='bg-blue-500 px-5 py-3 rounded-full m-5 text-white hover:bg-blue-600 duration-200 active:bg-blue-500 font-bold'>Go to Home</Link>
            <p className='font-semibold m-5'>Automatically redirecting to Home in {seconds} seconds</p>
        </div>
    )
}
export default Success