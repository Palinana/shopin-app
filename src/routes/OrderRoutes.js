import React from 'react';
import { Routes, Route, Redirect } from 'react-router-dom';

import Orders from '../pages/Orders';
import OrderDetail from '../pages/OrderDetail';
import PageNotFound from '../pages/PageNotFound';

const OrderRoutes = (props) => {
    <Routes>
        <Route path='/orders/my-orders/:id'>
          <OrderDetail />
        </Route>

        <Route path='/orders/my-orders'>
          <Orders />
        </Route>

        {/* <Route path='/orders/my-orders' element={<BuyRoutes />} /> */}

        <Route path='*'>
          <PageNotFound />
        </Route>
    </Routes>
}

export default OrderRoutes;
