import { Container, Grid, TextField, Typography, Button } from '@mui/material'
import React, { useState } from 'react'
import Image from 'next/image'
import img from '../public/images/login.png'
import Link from 'next/link'
function Registration() {
  const [logData, setLogData] = useState({})
  const handleChange = e => {
    const type = e.target.name
    const value = e.target.value
    const newData = { ...logData }
    newData[type] = value
    console.log(newData)
    setLogData(newData)



  }

  const loginSubmit = e => {
    e.preventDefault()
    if (logData.password !== logData.password2) {
      alert('sorry not match')
    }
    console.log(logData)
  }
  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Typography sx={{ mt: 8 }} variant="body1" color="initial">Registration</Typography>
          <form onSubmit={loginSubmit}>
            <TextField
              sx={{ width: '75%', m: 1 }}
              id="standard-basic"
              label="Your Email"
              name='email'
              type='email'
              variant="standard"
              onChange={handleChange}
            />
            <TextField
              sx={{ width: '75%', m: 1 }}
              id="standard-basic"
              label="Your Email"
              name='password'
              type='password'
              variant="standard"
              onChange={handleChange}
            />
            <TextField
              sx={{ width: '75%', m: 1 }}
              id="standard-basic"
              label="Repeat your password"
              name='password2'
              type='password'
              variant="standard"
              onChange={handleChange}
            />
            <Button variant="text" color="primary" sx={{ width: '75%', m: 1 }} type="submit">
              Registration Now
            </Button>
            <Link href={'/login'} passHref>
              <Button variant="text" color="primary">
                Already Registration Please Sign In
              </Button>
            </Link>
          </form>
        </Grid>
        <Grid item xs={12} md={6}>
          <Image
            src={img}
            alt={'registration'}
          />
        </Grid>
      </Grid>
    </Container>
  )
}

export default Registration