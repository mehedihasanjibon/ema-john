import React from 'react';
import './Product.css';

const Product = (props) => {
    // console.log(props);
    // console.log(props.product);
    const {img, name, seller, quantity, price} = props.product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div>
                <h6></h6>
            </div>
        </div>
    );
};

export default Product;