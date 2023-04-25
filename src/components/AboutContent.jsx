import { Link } from "react-router-dom";
import "./AboutContent.css";

import React from 'react'

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who am I?</h1>
            <p>This is Mahalakshmi, student at Sri Krishna College of Engineering and Technology. 
                  Besides a student , I'm a web developer. 
                  I enjoy discussing new projects and design challenges. 
                  Open to work and improve myself with no compromise in self-perfection.</p>
            <Link to='/contact'>
                <button className="btn">Contact</button>
            </Link>
        </div>
        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img className="img" src="https://c1.wallpaperflare.com/path/830/150/561/sackcloth-sackcloth-textured-laptop-ipad-9fb86c9b24b2d05c66869b17d0070d34.jpg" alt="true" />
                </div>
                <div className="img-stack bottom">
                    <img className="img" src="https://c0.wallpaperflare.com/path/107/714/504/interior-office-workspace-computer-d7dca6288a873317f10564f98f3d2dba.jpg" alt="true" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContent