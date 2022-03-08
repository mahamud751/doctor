import { Container, Grid } from '@mui/material'
import React from 'react'
import Image from 'next/Image'
import img from '../../public/images/chair.png'
import Calender from './Calender';



function AppointmentBanner({ date, setDate }) {
    const bannerSize = {
        display: "flex",
        alignItems: "center",
        height: 600,
    };
    return (
        <Container>
            <Grid container spacing={2} >
                <Grid item xs={12} md={7}>
                    <Calender date={date} setDate={setDate} />
                </Grid>
                <Grid item xs={12} md={5} style={bannerSize} >
                    <Image
                        src={img}
                        alt={'chair'}
                    />
                </Grid>
            </Grid>
        </Container>
    )
}

export default AppointmentBanner