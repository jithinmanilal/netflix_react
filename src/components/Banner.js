import React, {useEffect, useState} from 'react'
import {API_KEY, imageUrl} from '../constants'
import axios from '../Axios'
import './Banner.css'

function Banner() {
    const [movie, setMovie] = useState();
    const [currentIndex, setCurrentIndex] = useState(0);
    const resultsLength = 20;
  
    useEffect(() => {
      axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`)
        .then((response) => {
          setMovie(response.data.results[currentIndex]);
        });
  
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % resultsLength);
      }, 5000);
  
      return () => {
        clearInterval(interval);
      };
    }, [currentIndex]);
  
    useEffect(() => {
      axios
        .get(`trending/all/week?api_key=${API_KEY}&language=en-US`)
        .then((response) => {
          setMovie(response.data.results[currentIndex]);
        });
    }, [currentIndex]);
  
    return (
      <div
        style={{ backgroundImage: `url(${movie ? imageUrl + movie.backdrop_path : ''})` }}
        className="banner"
      >
        <div className="content">
          <h1 className="title">{movie ? movie.title : ''}</h1>
          <div className="banner_buttons">
            <button className="button">Play</button>
            <button className="button">My list</button>
          </div>
          <h1 className="description">{movie ? movie.overview : ''}</h1>
        </div>
        <div className="fade_bottom"></div>
      </div>
    );
  }
  
  export default Banner;