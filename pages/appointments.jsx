import { Button, Container, Grid, Typography } from '@mui/material';
import React from 'react'
import Paper from '@mui/material/Paper';
import AppointmentBanner from '../components/Appointment/AppointmentBanner'
import AvailableAppointment from '../components/Appointment/AvailableAppointment'

import Booking from '../components/Booking/Booking';

const bookings = [
    {
        "id": 1,
        "name": "Teeth Orthodontics",
        "time": "8:00 AM - 9:00AM",
        "price": 17,
        "space": 10
    },
    {
        "id": 2,
        "name": "Cosmetic Dentistry",
        "time": "10:05 AM - 11:20AM",
        "price": 27,
        "space": 6
    },
    {
        "id": 3,
        "name": "Teeth Cleaning",
        "time": "5:00 PM - 6:00PM",
        "price": 37,
        "space": 12
    },
    {
        "id": 4,
        "name": "Cavity Protection",
        "time": "7:00 AM - 9:00AM",
        "price": 19,
        "space": 8
    },
    {
        "id": 5,
        "name": "Teeth Orthodontics",
        "time": "8:00 AM - 9:00AM",
        "price": 21,
        "space": 10
    },
    {
        "id": 6,
        "name": "Teeth Orthodontics",
        "time": "11:00 AM - 12:00PM",
        "price": 31,
        "space": 12
    },
]


function Appointment() {

    const [date, setDate] = React.useState(new Date());
    return (

        <Container>
            <AppointmentBanner date={date} setDate={setDate} />
            <AvailableAppointment date={date} />
            <Grid container spacing={3} sx={{ my: 5 }}>
                {
                    bookings.map((booking) => <Booking
                        key={booking.id}
                        booking={booking}
                        date={date}
                    >

                    </Booking>

                    )
                }
            </Grid>
        </Container >

    )
}

export default Appointment