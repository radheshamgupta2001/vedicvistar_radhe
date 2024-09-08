import React from "react";
import { Divider, List, ListItem, ListItemText, ListSubheader, ListItemIcon, Box, CircularProgress } from "@mui/material";
import { Link } from "react-router-dom";
import { useTheme } from "@mui/styles";
import {selectGenreOrCategory } from '../../features/currentGenreOrCategory'
import { useGetGenresQuery } from "../../services/TMDB";

import useStyles from "./styles";
import genreIcons from '../../assets/genres'

import { useDispatch, useSelector } from "react-redux";

const categories = [
  { label: "Popular", value: "popular" },
  { label: "Top Rated", value: "top_rated" },
  { label: "Upcoming", value: "upcoming" },
];

const redLogo =
  "https://fontmeme.com/temporary/c250e4d4b7ae45a045443d5f2ecf2662.png";
const blueLogo =
  "https://fontmeme.com/temporary/c250e4d4b7ae45a045443d5f2ecf2662.png";

const Sidebar = ({ setMobileOpen }) => {
  const {genreIdOrCategoryName} = useSelector((state) => state.currentGenreOrCategory);
  const theme = useTheme();
  const classes = useStyles();
  const {data, isFetching}=useGetGenresQuery();
  const dispatch = useDispatch();

  
  return (
    <div>
      <>
        <Link to="/" className={classes.imageLink}>
          <img
            className={classes.image}
            src={theme.palette.mode === "light" ? redLogo : blueLogo}
            alt="VadicVistar logo"
          />
        </Link>
        <Divider />
        <List>
          <ListSubheader>Categories</ListSubheader>
          {categories.map(({ label, value }) => (
            <Link key={value} className={classes.links} to="/">
              <ListItem onClick={() => dispatch(selectGenreOrCategory(value))} button>
                <ListItemIcon>
                  <img
                    src={genreIcons[label.toLowerCase()]}
                    className={classes.genreImages}
                    height={30}
                  />
                </ListItemIcon>
                <ListItemText primary={label} />
              </ListItem>
            </Link>
          ))}
        </List>
        <Divider/>
        <List>
          <ListSubheader>Genres</ListSubheader>
          {isFetching ? (
            <Box display='flex' justifyContent="center">
                 <CircularProgress />
            </Box>
          ): data.genres.map(({ name, id }) => (
            <Link key={name} className={classes.links} to="/">
              <ListItem onClick={() => dispatch(selectGenreOrCategory(id))} button>
              <ListItemIcon>
                  <img
                    src={genreIcons[name.toLowerCase()]}
                    className={classes.genreImages}
                    height={30}
                  />
                </ListItemIcon>
                <ListItemText primary={name} />
              </ListItem>
            </Link>
          ))}
        </List>
      </>
    </div>
  );
};

export default Sidebar;
