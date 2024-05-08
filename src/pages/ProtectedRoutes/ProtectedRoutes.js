
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase.init";
import { useNavigate } from "react-router";
import { LoadingPage } from "../LoadingPage/LoadingPage";


export const ProtectedRoute=({children})=>{
    const navigate=useNavigate()
    const[user,loading]=useAuthState(auth)
   
    if(loading){
        return <LoadingPage/>
    }

    if(!user){
        navigate('/login')
    }
    return children; 
}