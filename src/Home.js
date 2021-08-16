import React from 'react'
import './Home.css';
import Product from './Product'
function Home() {
    return (
        <div className = "home">
        <div className = "home__container">
        <img className = "home__containerImage" src = "https://images-eu.ssl-images-amazon.com/images/G/31/img21/TVs/Kamya/MiTV_banner_3000x12001._CB644141252_.jpg" alt = "slider" />
            </div>

            <div className = "home__row">
                <Product
                    id={11}
                    title="Apple Macbook Pro"
                    price="2500.99"
                    image="https://cdn.pocket-lint.com/r/s/970x/assets/images/152137-laptops-review-apple-macbook-pro-2020-review-image1-pbzm4ejvvs-jpg.webp"
                    rating={5}
                />
                <Product
                    id={12}
                    title="Iphone 11 pro max"
                    price="2500.99"
                    image="https://images-eu.ssl-images-amazon.com/images/I/41FxzzJx6cL._SY445_SX342_QL70_FMwebp_.jpg"
                    rating={4}
                />
            </div>
            <div className = "home__row">
                 <Product
                    id={13}
                    title="Apple Macbook Pro"
                    price="2500.99"
                    image="https://cdn.pocket-lint.com/r/s/970x/assets/images/152137-laptops-review-apple-macbook-pro-2020-review-image1-pbzm4ejvvs-jpg.webp"
                    rating={5}
                />
                <Product
                    id={14}
                    title="Iphone 11 pro max"
                    price="2500.99"
                    image="https://images-eu.ssl-images-amazon.com/images/I/41FxzzJx6cL._SY445_SX342_QL70_FMwebp_.jpg"
                    rating={4}
                />
                  <Product
                    id={15}
                    title="Iphone 11 pro max"
                    price="2500.99"
                    image="https://images-eu.ssl-images-amazon.com/images/I/41FxzzJx6cL._SY445_SX342_QL70_FMwebp_.jpg"
                    rating={4}
                />
            </div>
            <div className="home__row">
                  <Product
                    id={16}
                    title="It's very weird because I just follow the documentation and created a token 2 weeks ago on GitHub expires on Tue, Oct 26 2021. Why has this been removed today?"
                    price="2500.99"
                    image="https://images-eu.ssl-images-amazon.com/images/G/31/img21/TVs/Kamya/MiTV_banner_3000x12001._CB644141252_.jpg"
                    rating={4}
                />
            </div>
        </div>
    )
}

export default Home
