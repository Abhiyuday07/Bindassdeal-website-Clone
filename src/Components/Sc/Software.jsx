import React from 'react'
import './Software.css'
import './Softwareone'
import Softwareone from './Softwareone'
import Softwaretwo from './Softwaretwo'
const Software = () => {
  return (
    <div>
      <div className="Software-container">
        <div className="Software-content">
          <h1>Crypto & Blockchain</h1>
          <p>
          We offer crypto and blockchain services that help businesses of all sizes leverage the power of decentralized technology to build secure, transparent, and efficient systems.
          </p>
        </div>
      </div>
      <Softwareone/>
      <Softwaretwo/>
    </div>
  )
}

export default Software
