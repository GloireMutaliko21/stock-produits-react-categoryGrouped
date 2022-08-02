import React from "react";
import "../styles/search.css";

function Search({ filterText, onSearchChange, onlyOnStock }) {
    
    return (
        <div>
            <form>
                <input
                    type="text"
                    placeholder="Search..."
                    value={filterText}
                    onChange={(e)=>{onSearchChange(e.target.value)}}
                />
                <label>
                    <input type="checkbox" onChange={onlyOnStock} />
                    <span>Only show products in stock</span>
                </label>
            </form>


        </div>
    )
}

export default Search