import React from 'react'

const Stats = ({pokemonData}) => {
  return (
   <>
   <div className='Stats_container'>
   
   <div className='stats'>
   <h3>Stats</h3>
   </div>

    <div className="name_bar_number">
   <div className='powerName'>
   <p className='para'>Hp</p>
   <p className='para'>Attack</p>
   <p className='para'>Defense</p>
   <p className='para'>Special-Defense</p>
   <p className='para'>Speed</p>
    </div>

   <div className='powerProgressBar'>
   <p className='bar'>
   <p className="range" style={{ width:`${pokemonData.stats[0].base_stat}%`}}></p>
   </p>
   
   <p className='bar'>
   <p className="attack" style={{ width:`${pokemonData.stats[1].base_stat}%`}}></p>
   </p>

   <p className='bar'>
   <p className="defnse" style={{ width:`${pokemonData.stats[2].base_stat}%`}}></p>
   </p>

   <p className='bar'>
   <p className="sp-defnse" style={{ width:`${pokemonData.stats[4].base_stat}%`}}></p>
   </p>

   <p className='bar'>
   <p className="speed" style={{ width:`${pokemonData.stats[5].base_stat}%`}}></p>
   </p>
    </div>

   <div className='pokeNumbers'>
    <p className='number'>{pokemonData.stats[0].base_stat}</p>
    <p className='number'>{pokemonData.stats[1].base_stat} </p>
    <p className='number'>{pokemonData.stats[2].base_stat} </p>
    <p className='number'>{pokemonData.stats[4].base_stat} </p>
    <p className='number'>{pokemonData.stats[5].base_stat} </p>
</div>
</div>
</div>  
   </>
  )
}

export default Stats