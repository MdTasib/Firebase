import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Shop from './Shop/Shop';
import Inventory from './Inventory/Inventory';
import OrderReview from './OrderReview/OrderReview';
import Shipment from './Shipment/Shipment';
import Login from './Login/Login';

const Commarce = () => {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Shop</Link>
                        </li>
                        <li>
                            <Link to="/review">OrderReview</Link>
                        </li>
                        <li>
                            <Link to="/inventory">Inventory</Link>
                        </li>
                    </ul>
                </nav>
                <Switch>
                    <Route path="/review">
                        <OrderReview />
                    </Route>
                    <Route path="/inventory">
                        <Inventory />
                    </Route>
                    <Route path='/shipment'>
                        <Shipment />
                    </Route>
                    <Route path='/login'>
                        <Login />
                    </Route>
                    <Route exact path="/">
                        <Shop />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
};

export default Commarce;