import React from 'react'
import './Product.css'




function Product({id,title,image,price,rating}) {
    return (
        <div className = "product ">
        <div className = "product__info">
                <p>{title}</p>
           
            <div className = "product__price">
                <small>$</small>
                    <strong>{price}</strong>
            </div>
                <div className="product__rating">
                    {
                        Array(rating)
                        .fill()
                        .map((_, i) => (
                            <p>🌟</p>

                        ))
                    }
                   
           </div>
                 </div>
            <img    className = "product__image" src = {image} alt = "product" />
            <button className = "product__button">Add to Cart</button>
        </div>
    )
}

export default Product
