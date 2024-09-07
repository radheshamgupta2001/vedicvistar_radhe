import React from 'react';
import { Grid, Typography } from '@mui/material';
import useStyles from './styles';
import {Movie} from '..'; 

const MovieList = ({ movies }) => {
  const classes = useStyles();

  if (!movies || movies.length === 0) {
    return <Typography variant="h6">No movies available</Typography>;
  }

  return (
    <Grid container className={classes.moviesContainer}>
      {movies.map((movie, i) => (
        <Movie key={i} movie={movie} i={i} />
      ))}
    </Grid>
  );
};

export default MovieList;
