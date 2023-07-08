import React from 'react'
import { Container, Grid, Card, CardMedia, CardContent, Typography, CardActions, Button } from '@mui/material'
import Stack from '@mui/material/Stack';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
const Services = (props) => {
  const {dark}= props;
  const [mood, setMood] = useState({ color: "#45505b", backgroundColor: "#f2f3f5" });
  useEffect(() => {
    if (!dark) {
        setMood({ backgroundColor: 'rgb(32, 33, 36)', color: 'white' });
    } else {
        setMood({ backgroundColor: 'white', color: 'black' });
    }
  }, [dark]);
  const navegate = useNavigate();

    const cards = [
        {
            id: 1,
            title: 'Web Development',
            description: 'We build websites that serve as powerful marketing tools and bring memorable brand experiences.',
            image: 'https://source.unsplash.com/random?webdevelopment',
            url: 'https://www.google.com'
        },
        {
            id: 2,
            title: 'Mobile App Development',

            description: 'We build mobile apps that offer great user experience, fully functional, and secure for all platforms.',
            image: 'https://source.unsplash.com/random?mobileappdevelopment',
            url: 'https://www.google.com'
        },
        {
            id: 3,
            title: 'Digital Marketing',
            description: 'We offer digital marketing services to help you grow your business online.',
            image: 'https://source.unsplash.com/random?digitalmarketing',
            url: 'https://www.google.com'
        },
        {
            id: 4,
            title: 'SEO',
            description: 'We offer SEO services to help you rank your website on the first page of Google.',
            image: 'https://source.unsplash.com/random?seo',
            url: 'https://www.google.com'
        },
        {
            id: 5,
            title: 'Content Writing',
            description: 'We offer content writing services to help you rank your website on the first page of Google.',
            image: 'https://source.unsplash.com/random?contentwriting',
            url: 'https://www.google.com'
        },

        {
            id: 6,
            title: 'Graphic Designing',
            description: 'We offer graphic designing services to help you rank your website on the first page of Google.',
            image: 'https://source.unsplash.com/random?graphicdesigning',
            url: 'https://www.google.com'

        }
    ]
  return (
    <div className='services'>
      <Container maxWidth="sm" >
            <Typography className='pt-5'
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Services
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
            We offer a wide range of services to help you grow your business online.
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button onClick={()=>navegate('/contact')} variant="contained">Hire Me </Button>
              <Button onClick={()=>navegate('/portfolio')} variant="outlined">My works</Button>
            </Stack>
          </Container>
                <Container sx={{ py: 8 }} maxWidth="md">
                  

          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card.id} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' } }  style={mood}
                >
                  <CardMedia
                    component="div"
                    sx={{
                      // 16:9
                      pt: '56.25%',
                    }}
                    image="https://source.unsplash.com/random?wallpapers"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.title}
                    </Typography>
                    <Typography>
                      {card.description}
                    </Typography>
                  </CardContent>

                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
    </div>
  )
}

export default Services