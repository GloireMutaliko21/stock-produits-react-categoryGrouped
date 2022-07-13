import React from "react";

function Search(props) {
    return (
        <div>
            <form>
                <input
                    type="text"
                    placeholder="Search..."
                    value={props.value}
                    onChange={props.onChange}
                /><br />
                <label>
                    <input type="checkbox" onChange={props.filterOnChange} />
                    <span>Only show products in stock</span>
                </label>
            </form>


        </div>
    )
}

export default Search