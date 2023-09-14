import React, { useState } from 'react'

function SearchBar () {
  const [searchTerm, setSearchTerm] = useState('')
  const [searchResults, setSearchResults] = useState([])

  const handleSearch = () => {
    // Implementa la lógica de búsqueda aquí
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Search by Name or Phone Number"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <ul>
        {searchResults.map((result, index) => (
          <li key={index}>
            {result.firstName} {result.lastName} - {result.phoneNumber}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SearchBar
