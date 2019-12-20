import React, { useState, useEffect } from "react"
import { Route } from "react-router-dom"
import Header from "./components/Header.js"
import "bootstrap/dist/css/bootstrap.min.css"
import WelcomePage from "./components/WelcomePage.js"
import CharacterList from "./components/CharacterList.js"
import SearchForm from "./components/SearchForm.js"
import axios from "axios"

export default function App() {
  const [character, setCharacter] = useState([])
  const [search, setSearch] = useState("")
  const [apiName] = useState("https://rickandmortyapi.com/api/character/?name=")

  useEffect(() => {
    axios
      .get(`${apiName}${search}`)
      .then(response => {
        console.log(response.data.results)
        setCharacter(response.data.results)
      })
      .catch(error => {
        console.log(error)
      })
  }, [search])

  return (
    <main>
      <Route path="/">
        <Header />
      </Route>
      <Route exact path="/">
        <WelcomePage />
      </Route>
      <Route path="/characters">
        <SearchForm search={search} setSearch={setSearch} />
        <CharacterList character={character} />
      </Route>
    </main>
  )
}
