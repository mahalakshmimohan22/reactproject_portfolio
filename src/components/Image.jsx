import "./Image.css";
import React from 'react'
import { Link } from "react-router-dom";
const Image = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="into-img " src="https://c1.wallpaperflare.com/preview/388/842/494/596ca9b9cd576.jpg" alt="IntoImg" />
        </div>
        <div className="content">
            <p>Hi, I'm Mahalakshmi</p>
            <h1>Web Developer</h1>
            <div>
                <Link to="/project" className="btn">Projects</Link>
                <Link to="/contact" className="btn btn-light">Hire me</Link>
            </div>
        </div>
    </div>
  )
}

export default Image; 