import { useState } from "react";
import "./searchbar.scss";

function SearchBar() {

  const items = ['Buy', 'Rent']

  let [active, setActive] = useState({type: 'Buy'})

  function handleBtn(item){
    setActive({type: item})
  }
  return (
    <div>
      <div className="searchBar">
        <div className="btn">
         {items.map(item =>(
          <button onClick={() => handleBtn(item)} className={active.type === item? 'active': ''}>{item}</button>
         ))}
         
        </div>

        <form>
        <input type="text" placeholder='City Location'/>
        <input type="text" placeholder='Min Price'/>
        <input type="text" placeholder='Max Price' />
        <button><img src="search.png" alt="" /></button>
        </form>
      </div>
    </div>
  )
}

export default SearchBar