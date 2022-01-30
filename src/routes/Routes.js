import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Index from '../pages/index';
import Products from '../pages/Products';
import ProductDetail from '../pages/ProductDetail';
import PageNotFound from '../pages/PageNotFound';
import Navbar from '../components/navigation/Navbar';

import BuyRoutes from './BuyRoutes';
import OrderRoutes from './OrderRoutes';

const routes = () => {
    return (
        <Routes>
            <Route path="/buy" element={<BuyRoutes />} />
            <Route path="/orders" element={<OrderRoutes />} />
            <Route path="/products/:productId" element={<ProductDetail />} />
            <Route path="/products" element={<Products />} />
            <Route path="/" element={<Index />} />
            <Route path="*" element={<PageNotFound />} />
        </Routes>
    )
}

export default routes;
