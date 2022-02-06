import React from "react";
import "./search-box.styles.css";


export const SearchBox = ({ placeholder, handleChange })=> {
    return (
    <input
    className="search" 
    type="search" 
    placeholder={placeholder}
        // onChange is asynchronous, so to get the expected result, add callback as 2nd argument
        onChange={handleChange} />)
}