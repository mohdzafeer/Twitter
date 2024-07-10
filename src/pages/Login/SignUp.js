
import twitter from '../../assets/Images/TwitterLogin.jpg'
import twitterlogo from '../../assets/Images/Logo_of_Twitter.svg.webp'
import Google from '../../assets/Images/Google.png'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth, provider } from '../../firebase.init'
import { signInWithPopup } from 'firebase/auth'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth'
import axios from 'axios'
import { TextField } from '@mui/material'
import { FaCheck } from "react-icons/fa";


export const SignUp = () => {
    const [name, setName] = useState('')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,


    ] = useCreateUserWithEmailAndPassword(auth)

    if (loading) {
        console.log("Loading...")


    }

    if (error) {
        console.log(error.message)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!username || !name || !email || !password) {

            alert("please fill in all the fields")
        }
        else {

            e.preventDefault()
            console.log(email, password)

            const SigninwithEmailAndPassword = async () => {
                await createUserWithEmailAndPassword(email, password)
                
                navigate("/")
            }

            SigninwithEmailAndPassword()
           

            const user = {
                username,
                name,
                email,

            }

            axios.post(`https://twitter-bcakend.vercel.app/register`, user)
        }


    }

    console.log(user)

    const navigate = useNavigate();

    const SigninwithGoogle = async () => {
        const result = await signInWithPopup(auth, provider)
        console.log(result)
        navigate("/")
    }

    

    const [isOTPsent, setIsOTPsent] = useState(false)
    const [isOTPverified, setIsOTPverified] = useState(false)
    const [message, setMessage] = useState('')
    const [otp,setOtp]=useState('')



    const handleSendOtp = async () => {
        try {
            
            // await axios.post('https://twitter-bcakend.vercel.app/send-otp', { email });
            await axios.post('https://twitter-backend-aexh.onrender.com/send-otp', { email });
            setIsOTPsent(true);
        } catch (error) {
            console.error('Error sending OTP', error);
            alert(message)
        }
        
    }

    const handleVerifyOtp = async () => {
        console.log('Verifying OTP with:', { email, otp });

        try {
            const response = await axios.post('https://twitter-backend-aexh.onrender.com/verify-otp', { email, otp },
                {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            );
            if (response.data.message === 'OTP verified') {
                setIsOTPverified(true);
                
            }
            
            else {
                setIsOTPverified(false);
                alert("Invalid OTP")
            }
        } catch (error) {
            console.error('Error verifying OTP', error);
            if (error.response) {
                console.error('Response data:', error.response.data);
                setMessage(error.response.data.error);
            } else {
                setMessage('An error occurred');
            }
        }
    }

    return (
        <div className='h-screen w-screen flex'>
            <div className='w-2/4 overflow-hidden hidden lg:inline-flex '><img src={twitter} className=' h-screen' alt='Twitter' /></div>
            <div className='lg:w-2/4 flex flex-col w-full'>
                <div className='flex flex-col justify-start p-10'>
                    <img src={twitterlogo} width={50} alt='Twitter Logo' />
                    <h1 className='font-extrabold lg:text-5xl text-4xl mt-5'>Happening now</h1>
                    <h1 className='font-bold lg:text-3xl text-2xl mt-5'>Join Twitter Today</h1>
                </div>
                <div>
                    <h1 className='font-bold text-2xl mx-5 px-5'>Sign Up to Twitter</h1>
                    <form
                        onSubmit={handleSubmit}
                        className='flex flex-col items-center lg:items-start pt-5 lg:px-0 px-10 gap-4'
                    >
                        <div className='flex items-center gap-4 justify-start w-full'>
                            <TextField
                                
                                className='w-1/2'
                                type='email'
                                label='Email'
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            {
                                isOTPsent ===false ? <p
                                onClick={() => { handleSendOtp() }}
                                className='text-lg font-semibold text-blue-500 cursor-pointer hover:text-blue-600 duration-200 hover:underline'>Send OTP</p> : <p className='text-green-400 font-semibold text-lg flex items-center gap-2'>OTP Sent <FaCheck/></p>
                            }
                        </div>
                        {
                            isOTPsent ===true ?
                            <>
                            
                            {
                                isOTPverified ===false 
                                ?
                                <>
                                <div className='flex items-center gap-4 justify-start w-full'>
                                <TextField
                                    
                                    className='w-1/2'
                                    type='text'
                                    label='OTP'
                                    onChange={(e) => setOtp(e.target.value)}
                                />
                                <p
                                    onClick={() => { handleVerifyOtp() }}
                                    className='text-lg font-semibold text-blue-500 cursor-pointer hover:text-blue-600 duration-200 hover:underline'>Submit OTP</p>
                            </div>
                                </>
                                :
                                <>
                                <p className='text-lg text-green-400 font-semibold flex items-center gap-2'>OTP verified<FaCheck/></p>
                                </>
                            }
                            </>
                            :''
                        }
                        {
                            isOTPverified ===true ?
                            <>
                                
                                <TextField
                                    
                                    className='w-1/2'
                                    type='text'
                                   
                                    label='@username'
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                                <TextField
                                    
                                    className='w-1/2'
                                    type='text'
                                    label='Display Name'
                                    onChange={(e) => setName(e.target.value)}
                                />
                                <TextField
                                    
                                    className='w-1/2'
                                    type='password'
                                    label='Password'
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <input
                                    className='cursor-pointer border-2 border-black   lg:w-2/4 w-10/12 hover:rounded-full shadow-xl lg:my-5 my-2 h-14 px-3 py-1 hover:bg-blue-300 duration-200 font-extrabold text-lg active:bg-blue-500'
                                    type='submit'
                                    value='Sign Up'
                                />
                            </>
                            : ''
                        }

                    </form>
                </div>
                <div className='flex  justify-center  items-center lg:w-2/4 w-11/12 font-semibold mt-2'>
                    <span>Already have an Account? </span><Link to='/login' className='text-blue-500 ml-3 font-bold hover:underline '> Login Now</Link>
                </div>
                <div className='flex justify-center flex-col items-center lg:w-2/4 w-11/12 font-semibold mt-5'>
                    <h1>OR</h1>
                </div>
                <div className='flex flex-col items-center lg:items-start'>
                    <button
                        className='flex items-center gap-3 border-2  duration-200 border-black shadow-xl hover:rounded-full ease-in-out my-5 w-10/12 lg:w-2/4 px-4 py-2 active:bg-gray-300 justify-center'
                        onClick={() =>
                            SigninwithGoogle()

                        }

                    >

                        <img
                            src={Google}
                            width={50}
                            alt='GoogleImage'

                        /><span className='text-xl font-bold '>Continue with Google</span>
                    </button>
                </div>
            </div>
        </div>
    )
}