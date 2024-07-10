import  { useState } from 'react'
import { MdOutlineAddPhotoAlternate } from "react-icons/md";
import axios from "axios"
import useLoggedInUser from '../../../hooks/useLoggedInUser';
// import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../../firebase.init';
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next';

// import Date from "./Date";
const TweetBox = () => {

    const [post, setpost] = useState("")
    const [imageURL, setimageURL] = useState("")
    // const [name, setName] = useState("")
    // const [username, setUsername] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [loggedInUser] = useLoggedInUser()
    // const [email, setEmail] = useState('')
    // const [date, setDate] = useState('')
    // const [time, setTime] = useState('')
    // console.log(loggedInUser)

    // const user = useAuthState(auth)



    const googleUserProfilePic = auth?.currentUser?.photoURL
    const userProfilePic = loggedInUser[0]?.profileImage ? loggedInUser[0]?.profileImage : googleUserProfilePic ? googleUserProfilePic : "https://cdn-icons-png.flaticon.com/512/149/149071.png"
    const Name = loggedInUser[0]?.name ? loggedInUser[0].name : auth.currentUser?.displayName;

    // const todays_date=new Date()
    // const hours=Date.getHours()
    // const minutes=date.getMinutes()
    const hours=new Date().getHours()
    const minutes=new Date().getMinutes()


    // const googleEmail = auth.currentUser?.email
    // const splitGoogleEmail = () => {
    //     const result = googleEmail?.split('@')
    //     return (result[0])
    // }
    // const googleUsername = splitGoogleEmail();

    const userName = loggedInUser[0]?.username ? loggedInUser[0].username : auth.currentUser?.email.split('@')[0];
    const Email = loggedInUser[0]?.email ? loggedInUser[0].email : auth.currentUser?.email;
    // const googleProfilePic=auth.currentUser?.photoURL ? auth.currentUser?.photoURL : "https://cdn-icons-png.flaticon.com/512/149/149071.png"



    const handleUploadImage = (e) => {

        setIsLoading(true)
        const image = e.target.files[0];
        // console.log(image);
        const formData = new FormData()
        formData.set('image', image)


        axios.post("https://api.imgbb.com/1/upload?key=9585d64d1aca3440fa5edba72a9abbdf", formData)
            .then(res => {

                setimageURL(res.data.data.display_url)
                console.log(res.data.data)
                setIsLoading(false)
                formData.set()
            })
            .catch((err) => {
                console.log(err)
                setIsLoading(false)
            })
    }

    const handleTweet = (e) => {

        if (post || imageURL) {
            e.preventDefault();
            e.target.reset()

            if (imageURL) {
                const userPost = {
                    profilePhoto: userProfilePic,
                    post: post,
                    photo: imageURL,
                    username: userName,
                    name: Name,
                    email: Email,
                    date: new Date(),
                    // time: date.getTime(),
                    hours:hours,
                    minutes: minutes,
                }
                console.log(userPost);
                fetch('https://twitter-backend-aexh.onrender.com/post', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(userPost)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                    })
            }
            else {
                const userPost = {
                    profilePhoto: userProfilePic,
                    post: post,
                    // photo: imageURL,
                    username: userName,
                    name: Name,
                    email: Email,
                    date: new Date(),
                    // time: date.getTime(),
                    hours:hours,
                    minutes: minutes,
                }
                console.log(userPost);
                fetch('https://twitter-backend-aexh.onrender.com/post', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(userPost)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                    })
            }
            setpost('')
            setimageURL('')
        }

        else {
            e.preventDefault();
            alert('Nothing to Tweet')
            console.log("Either tweet something or add an image")
        }
    }


    const { t} = useTranslation();

    


    return (
        <div className='rounded-xl border  px-3 py-2 shadow-xl my-10 flex flex-col  gap-4'>
            <div className='flex items-center gap-3 text-lg font-bold rounded-full'>
                <Link to={'/home/profile'}>
                    <img src={
                        userProfilePic
                    } width={50}
                        alt='Avatar'
                        className='rounded-full'
                    />
                </Link>
                <p className='text-gray-500'>{t(`What's happening`)} {Name} ?</p>
            </div>
            <form className='flex items-center gap-3 mb-5 px-3' onSubmit={handleTweet}>
                <div>
                    <label htmlFor='image' className='text-blue-400 font-semibold cursor-pointer' >
                        {
                            isLoading ?
                                <div className='flex flex-col items-center'>
                                    <MdOutlineAddPhotoAlternate className='text-yellow-300 animate-bounce text-2xl cursor-pointer hover:text-blue-500 hover:bg-gray-100 ' />
                                    <p className='text-sm'>{t('Uploading')}...</p>
                                </div>
                                : <p>{imageURL ?
                                    <div className='flex flex-col items-center'>
                                        <MdOutlineAddPhotoAlternate className='text-green-400 text-2xl cursor-pointer hover:text-blue-500 hover:bg-gray-100 ' />
                                        <p className='text-sm'>{t('Uploaded')}</p>
                                    </div>
                                    : <MdOutlineAddPhotoAlternate className='text-blue-400 text-2xl cursor-pointer hover:text-blue-500 hover:bg-gray-100 active:text-blue-600' />}</p>
                        }
                    </label>
                    <input
                        type='file'
                        id='image'
                        className='hidden'
                        onChange={handleUploadImage}
                    />
                </div>

                <input
                    onChange={(e) => setpost(e.target.value)}
                    className='m-2 px-3 py-2 bg-blue-100  rounded-full w-2/3 lg:font-semibold font-normal' placeholder={t('Enter your though here')} />
                <button type="submit" className="lg:m-2 lg:px-10 px-2 lg:py-2 py-1 bg-blue-500 hover:bg-blue-600 active:bg-blue-700 duration-200 text-white cursor-pointer rounded-full lg:font-bold font-normal active:scale-95">{t('Tweet')}</button>
            </form>
        </div>
    )
}
export default TweetBox