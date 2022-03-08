import { Card, Container, Grid, Paper, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import img from '../../public/images/people-1.png'
import img1 from '../../public/images/people-2.png'
import img2 from '../../public/images/people-3.png'
function Testimonial() {
  return (
    <Container>
      <Typography variant='h5'>
        Testimonial
      </Typography>
      <Typography variant='h3' sx={{ my: 3 }}>
        What our patient says
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <Card sx={{ minHeight: 275 }}>
            <Paper elevation={0} sx={{ p: 3 }}>
              <Typography>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique aut quos quod illo totam veniam molestiae atque harum assumenda debitis est voluptatum, non officia sint pariatur saepe aperiam repellendus quia!
              </Typography>
              <div style={{ display: 'flex', marginTop: "40px" }}>
                <div>
                  <Image
                    src={img}
                    alt={"img"}
                  />
                </div>
                <div style={{ padding: "10px" }}>
                  <Typography>
                    Herry
                  </Typography>
                  <Typography>
                    London
                  </Typography>
                </div>
              </div>

            </Paper>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card sx={{ minHeight: 275 }}>
            <Paper elevation={0} sx={{ p: 3 }}>
              <Typography>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique aut quos quod illo totam veniam molestiae atque harum assumenda debitis est voluptatum, non officia sint pariatur saepe aperiam repellendus quia!
              </Typography>
              <div style={{ display: 'flex', marginTop: "40px" }}>
                <div>
                  <Image
                    src={img1}
                    alt={"img1"}
                  />
                </div>
                <div style={{ padding: "10px" }}>
                  <Typography>
                    Herry
                  </Typography>
                  <Typography>
                    London
                  </Typography>
                </div>
              </div>

            </Paper>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card sx={{ minHeight: 275 }}>
            <Paper elevation={0} sx={{ p: 3 }}>
              <Typography>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique aut quos quod illo totam veniam molestiae atque harum assumenda debitis est voluptatum, non officia sint pariatur saepe aperiam repellendus quia!
              </Typography>
              <div style={{ display: 'flex', marginTop: "40px" }}>
                <div>
                  <Image
                    src={img2}
                    alt={"img3"}
                  />
                </div>
                <div style={{ padding: "10px" }}>
                  <Typography>
                    Herry
                  </Typography>
                  <Typography>
                    London
                  </Typography>
                </div>
              </div>

            </Paper>
          </Card>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Testimonial