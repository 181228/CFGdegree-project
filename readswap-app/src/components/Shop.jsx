import React from "react";
import { getProductsArray } from './ProductsStore.jsx';
import { Product } from './Product.jsx'

export const Shop = () => {
    return (
        <div className="shop">

        <div className="products">
            {getProductsArray.map((product) => (
            <Product data={product} />
            ))}
        </div>
        </div>
    );
};
