import React, {useState} from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Registration from "./Verify/Registration";
import Authorization from "./Verify/Authorization";

const style = {
    position: 'absolute',
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    borderRadius: "15px",
    p: 3,
};

const AnimationModal = () => {
    const [open, setOpen] = useState(false);
    const [swap, setSwap] = useState(false)

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const registrationForm =
        <>
            <Registration/>
            <Button sx={{m: 1}} onClick={() => setSwap(!swap)} variant="text">Я уже зарегистрирован</Button>
        </>

    const authForm =
        <>
            <Authorization/>
            <Button sx={{m: 1}} onClick={() => setSwap(!swap)} variant="text">Я здесь впервые</Button>
        </>
    return (
        <div>
            <Button onClick={handleOpen} color="inherit" size="large" variant="outlined">Войти</Button>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <Box sx={style}>
                        {
                            swap ? authForm : registrationForm
                        }
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}
export default AnimationModal;