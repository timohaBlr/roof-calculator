import React, {useEffect, useState} from 'react';
import ResultView from "./ResultView/ResultView";
import {addToCartItemsAC} from "../../cart/actions";
import useAppDispatch from "../../../common/hooks/useAppDispatch";
import useAppSelector from "../../../common/hooks/useAppSelector";
import {selectActiveItem} from "../../cart/selectors";
import CalculatorInstruction from "./CalculatorInstruction/CalculatorInstruction";
import s from './Result.module.css'
import CartIcon from "../../../common/icons/CartIcon";
import {useNavigate} from "react-router-dom";
import {PATH} from "../../../common/routes";

const Result = () => {

    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const activeItem = useAppSelector(selectActiveItem)
    const [addToCartDisabled, setAddToCartDisabled] = useState(true)
    const [addToCardClass, setAddToCardClass] = useState(s.toCart)
    useEffect(() => {
        if (activeItem.totalPrice !== 0) {
            setAddToCartDisabled(false)
        }
    }, [activeItem.totalPrice])

    const handleAdToCart = () => {
        if (!addToCartDisabled) {
            dispatch(addToCartItemsAC(activeItem))
            setAddToCartDisabled(true)
            setAddToCardClass(s.toCart + ' ' + s.animation)
            setTimeout(() => {
                setAddToCardClass(s.toCart)
            }, 1200)
        } else  {
            navigate(PATH.cart)
        }
    }

    return (
        <div>
            {activeItem.totalPrice !== 0
                ? <div className={s.result}>
                    <ResultView activeItem={activeItem}/>
                    <button onClick={handleAdToCart}
                            // disabled={addToCartDisabled}
                            className={addToCardClass}>
                        <CartIcon/>
                    </button>
                </div>
                : <CalculatorInstruction/>}
        </div>
    );
};

export default Result;