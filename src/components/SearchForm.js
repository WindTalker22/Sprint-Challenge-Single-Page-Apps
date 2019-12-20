import React, { useState } from "react"

export default function SearchForm(props) {
  return (
    <section className="search-form">
      <form>
        <input
          placeholder="Search..."
          value={props.search}
          onChange={e => {
            props.setSearch(e.target.value)
          }}
        />
      </form>
    </section>
  )
}
