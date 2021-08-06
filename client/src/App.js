import React, { useState, useEffect } from 'react';
import {Link , Route, Switch } from 'react-router-dom';
import axios from 'axios';
import Movie from './Movies/Movie';
import MovieList from './Movies/MovieList';
import SavedList from './Movies/SavedList';

export default function App () {
  const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies') // Study this endpoint with Postman
        .then(response => {
          // console.log('response', response.data)
          setMovieList(response.data)
     
          // Study this response with a breakpoint or log statements
          // and set the response data as the 'movieList' slice of state
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    getMovies();
  }, []);

  const addToSavedList = id => {
    // This is stretch. Prevent the same movie from being "saved" more than once
  };

  return (
    <div>

      <Link to="/">Home</Link>
      <Link to="/movies">Movies</Link>
       
      <Switch>

        <Route path="/movies/:movieid">
          < Movie />
        </Route>

        <Route path="/movies" render={() => {
          return <MovieList movies ={movieList} />
          }} />

        <Route path="/" />

      </Switch>
    </div>
  );
}

// <SavedList list={[ /* This is stretch */]} />