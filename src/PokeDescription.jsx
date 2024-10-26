import React, { useEffect, useState } from 'react'
import { Search } from "lucide-react";
import { useParams } from 'react-router-dom';

const PokeDescription = () => {
  const getBackgroundColor = (type) => {
    switch (type) {
      case "fire":
        return "#ff7402";
      case "grass":
        return "#33a165";
      case "water":
        return "#58abf6";
      case "ghost":
        return "#705898";
      case "steel":
        return "#00858a";
      case "psychic":
        return "#c90086";
      case "ground":
        return "#c90089";
      case "ice":
        return "#70deff";
      case "flying":
        return "#5d4e75";
      case "electric":
        return "#facd4b";
      case "normal":
        return "#753845";
      case "poison":
        return "#7e0058";
      case "rock":
        return "#6e1a00";
      case "fighting":
        return "#634136";
      case "dark":
        return "#272625";
      case "bug":
        return "#6e1a00";
      case "dragon":
        return "#00c431";
      case "fairy":
        return "#d31c81";
      case "shadow":
        return "#29292c";

      default:
        return "#757575";
    }
  };

  
    const { name } = useParams(); 
    const [pokemonData, setPokemonData] = useState(null) 

    console.log(pokemonData)

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`)
        .then((response) => response.json())
        .then((data) => setPokemonData(data))
        .catch((error) => console.error(error));
    }, [name])

    if (!pokemonData) {
      return <h1>Loading...</h1>;
    }
    const pokemonId = pokemonData.id;
    const imagePath =  `/assets/pokemon/${pokemonId}.png`;
    
    const pokemonType = pokemonData.types[0].type.name;
    const typeImg = `/assets/icons/${pokemonType}.svg`;

    const backgroundColor = getBackgroundColor(pokemonData.types[0].type.name); 
    
  return (
    <>
       { pokemonData && <div className="container"  style={{ backgroundColor}}>
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

        <div className="main">
          <h1>#0{pokemonData.id}</h1>
          <div className="img-sideinfo">
            <div className="grass">
              <img src={typeImg} alt="" />

              <div className="name">
                <p> {pokemonData.types[0].type.name.toUpperCase()} </p>
                <h2>{pokemonData.name.toUpperCase()}</h2>
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
            <p className="range" style={{ width:`${pokemonData.stats[0].base_stat}%`}}></p>
          </div>
          <div className="number"> {pokemonData.stats[0].base_stat} </div>

          <div className="para">Attack</div>
          <div className="bar">
            <p className="attack" style={{ width:`${pokemonData.stats[1].base_stat}%`}}></p>
          </div>
          <div className="number"> {pokemonData.stats[1].base_stat} </div>

          <div className="para">Defense</div>
          <div className="bar">
            <p className="defnse"style={{ width:`${pokemonData.stats[2].base_stat}%`}}></p>
          </div>
          <div className="number"> {pokemonData.stats[2].base_stat}</div>

          <div className="para">Special-Defense</div>
          <div className="bar">
            <p className="sp-defnse"style={{ width:`${pokemonData.stats[4].base_stat}%`}}></p>
          </div>
          <div className="number"> {pokemonData.stats[4].base_stat} </div>

          <div className="para">Speed</div>
          <div className="bar">
            <p className="speed"style={{ width:`${pokemonData.stats[5].base_stat}%`}}></p>  {/*max = "200"*/} 
          </div>
          <div className="number"> {pokemonData.stats[5].base_stat} </div>
        </div>
      </div> }


    </>
  )
}

export default PokeDescription


