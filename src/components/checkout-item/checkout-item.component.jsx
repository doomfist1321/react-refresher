import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';
import './checkout-item.styles.scss';

export const CheckoutItem = ({ cartItem }) => {

  const { clearItemFromCart, addItemToCart, removeItemFromCart } = useContext(CartContext);
  const addItemhandler = () => { addItemToCart(cartItem) }
  const removeItemhandler = () => { removeItemFromCart(cartItem) }


  const { name, quantity, imageUrl, price } = cartItem;
  return (
    <div className='checkout-item-container'>
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>
        <div onClick={removeItemhandler} className="arrow">&#10094;</div>
        <span className="value">{quantity}</span>
        <div onClick={addItemhandler} className="arrow">&#10095;</div>
      </span>
      <span className='price'>{price}</span>
      <div className="remove-button" onClick={() => clearItemFromCart(cartItem)}>&#10005;</div>
    </div>
  )
}
