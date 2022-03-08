import { Container, Grid, Typography, TextField, Button } from '@mui/material'
import React, { useState } from 'react'
import Image from 'next/Image'
import img from '../public/images/login.png'
import Link from 'next/link'
function Login() {
    const [logData, setLogData] = useState({})
    const handleChange = e => {
        const type = e.target.name
        const value = e.target.value
        const newData = { ...logData }
        newData[type] = value
        setLogData(newData)

    }
    const loginSubmit = e => {
        alert('yes')
        e.preventDefault()
    }
    return (
        <Container>
            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <Typography sx={{ mt: 8 }} variant="body1" color="initial">Login</Typography>
                    <form onSubmit={loginSubmit}>
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Email"
                            name='email'
                            variant="standard"
                            onChange={handleChange}
                        />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Password"
                            name='password'
                            type='password'
                            variant="standard"
                            onChange={handleChange}
                        />
                        <Button variant="text" color="primary" type='submit' sx={{ width: '75%', m: 1 }}>
                            Sign In
                        </Button>
                        <Link href={'/registration'} passHref>
                            <Button variant="text" color="primary">
                                New user please Registration first
                            </Button>
                        </Link>
                    </form>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Image
                        src={img}
                        alt={'login'}

                    />
                </Grid>
            </Grid>
        </Container>
    )
}

export default Login