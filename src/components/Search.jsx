import React, { Component } from 'react'
import '../styles/components/search.scss'

const Search = () => (
<section className="main">
  <h2 className="main__title">¿Qué quieres ver hoy?</h2>
  <input type="text" className="input" placeholder="Buscar..." />
</section>

)

export default Search;