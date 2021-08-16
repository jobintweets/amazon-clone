import React from 'react'
import './Product.css'




function Product() {
    return (
        <div className="product ">
            <div className="product__info">
               <p>React for dummies</p> 
           
            <div className="product__price">
                <small>$</small>
                <strong>20.55</strong>
            </div>
            <div className="product__rating">
            <p>🌟</p>
            <p>🌟</p>
            <p>🌟</p>
                </div>
                 </div>
            <img className="product__image" src="https://cdn.pocket-lint.com/r/s/970x/assets/images/152137-laptops-review-apple-macbook-pro-2020-review-image1-pbzm4ejvvs-jpg.webp" alt="product" />
            <button className="product__button">Add to Cart</button>
        </div>
    )
}

export default Product
