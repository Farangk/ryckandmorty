import { DivSearch, SearchInput, ButtonSearch } from "./styles/SearchBar";
import { useState } from "react";


export default function SearchBar(props) {
   const [id, setId] = useState("")

   const handleChange = (e) => {
      setId(e.target.value)
   }
   return (
      <DivSearch>
      <SearchInput type='search' onChange={handleChange}/>
      <ButtonSearch onClick={() => props.onSearch(id)}>Agregar</ButtonSearch>
      </DivSearch>
   );
}
