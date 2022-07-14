import React from "react";
import "../styles/search.css";

function Search({value, onFilterTextChange, filterOnChange}) {
    
    function handleFilterTextChange(e) {
        onFilterTextChange(e.target.value)
    }

    return (
        <div>
            <form>
                <input
                    type="text"
                    placeholder="Search..."
                    value={value}
                    onChange={handleFilterTextChange}
                />
                <label>
                    <input type="checkbox" onChange={filterOnChange} />
                    <span>Only show products in stock</span>
                </label>
            </form>


        </div>
    )
}

export default Search