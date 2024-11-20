import { useState, useEffect, useRef, createContext } from 'react'
import './App.css'
import "./PokemonList"
import PokemonList from './PokemonList'
import axios from "axios"
import Pagination from './Pagination'

interface IPokemon {
  names: string[]
}

interface IPokemonResult {
  name: string
  url: string
}

interface IAppContext {
  setCurrentUrl: Function
  prevUrl: string | null
  nextUrl: string | null
}

export const AppContext = createContext<IAppContext>({setCurrentUrl: () => null, prevUrl: "", nextUrl: ""})

function App() {
  const [currentUrl, setCurrentUrl] = useState<string>("https://pokeapi.co/api/v2/pokemon")
  const [prevUrl, setPrevUrl] = useState<string | null>(null)
  const [nextUrl, setNextUrl] = useState<string | null>("https://pokeapi.co/api/v2/pokemon?offset=20")
  const [pokemon, setPokemon] = useState<IPokemon>({ names: ["no pokemon"] })
  const renderCount = useRef(1)

  useEffect(() => { // async, so it gets triggered after re-render, so renderCount will always be behind
    renderCount.current += 1
  })

  useEffect(() => {
    axios.get(currentUrl)
      .then(
        res => {
          setPokemon( // triggers re-render, but this useEffect rook doesn't get executed again
            { names: res.data.results.map((poke: IPokemonResult) => poke.name) }
          )
          setNextUrl(res.data.next)
          setPrevUrl(res.data.previous)
        },
        () => 4
      )
  }, [currentUrl])

  return (
    <div>
      <AppContext.Provider value = {{ setCurrentUrl: setCurrentUrl, prevUrl: prevUrl, nextUrl: nextUrl }}>
        <p>Render count: {renderCount.current}</p>
        <PokemonList pokemon={pokemon.names} />
        <Pagination/>
      </AppContext.Provider>
    </div>
  )
}

export default App
