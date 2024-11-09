import React from 'react';
import { TiShoppingCart } from "react-icons/ti";
import style from './cartWidget.module.css';

const CartWidget = () => {

  return (
    <a href="#">
      <div className={style.cartContainer}>
        <TiShoppingCart className={style.cart} />
        <span className={style.boxCart}>1</span>
      </div>
    </a>
  )

}


export default CartWidget