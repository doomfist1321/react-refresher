import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../context/cart.context';
import { Button } from '../button/button.component';
import { CartItem } from '../cart-item/cart-item.component';
import './cart-dropdown.styles.jsx';
import { CartDropdownContainer, CartItems, EmptyMessage } from './cart-dropdown.styles.jsx';

export const CartDropdown = () => {

  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate()
  const onCheckouthandler = () => navigate('checkout');

  return (
    <CartDropdownContainer className="cart-dropdown-container">
      <CartItems className="cart-items">
        {cartItems.length ? (cartItems.map(item => (<CartItem key={item.id} cartItem={item} />))) : (<EmptyMessage>Your cart is empty</EmptyMessage>)}
      </CartItems>
      <Button onClick={onCheckouthandler} >CHECKOUT</Button>
    </CartDropdownContainer>
  )
}