import React from 'react'
import './Ecommerce.css'
import Ecommerceone from './Ecommerceone'
import Ecommercetwo from './Ecommercetwo'
const Ecommerce = () => {
  return (
    <div>
      <div className="Ecommerce-container">
        <div className="Ecommerce-content">
          <h1>Ecommerce Application</h1>
          <p>
          We specialize in developing ecommerce applications that help businesses of all sizes sell their products and services online.
          </p>
        </div>
      </div>
      <Ecommerceone/>
      <Ecommercetwo/>
    </div>
  )
}

export default Ecommerce
