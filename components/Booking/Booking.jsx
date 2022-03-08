import { Button, Container, Grid, Typography } from '@mui/material';
import React from 'react'
import Paper from '@mui/material/Paper';
import { makeStyles } from '@mui/styles';
import BookingModal from './BookingModal';

const useStyle = makeStyles({
    root: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 48,
        padding: '0 30px',
    },
})
function Booking({ booking, date }) {
    const classes = useStyle()
    const { name, time, space } = booking
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <>
            <Grid item xs={12} md={4}>

                <Paper elevation={3} sx={{ p: 4 }} style={{ textAlign: 'center' }} >
                    <Typography gutterBottom component={'div'}>
                        {name}
                    </Typography>
                    <Typography gutterBottom component={'div'}>
                        {time}
                    </Typography>
                    <Typography>
                        Available space {space}
                    </Typography>
                    <Button onClick={handleOpen} className={classes.root}>Book Appointment</Button>
                </Paper>

            </Grid>
            <BookingModal date={date} open={open} handleClose={handleClose} booking={booking}>

            </BookingModal>
        </>

    )
}

export default Booking