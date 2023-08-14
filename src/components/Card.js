import React, {useEffect, useState} from 'react'
import Youtube from 'react-youtube'
import './Card.css'
import {imageUrl, API_KEY} from '../constants'
import axios from '../Axios'

function Card(props) {
  const [movies, setMovies] = useState([])
  const [urlId, setUrlId] = useState('')
  useEffect(()=> {
    axios.get(props.url).then((response)=>{
      console.log(response.data)
      setMovies(response.data.results)
    }).catch(err=>{
     // alert('Network Error!')
    })
  }, [props])
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const handleTrailer = (id)=>{
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}`).then(response=>{
      if(response.data.results.length!==0){
        setUrlId(response.data.results[0])
      }else{
        console.log("No Trailer")
      }
    })
  }
  return (
    <div className='row'>
       <h2>{ props.title }</h2>
        <div className='posters'>
          {movies.map((obj)=>

          <img onClick={()=>handleTrailer(obj.id)} className='poster' alt='poster' src={`${imageUrl+obj.poster_path}`} />
          )}
        </div>
        { urlId && <Youtube videoId={urlId.key} opts={opts} /> }
    </div>
  )
}

export default Card