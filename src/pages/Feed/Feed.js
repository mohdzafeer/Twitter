import { useEffect, useState } from "react"
import TweetBox from "./TweetBox/TweetBox"
// import axios from "axios"
import Post from "./post/Post"

export const Feed=()=>{
    
    const [posts,setposts]=useState([])

    useEffect(()=>{
        // fetch('https://twitter-bcakend.vercel.app/post')
        fetch('https://twitter-backend-aexh.onrender.com/post')
        .then(res=>res.json())
        .then(data=>{
            setposts(data)
        })

    },[posts])

    
    return(
        <div>
            
            <TweetBox/>
            {
                posts.map(p=><Post key={p._id} p={p}/>)
            }
        </div>
    )
}