import React from "react";
import PageTemplate from '../components/templateMovieListPage';
import { getNowPlayingMovies } from "../api/tmdb-api";
import PlaylistAddIcon from '../components/cardIcons/addToPlaylist';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToFavoritesIcon from '../components/cardIcons/addToFavorites';

const NowPlayingMoviesPage = (props) => {

  const { data, error, isLoading, isError }  = useQuery('NowPlaying', getNowPlayingMovies)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const movies = data.results;

  // Redundant, but necessary to avoid app crashing.
  const favorites = movies.filter(m => m.favorite)
  localStorage.setItem('favorites', JSON.stringify(favorites))
 
  return (
    <PageTemplate
      title="Movies Showing in Irish Cinemas"
      movies={movies}
      action={(movie) => {
        return (
          <>
            <AddToFavoritesIcon movie={movie} />
            <PlaylistAddIcon movie={movie} />
          </>
        );
      }}
      />
);
};
export default NowPlayingMoviesPage;

 






