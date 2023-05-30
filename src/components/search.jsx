import {useState, useEffect}  from "react";
import About from "../routes/About";
// const Search = () => {
//     return <div>Hello world!</div>
// }

// export default Search;

const Search = ({ searchQuery, setSearchQuery }) => (
    <form id="search" name="SearchForm" action="/about" method="get">
        <label htmlFor="header-search">
            <span className="visually-hidden">Search product</span>
        </label>
        <input
            value={searchQuery}
            onInput={e => setSearchQuery(e.target.value)}
            type="text"
            id="header-search"
            placeholder="Search products"
            name="s" 
        />
        <button type="submit" >Search</button>
    </form>
    
);

export default Search;

