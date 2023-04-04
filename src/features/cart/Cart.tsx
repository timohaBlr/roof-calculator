import React from 'react';
import {selectCartItems} from "./selectors";
import useAppSelector from "../../common/hooks/useAppSelector";
import CartItem from "./CartItem/CartItem";
import s from './Cart.module.css'

const Cart = () => {
    const cartItems = useAppSelector(selectCartItems)
    const mappedItems = cartItems.map((item, index) => {
        return <CartItem key={index} activeItem={item} index={index}/>
    })
    return (
        <div className={s.cart}>
            {cartItems.length
                ? <div className={s.itemsGrid}>
                    <p className={s.count}>Товаров в корзине: {cartItems.length}</p>
                    {mappedItems}
                </div>
                : <h3>Корзина пуста.</h3>}

        </div>
    );
};

export default Cart;