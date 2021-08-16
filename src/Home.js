import React from 'react'
import './Home.css';
import Product from './Product'
function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__containerImage" src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/TVs/Kamya/MiTV_banner_3000x12001._CB644141252_.jpg" alt="slider" />
            </div>
            <div className="home__row">
                <Product />
                 <Product/>
            </div>
            <div className="home__row">
               
            </div>
            <div className="home__row"></div>
        </div>
    )
}

export default Home
