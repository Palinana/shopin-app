import React, { useState, useEffect, useRef } from 'react';

import ProductItem from '../components/products/ProductItem';
import { products } from '../data/products';

const Products = () => {
    return (
        <div className="products-container">
            {
                products.length > 0 && products.map((product) => {
                    return (
                        <ProductItem 
                            key={product.id}
                            product={product}
                        />
                    )
                })
            }
        </div>
    )
}

export default Products;
