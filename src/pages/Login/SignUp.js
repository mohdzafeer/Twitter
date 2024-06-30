import twitter from '../../assets/Images/TwitterLogin.jpg'
import twitterlogo from '../../assets/Images/Logo_of_Twitter.svg.webp'
import Google from '../../assets/Images/Google.png'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth, provider } from '../../firebase.init'
import {  signInWithPopup } from 'firebase/auth'
import{useCreateUserWithEmailAndPassword}from 'react-firebase-hooks/auth'
import axios from 'axios'
import { LoadingPage } from '../LoadingPage/LoadingPage'


export const SignUp = () => {
    const [name,setName]=useState('')
    const [username,setUsername]=useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
        
        
    ]=useCreateUserWithEmailAndPassword(auth)

    if(loading){
        console.log("Loading...")
        
        
    }

    if(error){
        console.log(error.message)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(email,password)
         
         const SigninwithEmailAndPassword = async () => {
            const result=await createUserWithEmailAndPassword(email, password)
            // console.log(result)
            navigate("/")
        }

        SigninwithEmailAndPassword()
        //  navigate('/')

        const user={
            username,
            name,
            email,

        }

        axios.post(`http://localhost:5000/register`, user)
        

    }

    console.log(user)

    const navigate=useNavigate();

    const SigninwithGoogle = async () => {
        const result=await signInWithPopup(auth,provider)
        console.log(result)
        navigate("/")
    }

    // const SignupWithEmailAndPassword=()=>{
    //     createUserWithEmailAndPassword(auth,email,password).then((userCredential)=>{
    //         const user=userCredential.user;
    //         navigate("/");
    //     })
    //    .catch((error)=>{
    //     const errorcode=error.code;
    //     const errormessage=error.message;
    //    })
       
    // }
 
    return (
        <div className='h-screen w-screen flex'>
            <div className='w-2/4 overflow-hidden hidden lg:inline-flex '><img src={twitter} className=' h-screen' alt='Twitter Image' /></div>
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
                        className='flex flex-col items-center lg:items-start'
                    >
                        <input 
                        className=' border-2 flex items-center border-black  lg:w-2/4 w-10/12 rounded-lg shadow-xl lg:m-5 m-2 h-12 px-3 py-1 font-semibold bg-blue-100'
                        type='text'
                        placeholder='@username'
                        onChange={(e)=>setUsername(e.target.value)}
                        />
                        <input 
                        className=' border-2 flex items-center border-black  lg:w-2/4 w-10/12 rounded-lg shadow-xl lg:m-5 m-2 h-12 px-3 py-1 font-semibold bg-blue-100'
                        type='text'
                        placeholder='Display Name'
                        onChange={(e)=>setName(e.target.value)}
                        />
                        <input
                            className=' border-2 flex items-center border-black  lg:w-2/4 w-10/12 rounded-lg shadow-xl lg:m-5 m-2 h-12 px-3 py-1 font-semibold bg-blue-100'
                            type='email' 
                            placeholder='Email'
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                            className=' border-2 flex items-center border-black lg:w-2/4 w-10/12 rounded-lg shadow-xl lg:m-5 m-2 h-12 px-3 py-1 font-semibold bg-blue-100'
                            type='password' 
                            placeholder='Password'
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <input
                            className='cursor-pointer border-2 border-black hover:scale-105  lg:w-2/4 w-10/12 rounded-full shadow-xl lg:m-5 m-2 h-14 px-3 py-1 hover:bg-blue-300 duration-200 font-extrabold text-lg active:bg-blue-500'
                            type='submit' 
                            value='Sign Up'
                        />

                    </form>
                </div>
                <div className='flex  justify-center  items-center lg:w-2/4 w-11/12 font-semibold mt-2'>
                    <span>Already have an Account? </span><Link to='/login' className='text-blue-500 font-bold mx-3 hover:underline '> Login Now</Link>
                </div>
                <div className='flex justify-center flex-col items-center lg:w-2/4 w-11/12 font-semibold mt-5'>
                    <h1>OR</h1>
                </div>
                <div className='flex flex-col items-center lg:items-start'>
                    <button
                        className='flex items-center gap-3 border-2 hover:scale-105 duration-200 border-black shadow-xl rounded-full m-5 w-10/12 lg:w-2/4 px-4 py-2 active:bg-gray-300 justify-center'
                        onClick={()=>
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