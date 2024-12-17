import React, { useEffect, useState } from "react";
import axios from "axios";
import { Grid2 } from "@mui/material";

import PokemonCard from "./PokemonCard";

function PokemonList() {

  const [pokemons, setPokemons] = useState([]) // initialized to an empty array

  function fetchPokemon() {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=151")
    .then((response) => {
      setPokemons(response.data.results)
      console.log(response.data.results)
    })
  }

  useEffect(() => {
    fetchPokemon()
  },[])

  return (
    <Grid2 container justifyContent="center">
      {
        pokemons.map((pokemon, index) => (
          <PokemonCard key={pokemon.name} pokemon={pokemon} index={index+1}/>
        ))
      }
    </Grid2>
  );
}

export default PokemonList;