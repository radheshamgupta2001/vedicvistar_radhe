import React, { useState } from 'react';
import { useGetMoviesQuery } from '../../services/TMDB';
import { useSelector } from 'react-redux';
import {MovieList} from '..';
import { Box, CircularProgress, Typography } from '@mui/material';
import {selectGenreOrCategory } from '../../features/currentGenreOrCategory'

const Movies = () => {
  const [page,setpPage] = useState(1);
  const {genreIdOrCategoryName, searchQuery} = useSelector((state) => state.currentGenreOrCategory);
  const { data, error, isFetching } = useGetMoviesQuery({ genreIdOrCategoryName, page, searchQuery});

  if (isFetching) {
    return (
      <Box display='flex' justifyContent="center">
        <CircularProgress size='4rem' />
      </Box>
    );
  }

  if (error) {
    return 'An error has occurred.';
  }

  if (!data || !data.results || data.results.length === 0) {
    return (
      <Box display="flex" alignItems="center" mt="20px">
        <Typography variant="h4">
          No movies available. Please try again later.
        </Typography>
      </Box>
    );
  }

  return (
    <MovieList movies={data.results} />
  );
};

export default Movies;
