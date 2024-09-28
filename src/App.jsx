import { useEffect, useState } from "react";
import "./App.css";
import bulbasaur from "./assets/pokemon/1.png";
import grass from "./assets/icons/grass.svg";
import { Search } from 'lucide-react';
function App() {
  const [data, setData] = useState();

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/ditto")
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((e) => console.log(e));
  }, []);

  return (
    <>
      <div className="container">
        
        <header>
            <div className="search-container">
              <Search className="search-icon" />
              <input type="text" placeholder="Search here" className="search-input"  />
            </div>
        </header>

        <nav>
                <a href="#">Bulbasaur</a>
                <a href="#">Ivysaur</a>
                <a href="#">Venusaur</a>
                <a href="#">Charmander</a>
            </nav>
        

        <div className="main">
         
          <h1>#001</h1>
          <div className="img-sideinfo">
            <div className="grass">
              <img src={grass} alt="" />
           

            <div className="name">
              <p>GRASS</p>
              <h2>Bulbasaur</h2>
            </div>
            </div>

            <div className="info">
              <p>Height  <span>0.7m</span> </p>
              <p>Weight <span>10 kg</span></p>
              <p>Ablities <span>Overgrow</span> </p>

             
            </div>
          </div>
          <img className="Pookie" src={bulbasaur} alt="" />

         
        </div>

        <div className="information">
          <div className="stats"><h3>Stats</h3></div>
          <div className="para">Hp</div>
          <div className="bar"><p className="range"></p></div>
          <div className="number">49</div>

          <div className="para">Attack</div>
          <div className="bar"><p className="attack"></p></div>
          <div className="number">50</div>

          <div className="para">Defense</div>
          <div className="bar"><p className="defnse"></p></div>
          <div className="number">70</div>

          <div className="para">Special-Defense</div>
          <div className="bar"><p className="sp-defnse"></p></div>
          <div className="number">45</div>
          
          <div className="para">Speed</div>
          <div className="bar"><p className="speed"></p></div>
          <div className="number">35</div>
          

          {/* <div className="ability">
            
            <p className="para">Hp 
              <div className="bar"> <p className="range"></p></div>
              <div>45</div>
            </p>

            <p className="para">Attack 
              <div className="bar"> <p className="attack"></p></div>
              <div>50</div>
            </p>

            <p className="para">Defense
              <div className="bar"> <p className="defnse"></p></div>
              <div>70</div>
            </p>

            <p className="para"> Special Defense
              <div className="bar"> <p className="sp-defnse"></p></div>
              <div>45</div>
            </p>

            <p className="para"> Speed
              <div className="bar"> <p className="speed"></p></div>
              <div>30</div>
            </p>
            
            </div> */}
        </div>

        
        
      </div>
      {/* <div>
        {data ? <pre>{JSON.stringify(data.name, null, 2)}</pre> : "Loading..."}
        {data ? (
          <pre>{JSON.stringify(data.height, null, 2)}</pre>
        ) : (
          "Loading..."
        )}
        {data ? (
          <pre>{JSON.stringify(data.weight, null, 2)}</pre>
        ) : (
          "Loading..."
        )}
        {data ? (
          <pre>{JSON.stringify(data.abilities[0].ability.name, null, 2)}</pre>
        ) : (
          "Loading..."
        )}
        {data ? (
          <pre>{JSON.stringify(data.stats[0].stat.name, null, 2)}</pre>
        ) : (
          "Loading..."
        )}
        {data ? (
          <pre>{JSON.stringify(data.stats[1].stat.name, null, 2)}</pre>
        ) : (
          "Loading..."
        )}
        {data ? (
          <pre>{JSON.stringify(data.stats[2].stat.name, null, 2)}</pre>
        ) : (
          "Loading..."
        )}
        {data ? (
          <pre>{JSON.stringify(data.stats[3].stat.name, null, 2)}</pre>
        ) : (
          "Loading..."
        )}
        {data ? (
          <pre>{JSON.stringify(data.stats[4].stat.name, null, 2)}</pre>
        ) : (
          "Loading..."
        )}
        {data ? (
          <pre>{JSON.stringify(data.stats[5].stat.name, null, 2)}</pre>
        ) : (
          "Loading..."
        )}
      </div> */}
    </>
  );
}

export default App;
