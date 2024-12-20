import React from "react";
import { Link } from "react-router-dom";
import Loading from "./Loading";

const Card = ({ pokemon, loading }) => {
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

  if(loading){
    return <Loading/>
  }

  return (
    <>
         
      {
        pokemon.map((item, index) => {
          const backgroundColor = getBackgroundColor(item.types[0].type.name); 
          
          const pokemonId = item.id;
          const cardImgPath = `/assets/pokemon/${pokemonId}.png`;

          return (
            <Link to={`/pokemon/${item.name}`} style={{ textDecoration: 'none' }}>
            <div
              key={index}
              className="Card-container"
              style={{ backgroundColor }} 
            >
              <div className="card">
                <h1>{item.name.toUpperCase()}</h1>
              </div>

              <div className="img">
                <img
                  className="card-pokie"
                  src={cardImgPath}
                  alt={item.name}
                />
              </div>

              <div className="two-info">
                <p>Height: {item.height}</p>
                <p>Weight: {item.weight}</p>
              </div>
            </div>
            </Link>
          );
        })
      }
    </>
  );
};

export default Card;
