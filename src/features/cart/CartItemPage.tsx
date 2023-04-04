import React from 'react';
import {PATH} from "../../common/routes";
import {useNavigate} from "react-router-dom";
import useAppSelector from "../../common/hooks/useAppSelector";
import {selectActiveItem} from "./selectors";
import ResultView from "../input/Result/ResultView/ResultView";

const CartItemPage = () => {


    const navigate = useNavigate()
    const activeItem = useAppSelector(selectActiveItem)
    const handleToCart = () => {
        navigate(PATH.cart)
    }
    const handleToCalculator = () => {
        navigate(PATH.calculator)
    }
    return (
        <div>
            CartItem
            <ResultView activeItem={activeItem}/>
            <button onClick={handleToCart}>back to cart</button>
            <button onClick={handleToCalculator}>To calculator</button>
        </div>
    );
};

export default CartItemPage;