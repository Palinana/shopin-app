import React from 'react';
import { Routes, Route, Redirect } from 'react-router-dom';

import MyCart from '../pages/MyCart';
import Checkout from '../pages/Checkout';
import PageNotFound from '../pages/PageNotFound';

const BuyRoutes = (props) => {
    <Routes>
        <Route path='/buy/my-cart'>
            <MyCart />
        </Route>

        <Route path='/buy/checkout'>
            <Checkout />
        </Route>

        <Route path='*'>
            <PageNotFound />
        </Route>
    </Routes>
}

export default BuyRoutes;
