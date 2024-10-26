import React, { useEffect, useState } from "react";
import Card from './Card'; 
import axios from 'axios';

const Main_Page = () => {
  const [pokeData, setpokeData] = useState([]); 
  const [loading, setLoading] = useState(true);
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon");
  const [nextUrl, setnextUrl] = useState();
  const [prevUrl, setprevUrl] = useState();

  const pokeFun = async () => {
    setLoading(true);
    const res = await axios.get(url);
    console.log(res.data.results); 
    setnextUrl(res.data.next);
    setprevUrl(res.data.previous);
    getPokemon(res.data.results);
    setLoading(false);
  };

  const getPokemon = async (res) => {
    const pokemonData = await Promise.all(
      res.map(async (item) => {
        const result = await axios.get(item.url);
        return result.data;
      })
    );
    console.log(pokemonData); // Debugging: ensure you have fetched individual Pokémon data
    setpokeData(pokemonData);
  };

  useEffect(() => {
    pokeFun();
  }, [url]);

  return (
    <>
      <div className="card-mainpage">
        <Card pokemon={pokeData} loading={loading} />
      </div>

      <div className="btn-grp">
        <button onClick={() => setUrl(prevUrl)} disabled={!prevUrl}>Previous</button>
        <button onClick={() => setUrl(nextUrl)} disabled={!nextUrl}>Next</button>
      </div>
    </>
  );
};

export default Main_Page;
