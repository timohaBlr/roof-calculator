import React from 'react';
import s from './Header.module.css'
import {NavLink} from "react-router-dom";
import {PATH} from "../../routes";
import calculator from '../../assets/keys.png'
import cart from '../../assets/shopping-cart.png'
import useAppSelector from "../../hooks/useAppSelector";
import {selectCartItemsCount} from "../../../features/cart/selectors";

const Header = () => {
    const cartItemsCount = useAppSelector(selectCartItemsCount)
    return (
        <div className={s.header}>
            <div className={s.navigation}>
                <NavLink to={PATH.calculator}>
                    <img src={calculator} alt={'calculator'} className={s.image}/>
                </NavLink>
                <NavLink to={PATH.cart}>
                    {!!cartItemsCount && <div className={s.itemsCount}>
                        <div className={s.count}>{cartItemsCount}</div>
                    </div>}
                    <img src={cart} alt={'cart'} className={s.image}/>
                </NavLink>
            </div>
        </div>
    );
};

export default Header;