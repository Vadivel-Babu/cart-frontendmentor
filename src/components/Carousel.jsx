import { useState } from "react";
import "../styles/carousel.scss";
import {IoIosArrowDropleftCircle,IoIosArrowDroprightCircle} from 'react-icons/io'

const Carousel = () => {
  const [pic,setPic] = useState(1);
 
  function handleRight(){
    if(pic === 4){
      return;
    }
    setPic((pic) => pic + 1);
  }
  function handleLeft(){
    if(pic === 1){
      return;
    }
    setPic((pic) => pic - 1);
  }
  return (
    <div className='carousel'>
      <div className="img__container">
        <button className="carousel__btn left">
        <IoIosArrowDropleftCircle  
          onClick={handleLeft}
        />
        </button>
        <img src={`${pic}.png`} alt='shoe' className='large'/>
        <button className="carousel__btn right" >
          <IoIosArrowDroprightCircle           
          onClick={handleRight}/>
        </button>
        
      </div>
      <div className="mini__img">
      {[1,2,3,4].map((e) => (
         <img src={`${e}.png`} 
         alt='shoe' className={pic === e ? 'mini active' : 'mini'} 
         key={e}
         onClick={() => setPic(e)} 
         />
      ))} 
      </div>
    </div>
  )
}

export default Carousel