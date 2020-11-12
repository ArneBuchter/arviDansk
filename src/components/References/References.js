import React from 'react';
import './References.css';
import SingleProduct from '../../components/SingleProduct/SingleProduct'
import Image from './TodoAS.PNG'

function References() {
    return (
      <div className="References __wrapper" id="References">
      <SingleProduct headline="Referencer" h2="Todo.as" src={Image} href="https://todo.as"/>
      </div>
    );
  }
  
  export default References;