import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Typography } from "@mui/material";

function PokemonDetail() {

  const {name} = useParams()
  const [pokemon, setPokemon] = useState(null)

  const imageUrl = 'https://placehold.co/400'

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      Pokemon Detail
    </div>
  );
}

export default PokemonDetail;
