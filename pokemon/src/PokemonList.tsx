import React from 'react'

interface Props{
  pokemon: string[]
}

export default function PokemonList({pokemon}: Props) {
  return (
    <div>
      <h1>Pokemon List</h1>
      {pokemon.map(
        (p, index) => {
          return <div key={index}>{index+1}: {p}</div>
        }
      )}
    </div>
  )
}
