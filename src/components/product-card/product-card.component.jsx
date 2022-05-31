import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';
import { BUTTON_TYPE_CLASSES } from '../button/button.component';

import { ProductCardButton, ProductCardContainer, ProductCardFooter, ProductCardImage, ProductCardName, ProductCardPrice } from './product-card.styles.jsx';

export const ProductCard = ({ product }) => {

  const { addItemToCart } = useContext(CartContext);

  const addToCartClickHandler = () => { addItemToCart(product) }

  const {
    name,
    imageUrl,
    price,
  } = product;

  return (
    <ProductCardContainer className='product-card-container'>
      <ProductCardImage src={imageUrl} alt={name} />
      <ProductCardFooter className='footer'>
        <ProductCardName className='name'>{name}</ProductCardName>
        <ProductCardPrice className='price'>{price}</ProductCardPrice>
      </ProductCardFooter>
      <ProductCardButton buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={addToCartClickHandler}>Add to Cart</ProductCardButton>
    </ProductCardContainer>
  )
}