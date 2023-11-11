import "../styles/cart.scss";
import {RxCross2} from "react-icons/rx";
import {BsTrash} from "react-icons/bs";

const Cart = ({closeCart,item,deleteItem}) => {
  return (
    <div className='carts'>
      <h1 className="carts__title">
        Cart 
        <span className="closeCart" onClick={() => closeCart()}>close</span>
      </h1>
      <hr />
      {item.length === 0 && <p className="empty">Your cart is Empty</p>}

      {item.length > 0 && <div className="items">
        {item.map((d,i) => (
        <div className="item" key={i}>
          <img src="2.png" alt="shoe" className="cart__img" />
          <div className="item__description">
            <p className="description">Fall Limited Edition Sneakers</p>
            <span className="item__price">
              $125.00 <RxCross2/> {d.quantity}
              <strong className="totalPrice">{`$${125 * d.quantity}.00`}</strong>
            </span>  
          </div>
          <BsTrash className="trashIcon" onClick={() => deleteItem(i)} />
        </div>
        ))}
      </div>}
     {item.length > 0 && <button className="checkout">
        Checkout
      </button>}
    </div>
  )
}

export default Cart