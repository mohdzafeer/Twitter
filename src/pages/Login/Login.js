import twitter from '../../assets/Images/TwitterLogin.jpg'
import twitterlogo from '../../assets/Images/Logo_of_Twitter.svg.webp'
import Google from '../../assets/Images/Google.png'
import { useState } from 'react'
import { auth, provider } from '../../firebase.init'
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth'
import { Link,  useNavigate } from 'react-router-dom'
import { signInWithPopup, } from 'firebase/auth'
import { LoadingPage } from '../LoadingPage/LoadingPage'
import { TextField } from '@mui/material'

export const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate=useNavigate();

    const[
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ]=useSignInWithEmailAndPassword(auth)

    if(user){
        console.log(user)
        navigate('/')
    }
    if(error){
        console.log(error.message)
    }
    if(loading){
        console.log('loading.....')
        return(
            <LoadingPage/>
        )
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(email, password)
        signInWithEmailAndPassword(email, password)
        if(user){
            navigate('/')
        }
    }

    

    const SigninwithGoogle = async () => {
        const result = await signInWithPopup(auth, provider)
        console.log(result)
        navigate("/")
    }

    // const SigninwithEmail = () => {
    //     signInWithEmailAndPassword(auth, email, password)
    //         .then((userCredential) => {

    //             const user = userCredential.user;
    //             navigate("/");
    //         })
    //         .catch((error) => {
    //             return(
    //                 <div>User does not Exist</div>
    //             )
    //         });
            
    // }


    return (
        <div className='h-screen w-screen flex'>
            <div className='w-2/4 overflow-hidden hidden lg:inline-flex '><img src={twitter} className=' h-screen' alt='Twitter' /></div>
            <div className='lg:w-2/4 flex flex-col w-full'>
                <div className='flex flex-col justify-start p-10'>
                    <img src={twitterlogo} width={150} alt='Twitter Logo' />
                    <h1 className='font-extrabold lg:text-7xl text-4xl mt-10'>Happening now</h1>
                    <h1 className='font-bold lg:text-4xl text-2xl mt-10'>Welcome back!</h1>
                </div>
                <div>
                    <h1 className='font-bold text-2xl mx-5 px-5'>Login in to Twitter</h1>
                    <form
                        onSubmit={ handleSubmit}
                        className='flex flex-col items-center lg:items-start gap-4 pt-4'
                    >
                        <TextField
                            // className=' border-2 flex items-center border-black lg:w-2/4 w-10/12 rounded-lg shadow-xl lg:m-5 m-2 h-12 px-3 py-1 font-semibold bg-blue-100'
                            className='w-1/2'
                            type='email'
                            label='Email'
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <TextField
                            // className=' border-2 flex items-center border-black lg:w-2/4 w-10/12 rounded-lg shadow-xl lg:m-5 m-2 h-12 px-3 py-1 font-semibold bg-blue-100'
                            className='w-1/2'
                            type='password'
                            label='Password'
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <input
                            className='cursor-pointer border-2 border-black   lg:w-2/4 w-10/12 hover:rounded-full ease-in-out  shadow-xl lg:my-5 my-2 h-14 px-3 py-1 hover:bg-blue-300 duration-200 font-extrabold text-lg active:bg-blue-500'
                            type='submit' value='Log In'
                            
                        />

                    </form>
                </div>
                <div className='flex  justify-center  items-center lg:w-2/4 w-11/12 font-semibold mt-2'>
                    <span>New to Twitter? </span><Link to='/signup' className='text-blue-500 font-bold mx-3 hover:underline '> Signup Now</Link>
                </div>
                <div className='flex justify-center flex-col items-center lg:w-2/4 w-11/12 font-semibold mt-5'>
                    <h1>OR</h1>
                </div>
                <div className='flex flex-col items-center lg:items-start'>
                    <button
                        className='flex items-center gap-3 border-2  duration-200 border-black shadow-xl hover:rounded-full my-5 w-10/12 lg:w-2/4 px-4 py-2 active:bg-gray-300 justify-center'
                        onClick={SigninwithGoogle} >

                        <img src={Google} width={50} alt='GoogleImage' /><span className='text-xl font-bold '>Continue with Google</span>
                    </button>
                </div>
            </div>
        </div>
    )
}