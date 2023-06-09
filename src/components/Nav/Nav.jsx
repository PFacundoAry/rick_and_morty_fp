import React from "react";
import SearchBar from "../SearchBar/SearchBar.jsx";
import styles from "./Nav.module.css"
import { NavLink } from "react-router-dom";

export default function Nav(props) {

    // const randomCharacters = () => {
    //     let randomNum = mathFloor(Math.random() * 826)
    // }

    return (
        <div>
            <NavLink to="/home">
                <button>Home</button>
            </NavLink>
            <NavLink to="/about">
                <button>About</button>
            </NavLink>
            <SearchBar onSearch={props.onSearch}/>
            {/* <button onClick={randomCharacters}>Random Character!</button> */}
            
        </div>
    )
}