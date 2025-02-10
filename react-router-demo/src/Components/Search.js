import React from 'react'
import { useSearchParams } from 'react-router-dom'

function Search() {
   const [searchFaramas, setSearchFaramas] = useSearchParams();
   const handleSearch = (e) =>{
    e.preventDefault();
    const data = searchFaramas.get('q');
    const age = searchFaramas.get('age');

    alert(data + " " +  age);
   }
    return (
        <div>
            <h1>This is a Search Page..</h1>
            <button onClick={() => setSearchFaramas({q:"Kumar"})}>Show All Users</button>
            <form onSubmit={handleSearch}>
                <label htmlFor="">Search: </label>
                <input type="text" placeholder='Search' onChange = {(e) => setSearchFaramas({q:e.target.value})}/>
                <br /><br />
                <input type="submit" value="Submit" />
                <input type="button" value="Reset" onClick={() => setSearchFaramas({})}/>    
            </form>
        </div>
    )
}

export default Search