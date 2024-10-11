import { useState } from "react";
import "./searchbar.scss";

const types = ["Buy", "Rent"]

function SearchBar() {

  const [active, setActive] = useState({type: "Buy"})

function handleBtn(val){
  setActive({type: val})
}
 

  
  return (
    <div className="searchBar">
      <button className='buttons'>
       {types.map(val => (
        <button onClick={() => handleBtn(val)} className={active.type === val? "active" : ""}>{val}</button>
       ))}
      </button>
      <form>
        <input type="text" placeholder="City Location" />
        <input type="text" placeholder="Min Price" />
        <input type="text" placeholder="Max Price" />
        <button><img src="search.png" alt="" /></button>
      </form>
    </div>
  );
}

export default SearchBar;
