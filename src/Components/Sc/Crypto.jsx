import React from 'react'
import './Crypto.css'
import Cryptoone from './Cryptoone'
import Cryptotwo from './Cryptotwo'
const Crypto = () => {
  return (
    <div>
      <div className="Crypto-container">
        <div className="Crypto-content">
          <h1>Crypto & Blockchain</h1>
          <p>
          We offer crypto and blockchain services that help businesses of all sizes leverage the power of decentralized technology to build secure, transparent, and efficient systems.
          </p>
        </div>
      </div>
      <Cryptoone/>
      <Cryptotwo/>
    </div>
  )
}

export default Crypto