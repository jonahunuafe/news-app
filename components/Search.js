"use client"

import React from 'react'
import { useSearchParams } from 'next/navigation'


const Search = ({ placeholder }) => {
  const searchParams = useSearchParams()

  function handleSearch (SearchTerm) {
    const params = new URLSearchParams(searchParams)
    if(SearchTerm) {
      params.set("query", SearchTerm);
    } else {
      params.delete("query")
    }
    console.log(SearchTerm)
  }

  return (
    <>
      <label>Search</label>
      <input 
        placeholder={placeholder}
        onChange={(e) => {
          handleSearch(e.target.value)
        }}
      /> 
    </>
  )
}

export default Search