import React from 'react';
import "./styles/Home.css"
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container">
        <div className="landing-header">
 		<h1 className="title">Endless Image Gallery</h1>

         <Link to={`/Gallery`} className="button s-irregularLineMove"> Get started! </Link>        
         </div>
    
        <ul className="slideshow">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        </ul>
    </div>
  );
}

export default Home;