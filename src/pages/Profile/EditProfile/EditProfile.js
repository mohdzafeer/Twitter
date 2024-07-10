import React, { useState } from 'react'
import { IconButton, Modal, TextField } from '@mui/material'
import { Box } from '@mui/material'
import { IoIosCloseCircleOutline } from "react-icons/io";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import axios from 'axios';
// import useLoggedInUser from '../../../hooks/useLoggedInUser';
import { auth } from '../../../firebase.init';
import { useTranslation } from 'react-i18next';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    height: 700,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    borderRadius: 8,
    p: 4,

}

function EditChild({ DOB, setDOB }) {

    const { t } = useTranslation();

    const [open, setOpen] = useState(false)
    // const handleopen = () => {
    //     setOpen(true)

    // }
    const handleclose = () => {
        setOpen(false)
    }

    return (
        <React.Fragment>
            <div className=''>
                <text className='text-blue-500 font-semibold cursor-pointer' onClick={() => setOpen(true)}>Edit</text>
            </div>
            <Modal
                hideBackdrop
                open={open}
                onClose={handleclose}
                aria-labelledby="child-modal-title"
                aria-describedby="child-modal-description"
            >
                <Box sx={{ ...style, width: 300, height: 300 }}>
                    <div>
                        <h2 className='font-bold text-xl mb-5'>{t('Edit Date of birth')}</h2>
                        <p className='mb-5'>{t('DOB_subheading')}</p>
                        <input type='date'
                            onChange={(e) => setDOB(e.target.value)}
                        />
                        <button className='ml-5 bg-gray-500 px-2 py-1 rounded-lg hover:bg-gray-600 active:bg-gray-500 font-bold duration-200 text-white' onClick={() => setOpen(false)}>
                            {('OK')}
                        </button>
                    </div>

                </Box>
            </Modal>
        </React.Fragment>
    )
}

export default function EditProfile({ user, loggedInUser }) {

    // const existingBio=loggedInUser[0]?.bio ? loggedInUser[0].bio : ''
    // const existingLocation=loggedInUser[0]?.location ? loggedInUser[0].location : ''
    // const existingWebsite=loggedInUser[0]?.website ? loggedInUser[0].website : ''
    // const existingDOB=loggedInUser[0]?.DOB ? loggedInUser[0].DOB : ''

    const { t } = useTranslation();

    // const changeLanguage = (lng) => {
    //     i18n.changeLanguage(lng);
    //   };


    const [open, setOpen] = useState(false)
    const [name, setName] = useState(loggedInUser[0?.name])
    const [username, setUsername] = useState(loggedInUser[0?.username])
    const [bio, setBio] = useState(loggedInUser[0]?.bio ? loggedInUser[0]?.bio : '')
    const [location, setLocation] = useState(loggedInUser[0]?.location ? loggedInUser[0]?.location : '')
    const [website, setWebsite] = useState(loggedInUser[0]?.website ? loggedInUser[0]?.website : '')
    const [DOB, setDOB] = useState(loggedInUser[0]?.DOB ? loggedInUser[0]?.DOB : '')

    const handleSave = async () => {
        if(name || username || bio || location || website || DOB){
            const editedInfo = {
                name,
                username,
                bio,
                location,
                website,
                DOB,
            }
    
            if (editedInfo) {
                await axios.patch(`https://twitter-backend-aexh.onrender.com/userUpdates/${user?.email}`, editedInfo)
                setOpen(false)
            }
        }
        else{
            alert('Please fill at least one field')
        }


    }

    return (
        <div>
            <button className='absolute right-3 bottom-auto bg-blue-600 hover:bg-blue-700  active:bg-blue-600 duration-300 px-4 py-2 mx-5 mt-5  font-bold text-white border hover:border-black rounded-full' onClick={() => setOpen(true)}>{t('Edit Profile')}</button>

            <Modal
                open={open}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style} className='modal'>
                    <div>
                        <IconButton onClick={() => setOpen(false)}><IoIosCloseCircleOutline /></IconButton>
                        <div className='flex items-center justify-between'>
                            <h2 className='lg:text-2xl lg:font-bold font-semibold'>{t('Edit Profile')}</h2>
                            <button className='lg:px-4 px-2 lg:py-2 py-1 bg-blue-500 hover:bg-blue-600 active:bg-blue-500 font-bold m-2 rounded-full text-white duration-300' onClick={handleSave}>{t('Save')}</button>
                        </div>
                    </div>
                    <div>
                        <h1><span className='font-semibold'>Email :</span> <span className='italic'>{loggedInUser[0]?.email ? loggedInUser[0]?.email : auth.currentUser?.email}</span></h1>
                    </div>
                    <form className='flex flex-col gap-2 mt-5'>
                        <TextField fullWidth label={t('Name')} variant='filled' onChange={(e) => setName(e.target.value)} />
                        <TextField fullWidth label={t('Username')} variant='filled' onChange={(e) => setUsername(e.target.value)} />
                        <TextField fullWidth label={t('Bio')} variant='filled' onChange={(e) => setBio(e.target.value)} />
                        <TextField fullWidth label={t('Location')} variant='filled' onChange={(e) => setLocation(e.target.value)} />
                        <TextField fullWidth label={t('Website')}variant='filled' onChange={(e) => setWebsite(e.target.value)} />
                    </form>
                    <div>
                        <p className='font-bold mt-10'>{t('Birth Date')}</p>
                        
                    </div>
                    <div>
                        {
                            loggedInUser[0]?.DOB ?
                            <h2>{loggedInUser[0]?.DOB}</h2> : <h2>
                                    {
                                        DOB ? DOB : 'Add Your Date of birth'
                                    }
                                </h2>
                        }

                        <EditChild DOB={DOB} setDOB={setDOB} />
                        <div className='flex items-center gap-3 hover:bg-gray-300 duration-300 cursor-pointer py-2 rounded-lg font-bold mt-5'>
                            <h2 className='text-xl' onClick={()=>setOpen(false)}>{t('Switch to Profession Account')}</h2>
                            <MdOutlineKeyboardArrowRight className='text-xl' />
                        </div>

                    </div>
                </Box>
            </Modal>
        </div>
    )
}
