import React from 'react';
import '../Product/Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = ({product,addToCartEvent}) => {
    // const {product,addToCartEvent} =props;
    const {name,img,seller,price,ratings} = product;
        return (
            <div className='product'>
      <div className='product-body'> 
       <img src={img} alt="" />
       <div className='product-info'>
       <p className='product-name'>{name}</p>
            <p className='product-price'>Price:${price}</p>
            <p className='product-seller'><small>
                Seller: {seller}
            </small></p>
            <p className='product-ratings'><small>
             Ratings:   {ratings}
            </small></p>
       </div></div>
       <button onClick={()=>{addToCartEvent(product)}}  className='btn-cart'>
<p className='btn-text'>Add to Cart</p>
<FontAwesomeIcon icon ={faShoppingCart}></FontAwesomeIcon>
       </button>
        </div>


    );
};

export default Product;