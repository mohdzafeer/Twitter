
import { Link } from 'react-router-dom'
const Success = () => {

    return (
        <div className='flex justify-center items-center h-screen flex-col'>
            <h1 className='font-bold text text-3xl text-blue-500'>Payment Success</h1>
            
            <Link to={'/home/feed'} className='bg-blue-500 px-5 py-3 rounded-full m-5 text-white hover:bg-blue-600 duration-200 active:bg-blue-500 font-bold'>Go to Home</Link>
        </div>
    )
}
export default Success