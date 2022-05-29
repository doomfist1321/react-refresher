import { Fragment } from 'react';
import { Link, Outlet } from 'react-router-dom';

import { ReactComponent as PandaLogo } from '../../assets/Low-Poly-Panda-Head.svg';
import './navigation.styles.scss';

export const Navigation = () => {
  return (
    <Fragment>
      <div className='navigation'>
        <Link to='/' className='logo-container'><div><PandaLogo width={50} /></div></Link>
        <div className='nav-links-container'>
          <Link to='shop' className='nav-link'>SHOP</Link>
          <Link to='auth' className='nav-link'>SIGN IN</Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  )
}
