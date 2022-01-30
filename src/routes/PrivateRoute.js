import React, { ReactElement } from 'react';
import { Redirect, useLocation } from 'react-router-dom';

import Orders from '../pages/Orders';
import OrderDetail from '../pages/OrderDetail';
import PageNotFound from '../pages/PageNotFound';


const PrivateRoute = ({ children }) => {
    return (
        <div>Private</div>
    )
}

export default PrivateRoute;
