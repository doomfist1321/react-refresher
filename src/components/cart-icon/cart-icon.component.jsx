import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';
import { CartIconContainer, ItemCount, ShoppingIcon } from './cart-icon.styles.jsx';

export const CartIcon = () => {
  const { setCartIsOpen, cartIsOpen, productCount } = useContext(CartContext);
  const toggleCartDropdown = () => setCartIsOpen(!cartIsOpen);
  return (
    <CartIconContainer onClick={toggleCartDropdown}>
      <ShoppingIcon  />
      <ItemCount >{productCount}</ItemCount>
    </CartIconContainer>
  )
}