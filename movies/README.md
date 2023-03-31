# Assignment 1 - ReactJS app.

Name: Sarah Scanlon (96142331)

## Overview.

This is a web application using TMDB endpoint API's and MUI components. The app is a database of movies showing different views such as discover, upconimg trending etc. Users can add to favourites, a to watch list. leave and add reviews and see all info about the movies along with recommended movies based on the movie they are looking at.

### Features.
[ A bullet-point list of the __new features__ you added to the Movies Fan app (and any modifications to existing features) .]

## NEW PAGES
+ A to watch list page (with buttons on the movie card in the top rated, upcoming, now showing, trending and     home pages)
+ Top rated movies page
+ Page displaying all movies currently showing in Irish cinemas
+ Page displaying trending movies - this changes daily
+ Button linking to a page with recommended movies for each movie (button contains movie icon from mui)

## NEW FEATURES AND MODIFICATIONS TO EXISTING CODE
+ Movie credits added to the movie details page
+ MUI pagination added to the cast and crew tables in the credits section
+ Add to favourites button added to top rated, now showing and trending movie cards
+ Edited the chips a little in the overview section of the movie details page
+ Made little changes to the text on the site header (wording, font size)


## Setup requirements.

N/A

## API endpoints.

[ List the __additional__ TMDB endpoints used, giving the description and pathname for each one.] 

e.g.
+ Top rated movies list - /movie/top_rated
+ Movie credits - /movie/{movie_id}/credits
+ Recommened movies for each movie - /movie/{movie_id}/recommendations
+ Movies now playing in Irish cinemas - /movie/now_playing ??
+ Trending movies on a current day - /trending/{media_type}/{time_window} (/trending/movie/week)

## Routing.

[ List the __new routes__ supported by your app and state the associated page.]

+ /movies/watchlist - displays list of movies the user want to watch
+ /movies/topRated - displays list of top rated movies
+ /movies/nowplayingmovies - displays list of movies in Irish cinemas
+ /movies/recommended/:id - displays movies recommended based on a selected movie
+ /movies/trending - displays movies that are trending on a current day

## Independent learning.

I had to research how to add the pagination to the credits tables on the movies details page, I found the best help for this at https://www.geeksforgeeks.org/react-mui-tablepagination-api/ I took snipits of the code on this page and edited as needed. 


