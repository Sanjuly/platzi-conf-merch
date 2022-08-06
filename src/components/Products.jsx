import React, { useContext } from "react";
import Product from "./Product";
import AppContext from "../context/AppContext";
import '../styles/components/Products.css';


function Products() {
    const {state: { products }, addToCart } = useContext(AppContext);
    

    const handleAddToCart = (product) => {
        addToCart(product);
    }
    return(
        <div className="Products">
            <div className="Products-items">
                {products.map(product => (
                    <Product key={product.id} product={product} handleAddToCart={handleAddToCart} />
                ))}
            </div>
        </div>
    );
}

export default Products;
