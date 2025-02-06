import React from 'react'
import Navbar from './Navbar'
import lola from './assets/lola.png'
import john from './assets/john.png'

const about = () => {
  return (
    <div>
        <Navbar/>
        <div className="about-container">
      {/* Left Section */}
      <div className="left-section">
        <div className="images">
          <img src={lola} alt="Product 1" className="product-image" />
          <img src={john} alt="Product 1" className="product-image" />
        </div>
        <div className="sales-info">
          <p className="sales-title">30,000+</p>
          <p className="sales-description">Sales in July 2021 with 5-star ratings and happy clients.</p>
          
        </div>
      </div>

      {/* Right Section */}
      <div className="right-section">
        <p className="highlight-text">A BIT</p>
        <h2 className="about-title">ABOUT US</h2>
        <p className="about-description">
          From they fine john he give of rich he. They age and draw mrs like.
          Improving end distrusts may instantly was household applauded incommode.
          Why kept very ever home mrs. Considered sympathize ten uncommonly occasional assistance sufficient not.
        </p>
        <button className="explore-button">EXPLORE MORE</button>
      </div>
    </div>
    </div>
  )
}

export default about