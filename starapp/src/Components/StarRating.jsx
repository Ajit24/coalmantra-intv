import React from 'react'
import { useState } from 'react';
import Star from './Star';
import "./main.css"


const StarRating = ({onChange}) => {
    const [rating , setRating] = useState(0);
    // const[color , setColor] = useState("")

    // const changeColor = ()=>{

    // }

     
    const changeRating = (newRating)=>{
        setRating(newRating);
        onChange?.(newRating);
    }

  return (
    <div>
      <span className='main'>
        {[1,2,3,4,5].map((value) => (
            <Star
            key={value}
            filled = {value <= rating}
            onClick = {() =>changeRating(value)}
            />
        ))}
      </span>
      {

      }
    </div>
  )
}

export default StarRating;
