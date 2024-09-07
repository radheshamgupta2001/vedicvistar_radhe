import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const tmdbApikey = process.env.REACT_APP_TMDB_KEY;
export const tmdbApi = createApi({
  reducerPath: 'tmdbApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.themoviedb.org/3' }),
  endpoints: (builder) => ({
    //* GET Genres

    getGenres : builder.query({
      query : () => `genre/movie/list?api_key=${tmdbApikey}`
    }),

    //* GET Movies by [Type]
    getMovies: builder.query({
      query: ({genreIdOrCategoryName, page, searchQuery}) => {

        //* GET Movies by Search
        if(searchQuery){
          return `/search/movie?query=${searchQuery}&page=${page}&api_key=${tmdbApikey}`
        } 

        //* GET Movies by Category
        if(genreIdOrCategoryName && typeof genreIdOrCategoryName === 'string'){
          return `movie/${genreIdOrCategoryName}?page=${page}&api_key=${tmdbApikey}`

        }
         //* GET Movies by Genre
         if(genreIdOrCategoryName && typeof genreIdOrCategoryName === 'number'){
          return `discover/movie?with_genres=${genreIdOrCategoryName}&page=${page}&api_key=${tmdbApikey}`
         }
        return `movie/popular?page=${page}&api_key=${tmdbApikey}`;
      } 
    }),

    //* Get Movie
    getMovie : builder.query({
      query: (id) => `/movie/${id}?append_to_response=video,credits&api_key=${tmdbApikey}`,
    }),
  }),
});

export const {
  useGetGenresQuery,
  useGetMoviesQuery,
  useGetMovieQuery,
} = tmdbApi;
