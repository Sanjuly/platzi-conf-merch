import React from "react";
import initialState from "../initialState";
import Products from "../components/Products";


function Home() {
    return (
    <Products products={initialState.products} />
    );
} 

export default Home;

