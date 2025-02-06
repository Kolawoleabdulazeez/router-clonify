import React from 'react'
import Placeholder from './assets/Placeholder.png' 
import Navbar from './Navbar'
const Home = () => {
  return (
    <div className='heroSection'>
        <Navbar/>
        <div className='hero-holder'>
            <div className='hero-image'>
            <img src={Placeholder} alt="Description"/>
            </div>
            <div className='hero-body'>
                <div><h6>IKIGAI</h6>
                <h1> Leather bags<br/> worth hugging.</h1>
                <p>Keep your everyday style chic and on-trend with our<br/> selection 20+ styles to choose from.</p>
                <p>See Collection</p>
                </div>
            </div>
        </div>
    </div>
)
}

export default Home