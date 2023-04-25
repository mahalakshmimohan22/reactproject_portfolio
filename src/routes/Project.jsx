import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Image2 from '../components/Image2';
import ProjectSection from '../components/ProjectSection';

const Project = () => {
  return (
    <div>
      <Navbar />
      <Image2 heading="THESE ARE SOME OF MY PROJECTS." text="Just have a look over them!"/>
      <ProjectSection />
      <Footer />
    </div>
  );
};

export default Project;