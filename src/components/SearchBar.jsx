import React, { useState } from 'react'

function SearchBar ({ contacts }) {
  const [searchTerm, setSearchTerm] = useState('')
  const [searchResults, setSearchResults] = useState([])

  const handleSearch = () => {
    const filteredContacts = contacts.filter((contact) =>
      contact.firstName.toLowerCase().includes(searchTerm.toLowerCase())
    )
    setSearchResults(filteredContacts)
  }

  return (
    <div className='search-container'>
      <div className='search-container-input'>
        <input
            type="text"
            placeholder="Search by Name"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <ul>
        {searchResults.map((result, index) => (
          <li key={index}>
            <span>{result.firstName} {result.lastName}</span>
            <span>{result.phoneNumber}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SearchBar
