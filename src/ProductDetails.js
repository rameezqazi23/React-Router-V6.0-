import React, { useEffect, useState } from 'react';
import { useParams, Outlet } from 'react-router';
import { Route, Routes, Link } from 'react-router-dom';


function ProductDetails() {

    const { productID } = useParams();
    return (
        <div>
            <h2>Latest {productID}</h2>
            

        </div>
    )
}

export default ProductDetails;