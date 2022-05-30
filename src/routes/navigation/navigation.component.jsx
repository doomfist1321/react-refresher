import { Fragment, useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';

import { ReactComponent as PandaLogo } from '../../assets/Low-Poly-Panda-Head.svg';
import { CartDropdown } from '../../components/cart-dropdown/cart-dropdown.component';
import { CartIcon } from '../../components/cart-icon/cart-icon.component';
import { CartContext } from '../../context/cart.context';
import { UserContext } from '../../context/user.context';
import { signOutUser } from '../../utils/firebase/firebase.utils';
import './navigation.styles.scss';



export const Navigation = () => {

  const { cartIsOpen } = useContext(CartContext);
  const { currentUser } = useContext(UserContext);
  console.log("currentUser", currentUser);

  const signOutHandler = async () => {
    await signOutUser();
  }

  return (
    <Fragment>
      <div className='navigation'>
        <Link to='/' className='logo-container'><div><PandaLogo width={50} /></div></Link>
        <div className='nav-links-container'>
          <CartIcon />
          <Link to='shop' className='nav-link'>SHOP</Link>
          {currentUser ? (<span className='nav-link' onClick={signOutHandler}>SIGN OUT</span>) : <Link to='auth' className='nav-link'>SIGN IN</Link>}
        </div>
        {cartIsOpen && <CartDropdown />}
      </div>
      <Outlet />
    </Fragment>
  )

}
