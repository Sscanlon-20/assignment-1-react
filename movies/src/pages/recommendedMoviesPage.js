import React from "react";
import { useParams } from 'react-router-dom';
import PageTemplate from '../components/templateMovieListPage';
import { getMovieRecommendations } from "../api/tmdb-api";
import PlaylistAddIcon from '../components/cardIcons/addToPlaylist';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';

const RecommendedMoviesPage = (props) => {

  //const {  data, error, isLoading, isError }  = useQuery('Recommendations', getMovieRecommendations)

  
    const { id } = useParams();
    const { data, error, isLoading, isError } = useQuery(
      ["Recommendations", { id: id }],
      getMovieRecommendations,
    );

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
      title="Recommended Movies"
      movies={movies}
      action={(movie) => {
        return <PlaylistAddIcon movie={movie} />
      }}
    />
);
};
export default RecommendedMoviesPage;