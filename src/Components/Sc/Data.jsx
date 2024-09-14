import React from 'react'
import './Data.css'
import Dataone from './Dataone'
import Datatwo from './Datatwo'
const Data = () => {
  return (
    <div>
      <div className="data-container">
        <div className="data-content">
          <h1>Data Science & AI</h1>
          <p>
          We offer data science and AI services that help businesses of all sizes leverage the power of data and artificial intelligence to improve their operations, enhance customer experience, and drive growth.
          </p>
        </div>
      </div>
      <Dataone/>
      <Datatwo/>
    </div>
  )
}

export default Data