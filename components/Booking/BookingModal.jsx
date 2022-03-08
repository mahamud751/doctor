import React from 'react'
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { TextField } from '@mui/material';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};
function BookingModal({ booking, handleClose, open, date }) {
    return (
        <div>
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
                        <Typography id="transition-modal-title" variant="h6" component="h2">
                            {booking.name}
                        </Typography>

                        <form>
                            <TextField
                                disabled
                                id="outlined-size-small"
                                sx={{ width: "90%", m: 1 }}
                                defaultValue={booking.time}

                                size="small"
                            />
                            <TextField
                                id="outlined-size-small"
                                sx={{ width: "90%", m: 1 }}
                                defaultValue="Name"

                                size="small"
                            />
                            <TextField
                                id="outlined-size-small"
                                sx={{ width: "90%", m: 1 }}
                                defaultValue="Email"

                                size="small"
                            />
                            <TextField
                                id="outlined-size-small"
                                sx={{ width: "90%", m: 1 }}
                                defaultValue="Number"

                                size="small"
                            />
                            <TextField
                                disabled
                                id="outlined-size-small"
                                sx={{ width: "90%", m: 1 }}
                                defaultValue={date.toDateString()}

                                size="small"
                            />
                            <Button variant='contained'>Booking now</Button>
                        </form>

                    </Box>
                </Fade>
            </Modal>

        </div>
    )
}

export default BookingModal