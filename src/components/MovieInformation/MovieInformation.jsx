import React from "react";
import {
  Typography,
  Button,
  ButtonGroup,
  Grid,
  Box,
  CircularProgress,
  Rating,
} from "@mui/material";
import {
  Movie as MovieIcon,
  Theaters,
  Language,
  PlusOne,
  Favorite,
  FavoriteBorderOutlined,
  Remove,
  ArrowBack,
} from "@mui/icons-material";
import { selectGenreOrCategory } from "../../features/currentGenreOrCategory";
import genreIcons from "../../assets/genres";
import { Link, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import useStyles from "./style.js";
import { useGetMovieQuery} from "../../services/TMDB";

const MovieInformation = () => {
  const { id } = useParams();
  const { data, isFetching, error } = useGetMovieQuery(id);
  const classes = useStyles();
  const dispatch = useDispatch();
  const isMovieFavorited = false; 
  const isMovieWatchlisted = false; 
   


  const addToFavorites = () => {
    // Logic for adding to favorites
  };

  const addToWatchlist = () => {
    // Logic for adding to watchlist
  };

  
  if (isFetching) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <CircularProgress size="8rem" />
      </Box>
    );
  }

  if (error) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
        flexDirection="column"
      >
        <Typography variant="h5" color="error" gutterBottom>
          Something has gone wrong
        </Typography>
        <Link to="/" style={{ textDecoration: "none", marginTop: "1rem" }}>
          <Button variant="contained" color="primary" startIcon={<ArrowBack />}>
            Go back
          </Button>
        </Link>
      </Box>
    );
  }

  if (!data) return null;

  return (
    <Grid container className={classes.containerSpaceAround}>
      <Grid item sm={12} lg={4}>
        <img
          className={classes.poster}
          alt={data.title || "Movie Poster"}
          src={
            data.poster_path
              ? `https://image.tmdb.org/t/p/w500/${data.poster_path}`
              : "https://www.fillmurray.com/200/300"
          }
        />
      </Grid>
      <Grid item container direction="column" lg={7}>
        <Typography variant="h3" align="center" gutterBottom>
          {data.title} ({data.release_date?.split("-")[0] || "N/A"})
        </Typography>
        <Typography variant="h5" align="center" gutterBottom>
          {data.tagline || "No tagline available"}
        </Typography>
        <Grid item className={classes.containerSpaceAround}>
          <Box display="flex" alignItems="center">
            <Rating readOnly value={data.vote_average / 2 || 0} precision={0.1} />
            <Typography variant="subtitle1" gutterBottom style={{ marginLeft: "10px" }}>
              {data.vote_average ? `${data.vote_average} / 10` : "Rating not available"}
            </Typography>
          </Box>
          <Typography variant="h6" align="center" gutterBottom>
            {data.runtime ? `${data.runtime} min` : "Runtime not available"}{" "}
            {data.spoken_languages?.length > 0 ? ` / ${data.spoken_languages[0].name}` : ""}
          </Typography>
        </Grid>
        <Grid item className={classes.genresContainer}>
          {data.genres?.map((genre) => (
            <Link
              key={genre.name}
              className={classes.links}
              to="/"
              onClick={() => dispatch(selectGenreOrCategory(genre.id))}
              style={{
                display: "flex",
                alignItems: "center",
                margin: "0.5rem 0",
              }}
            >
              <img
                src={genreIcons[genre.name.toLowerCase()]}
                className={classes.genreImage}
                height={30}
                alt={`${genre.name} icon`}
              />
              <Typography color="textPrimary" variant="subtitle1">
                {genre.name}
              </Typography>
            </Link>
          ))}
        </Grid>
        <Typography variant="h5" gutterBottom style={{ marginTop: "10px" }}>
          Overview
        </Typography>
        <Typography style={{ marginBottom: "2rem" }}>{data.overview}</Typography>
        <Typography variant="h5" gutterBottom>
          Top Cast
        </Typography>
        <Grid item container spacing={2}>
          {data.credits.cast
            .filter((character) => character.profile_path)
            .slice(0, 6)
            .map((character, i) => (
              <Grid
                key={i}
                item
                xs={4}
                md={2}
                component={Link}
                to={`/actors/${character.id}`}
                style={{ textDecoration: "none" }}
              >
                <img
                  className={classes.castImage}
                  src={`http://image.tmdb.org/t/p/w500/${character.profile_path}`}
                  alt={character.name}
                />
                <Typography color="textPrimary">{character.name}</Typography>
                <Typography color="textSecondary">
                  {character.character.split("/")[0]}
                </Typography>
              </Grid>
            ))}
        </Grid>
        <Grid item container style={{ marginTop: "2rem" }}>
          <div className={classes.buttonsContainer}>
            <Grid item xs={12} sm={6} className={classes.buttonsContainer}>
              <ButtonGroup size="small" variant="outlined">
                {data.homepage && data.homepage.startsWith('http') && (
                  <Button
                    target="_blank"
                    rel="noopener noreferrer"
                    href={data.homepage}
                    endIcon={<Language />}
                  >
                    Website
                  </Button>
                )}
                <Button
                  target="_blank"
                  rel="noopener noreferrer"
                  href={`https://www.imdb.com/title/${data.imdb_id}`}
                  endIcon={<MovieIcon />}
                >
                  IMDb
                </Button>
                <Button onClick={() => {}} href="#" endIcon={<Theaters />}>
                  Trailer
                </Button>
              </ButtonGroup>
            </Grid>
            <Grid item xs={12} sm={6} className={classes.buttonsContainer}>
              <ButtonGroup size="medium" variant="outlined">
                <Button
                  onClick={addToFavorites}
                  endIcon={isMovieFavorited ? <FavoriteBorderOutlined /> : <Favorite />}
                >
                  {isMovieFavorited ? "Unfavorite" : "Favorite"}
                </Button>
                <Button
                  onClick={addToWatchlist}
                  endIcon={isMovieWatchlisted ? <Remove /> : <PlusOne />}
                >
                  Watchlist
                </Button>
                <Button
                  endIcon={<ArrowBack />}
                  sx={{ borderColor: "primary.main" }}
                  component={Link}
                  to="/"
                  color="inherit"
                >
                  Back
                </Button>
              </ButtonGroup>
            </Grid>
          </div>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default MovieInformation;
