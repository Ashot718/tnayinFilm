import React from 'react'
import './Card.css';



function Card({populary}) {
    const img_url = "https://image.tmdb.org/t/p/w500";
    return (
      <div className='card'>
        <img src={img_url+populary.poster_path} />
        <h1> {populary.original_title} </h1>
         <p>{populary.release_date} </p>
      </div>
    )
  }
  
  export default Card