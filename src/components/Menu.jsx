import "../styles/menu.scss";
import {IoCloseSharp} from "react-icons/io5";

const Menu = ({handleClose}) => {
  return (
    <div className='menu'>
      <div className="menu__content">
        <IoCloseSharp className="menu__icon" onClick={() => handleClose()}/>
        <ul className="menu__list">
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
    </div>
  )
}

export default Menu