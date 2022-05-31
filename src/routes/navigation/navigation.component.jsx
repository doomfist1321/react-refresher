import { Fragment, useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';

import { ReactComponent as PandaLogo } from '../../assets/Low-Poly-Panda-Head.svg';
import { CartDropdown } from '../../components/cart-dropdown/cart-dropdown.component';
import { CartIcon } from '../../components/cart-icon/cart-icon.component';
import { CartContext } from '../../context/cart.context';
import { UserContext } from '../../context/user.context';
import { signOutUser } from '../../utils/firebase/firebase.utils';
import { LogoContainer, NavigationContainer, NavLink, NavLinksContainer } from './navigation.styles.jsx';



export const Navigation = () => {

  const { cartIsOpen } = useContext(CartContext);
  const { currentUser } = useContext(UserContext);
  console.log("currentUser", currentUser);

  const signOutHandler = async () => {
    await signOutUser();
  }

  return (
    <Fragment>
      <NavigationContainer >
        <LogoContainer to='/' ><div><PandaLogo width={50} /></div></LogoContainer>
        <NavLinksContainer>
          <CartIcon />
          <NavLink as='span' to='shop'>SHOP</NavLink>
          {currentUser ? (<NavLink  as='span' onClick={signOutHandler}>SIGN OUT</NavLink>) : <NavLink  as='span' to='auth' className='nav-link'>SIGN IN</NavLink>}
        </NavLinksContainer>
        {cartIsOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  )

}
