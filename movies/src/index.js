import React from "react";
import { createRoot } from "react-dom/client";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import FavoriteMoviesPage from "./pages/favoriteMoviesPage";
import MovieReviewPage from "./pages/movieReviewPage";
import UpcomingMoviesPage from "./pages/upcomingMoviesPage";
import SiteHeader from './components/siteHeader'
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
    <SiteHeader />
    <Routes>
      <Route path="/reviews/:id" element={ <MovieReviewPage /> } />
      <Route path="/movies/favorites" element={<FavoriteMoviesPage />} />
      <Route path="/movies/:id" element={<MoviePage />} />
      <Route path="/" element={<HomePage />} />
      <Route path="/movies/upcoming" element={<UpcomingMoviesPage />} />
      <Route path="*" element={ <Navigate to="/" /> } />
    </Routes>
  </BrowserRouter>
  );
};

const rootElement = createRoot( document.getElementById("root") )
rootElement.render(<App />);


