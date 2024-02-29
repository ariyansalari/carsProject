'use client'

import { useState } from "react"
import { SearchManufacturer } from ".."
export const SearchBarHome = () => {
const [manufacture,setManufacture]=useState<string>('')
console.log(manufacture);

    const handleSearch=()=>{

    }
  return (
    <form className="searchbar" onSubmit={handleSearch}>
<div className="searchbar__item">
<SearchManufacturer setManufacturer={setManufacture} manufacture={manufacture}  />
</div>
    </form>
  )
}
