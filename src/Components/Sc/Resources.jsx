import React from 'react'
import './Resources.css'
import Resourcesone from './Resourcesone'
import Resourcestwo from './Resourcestwo'
const Resources = () => {
  return (
    <div>
      <div className="Resources-container">
        <div className="Resources-content">
          <h1>Resource & Hiring</h1>
          <p>
          We offer resourcing and hiring services that help businesses of all sizes find and hire the right talent for their software development needs.
          </p>
        </div>
      </div>
      <Resourcesone/>
      <Resourcestwo/>
    </div>
  )
}

export default Resources
