import React from "react";
import style from './navBar.module.css';
import Logo from "../logo/Logo";
import CartWidget from "../cart/CartWidget";

const NavBar = () => {

    return(
        <nav className={style.menu}> 
            <div>
                <Logo />    
            </div>
            <ul className={style.navbar}>
                <li><a href="#">Home</a></li>
                <li><a href="#">Categorias</a></li>
                <li>
                    <CartWidget />
                </li>
            </ul>
        </nav>
    )

}

export default NavBar;
