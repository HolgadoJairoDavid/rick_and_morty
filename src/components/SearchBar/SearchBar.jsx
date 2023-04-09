import style from './searchBar.module.css'
import { useState } from 'react';

export default function SearchBar({onSearch}) {

   let [id, setId] = useState("");

   const handleChange = (event) => {
      setId(id= event.target.value)
   }

   const handleKeyDown = (event) => {
      if(event.key === 'Enter') {
        onSearch(id)
        setId('')
     }
   }
   return (
      <div className={style.SearchBar}>
         <input type='search' value={id} placeholder='Ingrese el id del personaje' onKeyDown={handleKeyDown} onChange={handleChange}/>
         <button onClick={()=> {onSearch(id); setId('')}}>Agregar</button>
      </div>
   );
}
