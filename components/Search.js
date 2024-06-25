"use client"

import React from 'react'
import { SearchNews } from '@/lib/action'

const Search = () => {
  return (
    <div>
        <form
            action={SearchNews}
        >
            <input type="text" placeholder='Search...' />
            <button>
                Search
            </button>
        </form>
    </div>
  )
}

export default Search