
import { useState } from 'react';
import './App.css';
import Carousel from './components/Carousel';
import Cart from './components/Cart';
import Navbar from './components/Navbar';
import Product from './components/Product';

function App() {
  const [openCart,setOpenCart] = useState(false);
  const [inCart,setInCart] = useState([]);

  function handleCart(){
    setOpenCart(true)
  }
  function handleCartClose(){
    setOpenCart(false)
  }
  function handleAddItem(item){
    setInCart([...inCart,item])
  }
  function handleDelete(i){
    let arr = inCart.filter((_,index) => index !== i)
    setInCart(arr);
  }
  
  return (
    <div className="App">
      <Navbar cart={handleCart} item={inCart}/> 
      <div className='wrapper'>
        <Carousel/>
        <Product addCart={handleAddItem}/>
      </div>
      {openCart && <Cart closeCart={handleCartClose} item={inCart} deleteItem={handleDelete}/>}
    </div>
  );
}

export default App;
