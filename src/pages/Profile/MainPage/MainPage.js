import { useEffect, useState } from 'react'
import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate } from 'react-router';
import useLoggedInUser from '../../../hooks/useLoggedInUser';
import { FaCamera } from "react-icons/fa6";
import { auth } from '../../../firebase.init';
import axios from 'axios';
import EditProfile from '../EditProfile/EditProfile';
import Post from '../../Feed/post/Post'
import { BsCake2Fill } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { IoLink } from "react-icons/io5";
import { Link } from '@mui/material';

const MainProfile = ({ user }) => {
    const navigate = useNavigate();

    // const username=auth.currentUser?.email?.split('@')[0]
    const googleUserProfilePic = auth?.currentUser?.photoURL

    const [loggedInUser] = useLoggedInUser()
    const userProfilePic = loggedInUser[0]?.profileImage ? loggedInUser[0]?.profileImage : googleUserProfilePic ? googleUserProfilePic : "https://cdn.pixabay.com/photo/2019/07/26/16/48/music-cover-4365147_640.jpg"
    const Name = loggedInUser[0]?.name ? loggedInUser[0].name : auth.currentUser?.displayName;
    const userName = loggedInUser[0]?.username ? loggedInUser[0].username : auth.currentUser?.email.split('@')[0];
    const Email = loggedInUser[0]?.email ? loggedInUser[0].email : auth.currentUser?.email;
    const coverImage = loggedInUser[0]?.coverImage ? loggedInUser[0].coverImage : "https://privacyinternational.org/sites/default/files/styles/large/public/2020-07/twitter.jpg?itok=2o5n3IZx"

    const [isLoading, setIsLoading] = useState(false)
    // const [newCoverImage,setNewCoverImage]=useState(coverImage)



    const handleUploadCoverImage = (e) => {
        setIsLoading(true)
        const image = e.target.files[0];

        const formData = new FormData()
        formData.set('image', image)


        axios.post("https://api.imgbb.com/1/upload?key=9585d64d1aca3440fa5edba72a9abbdf", formData)
            .then(res => {
                const url = res.data.data.display_url
                const userCoverImage = {
                    email: user?.email,
                    coverImage: url
                }
                setIsLoading(false)

                if (url) {
                    axios.patch(`http://localhost:5000/userUpdates/${user?.email}`, userCoverImage)
                }
            })
    }

    const handleUploadProfileImage = (e) => {
        // setIsLoading(true)
        const image = e.target.files[0];
        // console.log(image);
        const formData = new FormData()
        formData.set('image', image)


        axios.post("https://api.imgbb.com/1/upload?key=9585d64d1aca3440fa5edba72a9abbdf", formData)
            .then(res => {
                const url = res.data.data.display_url
                const userProfileImage = {
                    email: user?.email,
                    profileImage: url
                }
                setIsLoading(false)
                // formData.set()
                if (url) {
                    axios.patch(`http://localhost:5000/userUpdates/${user?.email}`, userProfileImage)

                }
            })
    }

    const [bio, setBio] = useState("")


    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/userPost?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setPosts(data)
            })
    }, [posts])

    return (
        <div>
            <div className='flex items-center gap-4 border-blue-200  border-b-2 pb-2'>
                <IoMdArrowRoundBack className='text-3xl font-bold cursor-pointer hover:bg-gray-200 rounded-full lg:m-5 m-2' onClick={() => navigate('/')} />
                <h1 className='font-bold lg:text-3xl text-xl'>Hello, {Name}</h1>
            </div>
            <div className='relative h-80 lg:mb-8 mb-0'>

                <div className='group object-contain lg:h-72 h-52 mt-5 overflow-hidden rounded-lg flex justify-center items-center shadow-class'>
                    {
                        isLoading
                            ?
                            <div class=" overflow-hidden m-10 absolute w-full opacity-100 shrink-0 h-72 rounded-lg flex justify-center items-center bg-white text-white">
                                <h1 className='text-black text-3xl'>Loading...</h1>
                            </div>
                            :
                            <>
                                <img className='min-w-full min-h-full shrink-0' src={coverImage} />
                                <label htmlFor='coverImage' class="invisible group-hover:visible  overflow-hidden m-10 absolute w-full opacity-80 shrink-0 h-72 rounded-lg flex justify-center items-center bg-gray-600 text-white">
                                    <div className='flex items-center justify-center flex-col' >
                                        <FaCamera className='text-3xl  font-black' />
                                        <h1>Upload Cover Image</h1>
                                    </div>
                                    <input className='hidden' id='coverImage' type='file' onChange={handleUploadCoverImage}>
                                    </input>
                                </label>
                            </>
                    }
                </div>

                <div className='absolute group left-4 lg:top-60 top-44 w-28  h-28 border-white border-4 rounded-full overflow-hidden flex justify-center items-center bg-white shadow-xl '>
                    <img className='min-w-full min-h-full shrink-0' width={100} src={userProfilePic} />
                    {/*  */}
                    <label htmlFor='profileImage' class="invisible group-hover:visible  overflow-hidden m-10 absolute w-full opacity-80 shrink-0 h-72 rounded-lg flex justify-center items-center bg-gray-600 text-white">
                        <div className='flex items-center justify-center flex-col' >
                            <FaCamera className='text-lg  font-black' />
                            {/* <h1>Upload Cover Image</h1> */}
                        </div>
                        <input className='hidden' id='profileImage' type='file' onChange={handleUploadProfileImage}>
                        </input>
                    </label>
                    {/*  */}
                </div>
                {/* <Link  to={'/home/profile/editprofile'} className='absolute right-4 mt-3 font-bold bg-blue-500 text-white px-3 py-2 rounded-full hover:bg-blue-600 duration-300 active:bg-blue-500'>Edit Profile</Link> */}
                <EditProfile user={user} loggedInUser={loggedInUser} />
            </div>
            <div>
                <h3 className='font-bold lg:text-2xl text-xl'>{Name}</h3>
                <h4 className='font-normal'>@{userName}</h4>
                <div>
                    <div className='font-semibold italic mt-2'>
                        {loggedInUser[0]?.bio && <>{loggedInUser[0]?.bio}</>}
                    </div>
                    <div className='font-semibold  mt-6 flex items-center gap-3 '>
                    {loggedInUser[0]?.DOB && <><BsCake2Fill/><a href={loggedInUser[0]?.DOB}>{loggedInUser[0]?.DOB}</a></>}
                    </div>
                    <div className='font-semibold mt-2 flex items-center gap-3'>
                    {loggedInUser[0]?.location && <><FaLocationDot/><a href={loggedInUser[0]?.location}>{loggedInUser[0]?.location}</a></>}
                    </div>
                    <div className='font-semibold  mt-2 flex items-center gap-3 '>
                        {loggedInUser[0]?.website && <><IoLink/><a href={loggedInUser[0]?.website}>{loggedInUser[0]?.website}</a></>}
                    </div>
                </div>
            </div>
            <div>
                <h1 className='font-bold text-3xl mt-10'>Your Tweets</h1>
            </div>

            <div>
                {
                    posts.map(p => <Post id={p._id} p={p} />)
                }
            </div>
        </div>
    )
}
export default MainProfile