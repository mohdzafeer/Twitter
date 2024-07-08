import { Box, IconButton, Modal, TextField } from "@mui/material"
import { useState } from "react"
import { useTranslation } from "react-i18next"
import { IoIosCloseCircleOutline } from "react-icons/io"
// import useLoggedInUser from "../../hooks/useLoggedInUser"
// import { auth } from "../../firebase.init"
import axios from "axios"


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    height: 600,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    borderRadius: 8,
    p: 4,

}
const LanguageSelector = () => {

    const { t, i18n } = useTranslation();
    // const [loggedInUser] = useLoggedInUser();

    const [selectedLanguage, setSelectedLanguage] = useState('');

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };
    const runFunction = (value) => {
        changeLanguage(`${value}`)
    };
    const handleSelectChange = (event) => {
        const value = event.target.value;
        setSelectedLanguage(value);
        runFunction(value);
    };



    const [open, setOpen] = useState(false)
    const [otp, setOtp] = useState('')
    // const [sentOTP, setSentOTP] = useState(123)
    const [email, setEmail] = useState('')
    const [isOTPsent, setIsOTPsent] = useState(false)
    const [isOTPverified, setIsOTPverified] = useState(false)
    const [loading, setloading] = useState(false)
    const [message, setMessage] = useState('')


    const handleSendOTP = async () => {
        // e.preventDefault();
        // e.target.reset()
        try {
            setloading(true)
            await axios.post('https://twitter-bcakend.vercel.app/send-otp', { email });
            setIsOTPsent(true);
        } catch (error) {
            console.error('Error sending OTP', error);
        }
        setloading(false)
    };

    const verifyOTP = async () => {
        // e.preventDefault()
        // e.target.reset()
        console.log('Verifying OTP with:', { email, otp });

        try {
            setloading(true)
            const response = await axios.post('https://twitter-bcakend.vercel.app/verify-otp', { email, otp },
                {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                },
                setloading(false)
            );
            if (response.data.message === 'OTP verified') {
                setloading(false)
                setIsOTPverified(true);
                // changeLanguage(); // Ensure this function is defined
            }
            // setMessage(response.data.message);
            else {
                setIsOTPverified(false);
                alert("Invalid OTP")
                setloading(false)
            }
        } catch (error) {
            console.error('Error verifying OTP', error);
            if (error.response) {
                console.error('Response data:', error.response.data);
                setMessage(error.response.data.error);
                alert(message)
            } else {
                setMessage('An error occurred');
                alert(message)
            }
        }
    };




    const languageOptions = () => {
        return (
            <div className="flex items-center  my-5">
                <select value={selectedLanguage} onChange={handleSelectChange} className="bg-blue-500 text-lg px-3 py-2 font-bold rounded-full text-white shadow-xl hover:bg-blue-600 duration-200">

                    <option value="en">English</option>
                    <option value="fr">French</option>
                    <option value="hn">Hindi</option>
                    <option value="sp">Spanish</option>
                    <option value="pr">Portuguese</option>
                    <option value="tm">Tamil</option>
                    <option value="bn">Bengali</option>

                </select>
            </div>
        )
    }


    return (
        <div>
            <button className=' shadow-xl bg-blue-500 hover:bg-blue-600  active:bg-blue-500 duration-300 px-4 py-2  my-5  font-bold text-white border  rounded-full' onClick={() => setOpen(true)}>{t('Change Language')}</button>
            <Modal
                open={open}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style} className='modal'>
                    <div className="flex items-center justify-between">
                        <IconButton onClick={() => {
                            setOpen(false);
                            setIsOTPsent(false);
                            setIsOTPverified(false);
                            setloading(false)
                        }}>
                            <IoIosCloseCircleOutline /></IconButton>
                        <h1 className="text-3xl font-bold">{t('Change Language')}</h1>
                    </div>
                    <div className="mt-10">
                        {

                            isOTPsent === false
                                ?
                                <>
                                    <p className="mb-5 font-semibold text-lg">{t('OTP will be sent to thiis Email')}</p>
                                    <TextField type="email" fullWidth label={t('Enter Your Email Address')} variant='filled' onChange={(e) => setEmail(e.target.value)} />
                                    {loading === false
                                        ?
                                        <>
                                            <button className="bg-blue-500 text-white w-full rounded-lg font-bold  py-3 mt-3 hover:bg-blue-600 active:bg-blue-500 duration-200" onClick={() => { handleSendOTP() }}>
                                                {t('Send OTP')}
                                            </button>
                                        </>
                                        :
                                        <>
                                            <button className="bg-gray-600 text-white w-full rounded-lg font-bold  py-3 mt-3 cursor-wait  duration-200" >
                                                Sending OTP...
                                            </button>
                                        </>
                                    }
                                </>
                                :
                                // isOTPsent===true ? 
                                isOTPverified === false ?
                                    <>
                                        <p className="mb-5 font-semibold text-lg text-green-500">{t('OTP sent to your Email')}</p>
                                        <TextField type="text" fullWidth label={t('Enter OTP')} variant='filled' onChange={(e) => setOtp(e.target.value)} />
                                        {
                                            loading === true
                                                ?
                                                <button className="bg-gray-600 text-white w-full rounded-lg font-bold  py-3 mt-3 cursor-wait  duration-200" >Submiting...</button>
                                                :

                                                <button className="bg-blue-500 text-white w-full rounded-lg font-bold  py-3 mt-3 hover:bg-blue-600 active:bg-blue-500 duration-200" onClick={() => { verifyOTP() }}>{t('Submit')}</button>
                                        }
                                    </>
                                    :
                                    <>
                                        <p className="mb-5 font-semibold text-lg text-green-400">{t('OTP verified Successfully')}</p>
                                        <p className="mb-5 font-semibold text-lg">{t('Select your Language')}</p>
                                        {languageOptions()}
                                        <button className="bg-blue-500 text-white w-full rounded-lg font-bold  py-3 mt-3 hover:bg-blue-600 active:bg-blue-500 duration-200" onClick={() => {
                                            setOpen(false);
                                            setIsOTPsent(false);
                                            setIsOTPverified(false);
                                            setloading(false)
                                        }}>
                                            {t('Done')}
                                        </button>
                                    </>
                        }
                    </div>

                </Box>
            </Modal>
        </div>
    )
}
export default LanguageSelector