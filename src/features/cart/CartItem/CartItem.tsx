import React from 'react';
import {ActiveCartItemType} from "../types";
import ResultView from "../../calculator/Result/ResultView/ResultView";
import {NavLink} from "react-router-dom";
import {PATH} from "../../../common/routes";
import useAppDispatch from "../../../common/hooks/useAppDispatch";
import {removeItemFromCartAC, setActiveCartItemAC} from "../actions";
import IconDelete from "../../../common/icons/IconDelete";
import s from './CartItem.module.css'

type CartItemPropsType = {
    activeItem: ActiveCartItemType
    index: number
}
const CartItem: React.FC<CartItemPropsType> = ({activeItem, index}) => {

    const dispatch = useAppDispatch()

    const itemNumber = index + 1
    const handleToItem = () => {
        dispatch(setActiveCartItemAC(activeItem))
    }
    const handleRemoveItem = () => {
        dispatch(removeItemFromCartAC(activeItem.itemId))
    }
    return (
        <div className={s.item}>
            <NavLink to={PATH.cart + activeItem.itemId} onClick={handleToItem}> Товар № {itemNumber}</NavLink>
            <button onClick={handleRemoveItem} className={s.delete}>
                <IconDelete/>
            </button>
            <ResultView activeItem={activeItem}/>
        </div>
    );
};

export default CartItem;