import React from "react";
import { useParams } from 'react-router-dom';
import MovieDetails from "../components/movieDetails/";
import PageTemplate from "../components/templateMoviePage";
import { getMovie } from '../api/tmdb-api';
import { getMovieCredits } from '../api/tmdb-api';
import { useQuery } from "react-query";
import Spinner from '../components/spinner'

const MoviePage = (props) => {
  const { id } = useParams();
  const { data: movie, error, isLoading, isError } = useQuery(
    ["getMovie", { id: id }],
    getMovie
  );
  const { data: credits, creditsError, creditsIsLoading, creditsIsError } = useQuery(
    ["getMovieCredits", { id: id }],
    getMovieCredits
  );

  if (isLoading || creditsIsLoading) {
    return <Spinner />;
  }

  if (isError || creditsIsError) {
    return <h1>{error.message || creditsError.message}</h1>;
  }
  console.log(credits)
  return (
    <>
      {movie ? (
        <>
          <PageTemplate movie={movie}>
            <MovieDetails movie={movie} credits={credits}/>
          </PageTemplate>
        </>
      ) : (
        <p>Waiting for movie details</p>
      )}
    </>
  );
};

export default MoviePage;
