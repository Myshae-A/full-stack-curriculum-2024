import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Typography } from "@mui/material";

function PokemonDetail() {

  const {name} = useParams()
  const [pokemon, setPokemon] = useState(null)

  function fetchPokemonDetail() {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
    .then((response) => {
      setPokemon(response.data)
      console.log(response.data)
    })
  }

  useEffect(() => {
    fetchPokemonDetail()
  },[])

  const imageUrl = 'https://placehold.co/400'

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      {pokemon && (
        <>
          <Typography variant="h4" component="h2">
            {pokemon.name.toUpperCase()}
          </Typography>
          <img
            src={pokemon.sprites.front_default}
            alt={pokemon.name}
            style={{ width: "400px", height: "400px" }} // Adjust the size here
          />
          <Typography variant="h6" component="h3">
            Stats:
          </Typography>
          <ul>
            {pokemon.stats.map((stat) => (
              <li key={stat.stat.name}>
                {stat.stat.name}: {stat.base_stat}
              </li>
            ))}
          </ul>
        </>
      )}
      
    </div>
  );
}

export default PokemonDetail;
