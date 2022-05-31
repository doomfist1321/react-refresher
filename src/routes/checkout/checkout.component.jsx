import { useContext } from 'react';
import { CheckoutItem } from '../../components/checkout-item/checkout-item.component';
import { CartContext } from '../../context/cart.context';

import { CheckoutContainer, CheckoutHeader, HeaderBlock, Total } from './checkout.styles.jsx';

export const Checkout = () => {

  const { cartItems, totalPrice } = useContext(CartContext);

  return (
    <CheckoutContainer className='checkout-container'>
      <CheckoutHeader className="checkout-header">
        <HeaderBlock className="header-block">
          <span>Product</span>
        </HeaderBlock>
        <HeaderBlock className="header-block">
          <span>Description</span>
        </HeaderBlock>
        <HeaderBlock className="header-block">
          <span>Quantity</span>
        </HeaderBlock>
        <HeaderBlock className="header-block">
          <span>Price</span>
        </HeaderBlock>
        <HeaderBlock className="header-block">
          <span>Remove</span>
        </HeaderBlock>
      </CheckoutHeader>
      <div>
        {cartItems.map((item) => (
          <CheckoutItem key={item.id} cartItem={item} />
        ))}
      </div>
      <Total className="total">{totalPrice}</Total>
    </CheckoutContainer>
  )
}