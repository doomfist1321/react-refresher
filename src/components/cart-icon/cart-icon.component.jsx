import { useContext } from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { CartContext } from '../../context/cart.context';
import './cart-icon.styles.scss';

export const CartIcon = () => {
  const { setCartIsOpen, cartIsOpen } = useContext(CartContext);
  const toggleCartDropdown = () => setCartIsOpen(!cartIsOpen);
  return (
    <div className='cart-icon-container' onClick={toggleCartDropdown}>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>0</span>
    </div>
  )
}