import { useContext } from 'react';
import { StoreContext } from '../../context/StoreContext';
import './PlaceOrder.css';

const PlaceOrder = () => {
  const { getTotalCartAmount } = useContext(StoreContext);
  return (
    <form className='place-order'>
      <div className='place-order-left'>
        <p className='title'>Delivery Info</p>
        <div className='multi-fields'>
          <input type="text" placeholder='First Name' required />
          <input type="text" placeholder='Last Name' required />
        </div>
        <input type="email" placeholder='Email' required />
        <input type="text" placeholder='Street' required />
        <div className='multi-fields'>
          <input type="text" placeholder='City' required />
          <input type="text" placeholder='State' required />
        </div>
        <div className='multi-fields'>
          <input type="text" placeholder='Postal Code' required />
          <input type="text" placeholder='Country' required />
        </div>
        <input type="text" placeholder='Phone Number' required />
      </div>
      <div className='place-order-right'>
        <div className='cart-total'>
          <h2>Cart Total</h2>
          <div className='cart-total-details'>
            <p>Subtotal</p>
            <p>${getTotalCartAmount()}</p>
          </div>
          <hr />
          <div className='cart-total-details'>
            <p>delivery Fee</p>
            <p>${getTotalCartAmount()===0?0:2}</p>
          </div>
          <hr />
          <div className='cart-total-details'>
          <p>Total</p>
            <p>${getTotalCartAmount()===0?0:getTotalCartAmount()+2}</p>
          </div>
          <button  className='cart-checkout'>PROCEED TO CHECKOUT</button>
        </div>
      </div>
    </form>
  )
}

export default PlaceOrder
