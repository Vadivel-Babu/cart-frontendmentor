import React, { useState } from 'react'
import {AiOutlineShoppingCart} from 'react-icons/ai';
import {GiHamburgerMenu} from 'react-icons/gi';
import '../styles/nav.scss';
import Menu from './Menu';

const Navbar = ({cart,item}) => {
  const [menuOpen,setMenuOpen] = useState(false);

  function close(){
    setMenuOpen(false);
  }
  return (
    <>
    <div className='nav'>
      <div className="nav__links">
        <GiHamburgerMenu className='menu__open' onClick={() => setMenuOpen(true)}/>
        <h1 className="nav__heading">
          sneakers
        </h1>
        <ul className='nav__list'>
          <li className="list__item">
            Collections
          </li>
          <li className="list__item">
            Men
          </li>
          <li className="list__item">
            Women
          </li>
          <li className="list__item">
            About
          </li>
          <li className="list__item">
            Contact
          </li>
        </ul>
      </div>
      <div className="cart">
        <p className="cart__icon">
          {item.length > 0 && <span className="items">{item.length}</span>}
          <AiOutlineShoppingCart onClick={() => cart()}/>
        </p>
        <img src="Oval.png" alt="user" className='cart__img'/>
      </div>
    </div>
     {menuOpen && <Menu handleClose={close}/>}
    </>
  )
}

export default Navbar;