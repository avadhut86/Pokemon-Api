import React, { useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";
import Loading from "./Loading";
import { useNavigate } from "react-router-dom";

const Main_Page = () => {
  const navigate = useNavigate();
  const [pokeData, setpokeData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon");
  const [nextUrl, setnextUrl] = useState();
  const [prevUrl, setprevUrl] = useState();
  const [searchInput, setSearchInput] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const pokeFun = async () => {
    setLoading(true);
    const res = await axios.get(url);
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
    setpokeData(pokemonData);
  };

  useEffect(() => {
    pokeFun();
  }, [url]);

  const handleSearch = () => {
    if (searchInput) {
      navigate(`/pokemon/${searchInput.toLowerCase()}`);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const fetchSuggestions = async (input) => {
    if (!input) {
      setSuggestions([]);
      return;
    }

    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=2000`);
    const filteredSuggestions = res.data.results
      .filter((pokemon) => pokemon.name.startsWith(input.toLowerCase()))
      .slice(0, 6);
    setSuggestions(filteredSuggestions);
  };

  const handleInputChange = (e) => {
    const input = e.target.value;
    setSearchInput(input);
    fetchSuggestions(input);
  };

  const handleSuggestionClick = (name) => {
    setSearchInput(name);
    setSuggestions([]);
    navigate(`/pokemon/${name}`);
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <nav className="navigation">
        <img src="/assets/pokemon_navbar1.png" alt="" />
        <input
          type="text"
          placeholder="Search Here For Pokemon"
          className="search-input"
          value={searchInput}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
        />
        {suggestions.length > 0 && (
          <ul className="suggestions-list">
            {suggestions.map((pokemon) => (
              <li
                key={pokemon.name}
                onClick={() => handleSuggestionClick(pokemon.name)}
              >
                {pokemon.name}
              </li>
            ))}
          </ul>
        )}
      </nav>
      <div className="card-mainpage">
        <Card pokemon={pokeData} loading={loading} />
      </div>
      {!loading && pokeData.length > 0 && (
        <div className="btn-grp">
          <button onClick={() => setUrl(prevUrl)} disabled={!prevUrl}>
            Previous
          </button>
          <button onClick={() => setUrl(nextUrl)} disabled={!nextUrl}>
            Next
          </button>
        </div>
      )}
    </>
  );
};

export default Main_Page;
