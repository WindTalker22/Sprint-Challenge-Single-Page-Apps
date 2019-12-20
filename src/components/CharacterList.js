import React, { useState, useEffect } from "react"
import CharacterCard from "./CharacterCard"

const CharacterList = props => {
  return (
    <div className="char-car">
      {props.character.map(item => {
        return <CharacterCard item={item} />
      })}
    </div>
  )
}

export default CharacterList
