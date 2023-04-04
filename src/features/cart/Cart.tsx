import React from 'react';
import {useNavigate} from "react-router-dom";
import {PATH} from "../../common/routes";
import {selectCartItems} from "./selectors";
import useAppSelector from "../../common/hooks/useAppSelector";
import CartItem from "./CartItem";

const Cart = () => {
    const navigate = useNavigate()
    const cartItems = useAppSelector(selectCartItems)
    const handleToCalculator = () => {
        navigate(PATH.calculator)
    }
    const mappedItems = cartItems.map((item, index) => {
        return <CartItem key={index} activeItem={item} index={index}/>
    })
    return (
        <div>
            Cart
            {cartItems.length
                ?mappedItems
                :<h3>Корзина пуста.</h3>}
            <button onClick={handleToCalculator}>To calculator</button>

        </div>
    );
};

export default Cart;