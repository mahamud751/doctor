import { Typography } from '@mui/material'
import React from 'react'

function AvailableAppointment({ date }) {
    return (
        <div>
            <Typography variant='h4' style={{ textAlign: 'center' }}>
                Available Appointment {date.toDateString()}
            </Typography>

        </div>
    )
}

export default AvailableAppointment