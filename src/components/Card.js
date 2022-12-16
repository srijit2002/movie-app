import React from 'react'
import { useAppContext } from '../context/Context'

const Card = ({title,poster,description,rating,release_date,vote_count}) => {
  const {setPopup} =useAppContext();

  const handleClick=()=>{
      setPopup({isOpen:true,data:{title,poster,release_date,description,vote_count,vote_average:rating}});
  }

  return (
    <div className='card_wrapper' onClick={()=>handleClick()}>
      <div className='card_poster'>
        <img src={poster} alt={title}/>
      </div>
      <p className='card_title'>
        {title}
      </p>
      <div className='card_rating'>{rating.toFixed(1)}</div>
    </div>
  )
}

export default Card