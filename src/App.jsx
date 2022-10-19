import React, { useEffect, useState } from "react";
import SearchResults from "./Components/SearchResults";
import "./style.scss";


const API_KEY = "XV56Zc1drt69s1kBYzYGM8SqXToDBIIA"
const SEARCH_URL = "https://api.giphy.com/v1/gifs/search"

export const App = (props) => {
  const {title}=props;
  const[gifs, setGifs] = useState([])

  // fetch(`${SEARCH_URL}?api_key=${API_KEY}&q=${"nyancat"}&limit=50`)

     

  const fetchGifs = str=>{
    fetch(`${SEARCH_URL}?api_key=${API_KEY}&q=${str}&limit=50`)
    .then(res=>res.json())
    .then(results=>setGifs(results.data))
  }


  const keydownHandler = (event) =>{
    if (event.keyCode===13) {
      fetchGifs(event.target.value)
    }
    // console.log(event.target.value);
  }



  useEffect (()=> {
    fetchGifs()
  },[]);


if(!gifs.length) return null


return(
  <div className ="app">
    <header>{title}</header>
    <main>
      {/* <img src={gifs[0
      ].images.original.url} alt=""></img> */}
      <h1>Search Giphy</h1>
      <input onKeyDown={keydownHandler}></input>
      <SearchResults data={gifs}/>
    </main>
  </div>
);
};
export default App;
