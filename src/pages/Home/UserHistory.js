import { Box, IconButton, Modal } from "@mui/material"
import { useEffect, useState } from "react"

// import { useTranslation } from "react-i18next"
// import { getUserInfo } from "../Profile/UserInfo/getUserinfo"
// import { getUserIp } from "../Profile/UserInfo/getUserIP"
// import useLoggedInUser from "../../hooks/useLoggedInUser"
// import { auth } from "../../firebase.init"
// import axios from "axios"
import { IoIosCloseCircleOutline } from "react-icons/io"
import axios from "axios"
import { useTranslation } from "react-i18next"


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    height: 800,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    borderRadius: 8,
    p: 4,

}
const UserHistory = () => {

    const { t } = useTranslation();
    const [open, setOpen] = useState(false)

    const [info, setInfo] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://twitter-backend-aexh.onrender.com/lastUser'); // Adjust the URL as needed
                setInfo(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);


    return (
        <div>
            <button className='shadow-xl text-white bg-blue-500 hover:bg-blue-600 active:scale-90  active:bg-blue-500duration-300 px-4 py-2 font-bold duration-200 border  rounded-full' onClick={() => setOpen(true)}>{t(`View Previous Users' Info`)}</button>
            <Modal
                open={open}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style} className='modal overflow-scroll scrollbar-none'>
                    <div className="flex items-center justify-between">
                        <IconButton onClick={() => setOpen(false)}><IoIosCloseCircleOutline /></IconButton>
                        <h1 className="text-3xl font-bold">{t(`Previous Users' History`)}</h1>
                    </div>

                    <div className="mt-5 flex flex-col gap-4">
                        {info.map((item, index) => (
                            <div key={index} className="flex flex-col gap-2 text-lg  border-b-2 py-5">
                                <p className="font-bold">Email : <span className="italic font-semibold">{item.email}</span></p>
                                <p className="font-bold">Name : <span className="italic font-normal">{item.name}</span></p>
                                <p className="font-bold">Username : <span className="italic font-normal">{item.username} </span></p>
                                <p className="font-bold">Browser : <span className="italic font-normal">{item.browserType} {item.browserVersion}</span></p>
                                <p className="font-bold">OS : <span className="italic font-normal">{item.operatingSystem}</span></p>
                                {item.device ? <p className="font-bold">Device : <span className="italic font-normal">{item.device}</span></p> : ''}
                                <p className="font-bold">IP : <span className="italic font-normal">{item.ipAddress} </span></p>
                            </div>
                        ))}
                    </div>


                </Box>
            </Modal>
        </div>
    )
}
export default UserHistory