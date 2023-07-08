import * as React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { useState, useEffect } from 'react';

function FeaturedPost(props) {
  const { post,dark } = props;
  const [mood, setMood] = useState({ color: "#45505b", backgroundColor: "#f2f3f5" });
  useEffect(() => {
    if (!dark) {
        setMood({ backgroundColor: 'rgb(32, 33, 36)', color: 'white' });
    } else {
        setMood({ backgroundColor: 'white', color: 'black' });
    }
  }, [dark]);

  return (
    <Grid item xs={12}  sx={{ height: '100%' }} md={6} style={mood}>
      <CardActionArea  sx={{ height: '100%' }}  component="a" href={post.url} target='_blank' >
        <Card sx={{ display: 'flex',height: '100%' }}    style={mood}>
          <CardContent sx={{ flex: 1 }}>
            <Typography component="h2" variant="h5">
              {post.title}
            </Typography>
            <Typography variant="subtitle1" color="">
              {post.date}
            </Typography>
            <Typography variant="subtitle1" paragraph>
              {post.description}
            </Typography>

          </CardContent>
          <CardMedia
            component="img"
            sx={{ width: 160, display: { xs: 'none', sm: 'block' } }}
            image={post.image}
            alt={post.imageLabel}
          />
        </Card>
      </CardActionArea>
    </Grid>
  );
}

FeaturedPost.propTypes = {
  post: PropTypes.shape({
    date: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    imageLabel: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default FeaturedPost;