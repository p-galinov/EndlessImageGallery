import React from "react"
import "../styles/Navbar.css"
import { Link } from "react-router-dom";

function Navbar() {

    return(
        <div className="navbar">
            <Link to="/" className="nav-logo">
            <i class="fas fa-camera logo"></i>
            <span className="logo-text">Image Gallery</span>
            </Link>
        </div>
    )
}

export default Navbar;