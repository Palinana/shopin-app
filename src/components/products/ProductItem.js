import React, { useState, useEffect, useRef } from 'react';

const ProductItem = ({ product }) => {
    return (
        <div className="product">
            
            <img src={product.imageUrl} alt={product.title} className="product__detail-image" style={{background: product.background}} />

            <div className="product__detail">
                <h4 className="product__detail-title">{product.title}</h4>
                <p className="product__detail-price text-price">${product.price.toFixed(2)}</p>
            </div>
        </div>
    )
}

export default ProductItem;
