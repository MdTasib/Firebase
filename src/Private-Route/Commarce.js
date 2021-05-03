import React, { useState, createContext } from 'react';
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
import PrivateRoute from './PrivateRoute/PrivateRoute';
export const UserContext = createContext();

const Commarce = () => {
    const [loggedInUser, setLoggedInUser] = useState({});
    return (
        <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
            <Router>
                <div>
                    <h3>User Email : {loggedInUser.email}</h3>
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
                        <PrivateRoute path="/inventory">
                            <Inventory />
                        </PrivateRoute>
                        <PrivateRoute path='/shipment'>
                            <Shipment />
                        </PrivateRoute>
                        <Route path='/login'>
                            <Login />
                        </Route>
                        <Route exact path="/">
                            <Shop />
                        </Route>
                    </Switch>
                </div>
            </Router>
        </UserContext.Provider>
    );
};

export default Commarce;