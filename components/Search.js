"use client"

import React from 'react'
import { useSearchParams, usePathname, useRouter } from 'next/navigation'


const Search = ({ placeholder }) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  function handleSearch (SearchTerm) {
    const params = new URLSearchParams(searchParams)
    if(SearchTerm) {
      params.set("query", SearchTerm);
    } else {
      params.delete("query")
    }
    replace(`${pathname}?${params.toString()}`)
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
        defaultValue={searchParams.get("query")?.toString()}
      /> 
    </>
  )
}

export default Search