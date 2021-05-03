import React from 'react';
import { Link } from 'react-router-dom';

const Shop = () => {
    return (
        <div>
            <h3>This is Shop page</h3>
            <Link to='/review'>
                <button>Oder Review</button>
            </Link>
        </div>
    );
};

export default Shop;