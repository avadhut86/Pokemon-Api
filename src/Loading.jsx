import React from 'react'
import myGif from '/assets/loading/pokeloading.gif';

const Loading = () => {
  return (
    <div className="center_Gif">
    <img src={myGif} alt="Loading Gif" className="loading_gif"/>
    </div>
  )
}

export default Loading