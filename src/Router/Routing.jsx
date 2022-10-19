import React from 'react'
import {Routes,Link,Route} from "react-router-dom";
import Cart from '../Components/Cart';
import { ProductDetails } from '../Components/ProductDetails';
import Home from '../Pages/Home';
function Routing(props) {
    return (
        <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/:id" element={<ProductDetails/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
        </Routes>
    );
}

export default Routing;