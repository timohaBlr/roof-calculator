import React from 'react';
import useAppSelector from "../../../common/hooks/useAppSelector";
import {selectActiveItem} from "../selectors";
import ResultView from "../../calculator/Result/ResultView/ResultView";
import s from './CartItemPage.module.css'

const CartItemPage = () => {


    const activeItem = useAppSelector(selectActiveItem)
    return (
        <div className={s.wrapper}>
            CartItem
            <ResultView activeItem={activeItem}/>
        </div>
    );
};

export default CartItemPage;