
import { Link } from 'react-router-dom'
const Failed = () => {

    return (
        <div className='flex justify-center items-center h-screen flex-col'>
            <h1 className='font-bold text text-3xl text-red-500'>Payment Failed</h1>
            <Link to={'/premium'} className='bg-black px-5 py-3 rounded-full mt-5 text-white hover:bg-gray-800 duration-200 active:bg-black font-bold'>Try Again</Link>
            <Link to={'/home/feed'} className='bg-blue-500 px-5 py-3 rounded-full mt-5 text-white hover:bg-blue-600 duration-200 active:bg-blue-500 font-bold'>Go to Home</Link>
        </div>
    )
}
export default Failed