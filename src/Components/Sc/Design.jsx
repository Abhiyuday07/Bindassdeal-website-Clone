import React from 'react'
import './Design.css'
import Designone from './Designone'
import Designtwo from './Designtwo'
const Design = () => {
  return (
    <div>
      <div className="design-container">
        <div className="design-content">
          <h1>Design and Graphic</h1>
          <p>
          We offer design and graphic services that help businesses of all sizes create visually appealing and engaging materials that effectively communicate their brand message.
          </p>
        </div>


      </div>
      <Designone/>
      <Designtwo/>
    </div>
  )
}

export default Design