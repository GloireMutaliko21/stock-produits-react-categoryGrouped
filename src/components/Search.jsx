import React from "react";
import "../styles/search.css";

function Search(props) {
    return (
        <div>
            <form>
                <input
                    type="text"
                    placeholder="Search..."
                    value={props.value}
                    onChange={props.onChange}
                />
                <label>
                    <input type="checkbox" onChange={props.filterOnChange} />
                    <span>Only show products in stock</span>
                </label>
            </form>


        </div>
    )
}

export default Search