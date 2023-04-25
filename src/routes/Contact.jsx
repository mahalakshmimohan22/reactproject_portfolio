import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Image2 from '../components/Image2'
import Form from '../components/Form'

const Contact = () => {
  return (
    <div>
      <Navbar />
      <Image2 heading="CONTACT ME" text="You can reach me out here"/>
      <Form />
      <Footer />
    </div>
  )
}

export default Contact