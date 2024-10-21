import React, { useEffect, useState } from 'react'
import bulbasaur from "./assets/pokemon/1.png";
import grass from "./assets/icons/grass.svg";
import { Search } from "lucide-react";
import { useParams } from 'react-router-dom';

const PokeDescription = () => {
    const { name } = useParams(); 
    const [pokemonData, setPokemonData] = useState(null) 

    
    const imagePath = `/assets/pokemon/${name.toLowerCase()}.png`;

    console.log(pokemonData)

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`)
        .then((response) => response.json())
        .then((data) => setPokemonData(data))
        .catch((error) => console.error(error));
    }, [name])

 
    
  return (
    <>
       { pokemonData && <div className="container">
        <header>
          <div className="search-container">
            <Search className="search-icon" />
            <input
              type="text"
              placeholder="Search here"
              className="search-input"
            />
          </div>
        </header>

        <nav>
          <a href="#">Bulbasaur</a>
          <a href="#">Ivysaur</a>
          <a href="#">Venusaur</a>
          <a href="#">Charmander</a>
        </nav>

        <div className="main">
          <h1>{pokemonData.id}</h1>
          <div className="img-sideinfo">
            <div className="grass">
              <img src={grass} alt="" />

              <div className="name">
                <p> {pokemonData.types[0].type.name} </p>
                <h2>{pokemonData.name}</h2>
              </div>
            </div>

            <div className="info">
              <p>
                Height <span> {pokemonData.height}m </span>
              </p>
              <p>
                Weight <span> {pokemonData.weight}kg </span>
              </p>
              <p>
                Ablities <span>{pokemonData.abilities[0].ability.name}</span>{" "}
              </p>
            </div>
          </div>
          <img className="Pookie" src={imagePath} alt="" />
        </div>

        <div className="information">
          <div className="stats">
            <h3>Stats</h3>
          </div>
          <div className="para">Hp</div>
          <div className="bar">
            <p className="range"></p>
          </div>
          <div className="number"> {pokemonData.stats[0].base_stat} </div>

          <div className="para">Attack</div>
          <div className="bar">
            <p className="attack"></p>
          </div>
          <div className="number"> {pokemonData.stats[1].base_stat} </div>

          <div className="para">Defense</div>
          <div className="bar">
            <p className="defnse"></p>
          </div>
          <div className="number"> {pokemonData.stats[2].base_stat}</div>

          <div className="para">Special-Defense</div>
          <div className="bar">
            <p className="sp-defnse"></p>
          </div>
          <div className="number"> {pokemonData.stats[4].base_stat} </div>

          <div className="para">Speed</div>
          <div className="bar">
            <p className="speed"></p>
          </div>
          <div className="number"> {pokemonData.stats[5].base_stat} </div>
        </div>
      </div> }


    </>
  )
}

export default PokeDescription