import React from 'react'
import {FaStar} from "react-icons/fa";

const Star = ({filled , onClick}) => {
  return (
    <div>
      <FaStar
         color={filled ? "blue" : "black"}
         onClick = {onClick}
      />

    </div>
  )
}

export default Star;
