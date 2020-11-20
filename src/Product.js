import React from 'react';
import { useParams, Outlet } from 'react-router-dom';
import { Route, Routes, Link } from 'react-router-dom';
function Product() {
    // const {productID} = useParams();
    return (
        <div>
            <h1>See Latest Products</h1>

            <hr />
            <div>
                <Outlet />
                
            </div>

        </div>
    )
}

export default Product;