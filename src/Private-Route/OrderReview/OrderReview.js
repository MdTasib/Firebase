import React from 'react';
import { useHistory } from 'react-router-dom';

const OrderReview = () => {

    const history = useHistory();
    const handlePlaceOrder = () => {
        history.push('/shipment');
    }
    return (
        <div>
            <h3>This is Order Review</h3>
            <button onClick={handlePlaceOrder}>Proceed Checkout</button>
        </div>
    );
};

export default OrderReview;