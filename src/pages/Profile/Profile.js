import { useAuthState } from "react-firebase-hooks/auth"
import MainProfile from "./MainPage/MainPage"
import { auth } from "../../firebase.init"

export const Profile=()=>{
    
    const [user]=useAuthState(auth)
        
    // console.log(user)
    

    return(
        <div>
            <MainProfile user={user}/>
        </div>
    )
}