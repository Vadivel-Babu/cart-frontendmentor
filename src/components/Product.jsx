import {AiOutlineShoppingCart} from 'react-icons/ai'
import '../styles/product.scss';
import { useState } from 'react';

const Product = ({addCart}) => {
  const [quantity,setQuantity] = useState(1);

  const item = {
    title:"Fall Limited Edition Sneakers",
    price:125,
    quantity
  }


  return (
    <div className='product'>
      <span className="product__category">
        sneaker company
      </span>
      <h1 className="product__title">
        Fall Limited Edition Sneakers
      </h1>
      <p className="product__description">
        These low-profile sneakers are your perfect casual wear companion. 
        Featuring a durable rubber outer sole, 
        they’ll withstand everything the weather can offer.
      </p>
      <div className="product__price">
        <div className="price__wrapper">
          <h3 className="price">
            $ 125.00
          </h3>
          <span className="percentage">
            50%
          </span>
        </div>
        <del className="oldPrice">
          $ 250.00
        </del>
      </div>
      <div className="btn">
        <div className="btn__quantity">
          <button className='control-btn' 
           onClick={() => setQuantity(quantity - 1)}
          >-</button>
          <span className="quantity">{quantity}</span>
          <button className='control-btn'onClick={() => setQuantity(quantity + 1)} >+</button>
        </div>
        <button className="cart" onClick={() => addCart(item)}>
          <AiOutlineShoppingCart className='icon'/>
          Add to cart
        </button>
      </div>
    </div>
  )
}

export default Product