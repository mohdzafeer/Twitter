import { Box, IconButton, Modal } from "@mui/material"
import { useEffect, useState } from "react"
import { IoIosCloseCircleOutline } from "react-icons/io"
import { getUserInfo } from "./getUserinfo"
import { getUserIp } from "./getUserIP"

// import react from 'react'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    height: 500,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    borderRadius: 8,
    p: 4,

}
const Info = () => {

    const [open, setOpen] = useState(false)


    const [userInfo, setUserInfo] = useState({});
    const [ip, setIp] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            const info = getUserInfo();
            const ipAddress = await getUserIp();
            setUserInfo(info);
            setIp(ipAddress);
        };

        fetchData();
    }, []);


    return (
        <div>
            <button className='absolute right-36 bottom-auto shadow-xl bg-gray-50 hover:bg-gray-100 active:scale-90  active:bg-gray-200 duration-300 px-4 py-2 mx-5 mt-5  font-bold text-black border  rounded-full' onClick={() => setOpen(true)}>User Info</button>
            <Modal
                open={open}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style} className='modal'>
                    <div className="flex items-center justify-between">
                        <IconButton  onClick={() => setOpen(false)}><IoIosCloseCircleOutline /></IconButton>
                        <h1 className="text-3xl font-bold">User's Information</h1>
                    </div>
                    <div className="flex flex-col mt-10">
                        
                        <p className="italic font-semibold"><span className="font-bold not-italic text-lg">Browser</span>: {userInfo.browser} {userInfo.browserVersion}</p>
                        <p className="italic font-semibold"><span className="font-bold not-italic text-lg">OS:</span> {userInfo.os} {userInfo.osVersion}</p>
                        {userInfo.device && <p className="italic font-semibold"><span className="font-bold not-italic text-lg">Device:</span> {userInfo.device}</p>}
                        <p className="italic font-semibold"><span className="font-bold not-italic text-lg">IP Address:</span> {ip}</p>
                    </div>

                </Box>
            </Modal>
        </div>
    )
}
export default Info