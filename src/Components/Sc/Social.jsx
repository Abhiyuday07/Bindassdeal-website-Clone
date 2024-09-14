import React from 'react'
import './Social.css'
import Socialone from './Socialone'
import Socialtwo from './Socialtwo'
const Social = () => {
  return (
    <div>
      <div className="Social-container">
        <div className="Social-content">
          <h1>Social Media Marketing</h1>
          <p>
          We offer social media marketing services that help businesses of all sizes reach their target audience, build brand awareness, and engage with customers through social media platforms.
          </p>
        </div>
      </div>
      <Socialone/>
      <Socialtwo/>
    </div>
  )
}

export default Social
