import React from 'react';
import './ProjectSection.css';
import { Link } from 'react-router-dom';
const ProjectSection = () => {
  return (
    <section className="project-section">
      <h2 className="section-title">Projects</h2>
      <div className="project-list">
        <div className="project">
          <h3 className="project-title">Project 1</h3>
          <h4 className='h4'>Ecommerce Website</h4>
          <p className="project-description">
          A website that allows people to buy and sell physical goods, services, and digital products over the internet rather than at a brick-and-mortar location.
          </p>
          <Link to='https://www.meesho.com/'>
                <button className="btn">View</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </Link>
          <Link to='/contact'>
                <button className="btn">Source</button>
          </Link>
        </div>
        <div className="project">
          <h3 className="project-title">Project 2</h3>
          <h4 className='h4'>Educational Website</h4>
          <p className="project-description">
          This website includes games, videos or topic related resources that act as tools to enhance learning and supplement classroom teaching.
          </p>
          <Link to='https://leetcode.com/'>
                <button className="btn">View</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </Link>
          <Link to='/contact'>
                <button className="btn">Source</button>
          </Link>
        </div>
        <div className="project">
          <h3 className="project-title">Project 3</h3>
          <h4 className='h4'>Food-Ordering Website</h4>
          <p className="project-description">
          Our technology platform connects customers, restaurant partners and delivery partners, serving their multiple needs to their doorstep.
          </p>
          <Link to='https://www.zomato.com/'>
                <button className="btn">View</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </Link>
          <Link to='/contact'>
                <button className="btn">Source</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
