import React, { useEffect, useState } from 'react'
import { Search } from "lucide-react";
import {useNavigate, useParams } from 'react-router-dom';
import loadGif from '/assets/loading/DataLoading.gif'
import Stats from './Stats';

const PokeDescription = () => {
   const navigate = useNavigate()
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
    const [searchInput, setSearchInput] = useState('')

    console.log(pokemonData)

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`)
        .then((response) => response.json())
        .then((data) => setPokemonData(data))
        .catch((error) => console.error(error));
    }, [name])

    if (!pokemonData) {
      return (
        <div>
        <h1>Loading...</h1>;
        <img src={loadGif} alt="PikachuGif" className='pikachuLoad' />;
        </div>
      ) 
     }

     const handleSearch = () =>{
      if (searchInput){
        navigate(`/pokemon/${searchInput.toLowerCase()}`)
        fetchPokemon(searchInput.toLowerCase());
      }
     }
     console.log(handleSearch)

     const handleKeyPress = (e) => {
      if (e.key === 'Enter') {
        handleSearch(null);
      }
    };

    console.log(loadGif)
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
              value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            onKeyPress={handleKeyPress}
            />
          </div>
        </header>

        <div className="main">
          <h1>#{pokemonData.id}</h1>
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

         <Stats pokemonData = {pokemonData}/> 
      </div> 
      }
    </>
  )
}

export default PokeDescription


