import React from "react"
import { Link } from "react-router-dom"

export default function Header() {
  return (
    <header className="ui centered">
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
      <div className="nav-link">
        <Link to="/">Home</Link>
        <Link to="/characters">Search</Link>
      </div>
    </header>
  )
}
