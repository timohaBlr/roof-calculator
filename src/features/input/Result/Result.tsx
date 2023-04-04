import React, {useEffect, useState} from 'react';
import ResultView from "./ResultView/ResultView";
import {addToCartItemsAC} from "../../cart/actions";
import useAppDispatch from "../../../common/hooks/useAppDispatch";
import useAppSelector from "../../../common/hooks/useAppSelector";
import {selectActiveItem} from "../../cart/selectors";
import CalculatorInstruction from "./CalculatorInstruction/CalculatorInstruction";

const Result = () => {

    const dispatch = useAppDispatch()

    const activeItem = useAppSelector(selectActiveItem)
    const [addToCartDisabled, setAddToCartDisabled] = useState(true)
    useEffect(() => {
        if (activeItem.totalPrice !== 0) {
            setAddToCartDisabled(false)
        }
    }, [activeItem.totalPrice])
    const handleAdToCart = () => {
        dispatch(addToCartItemsAC(activeItem))
        setAddToCartDisabled(true)
    }

    return (
        <div>
            {activeItem.totalPrice !== 0
                ? <div>
                    <ResultView activeItem={activeItem}/>
                    <button onClick={handleAdToCart} disabled={addToCartDisabled}>В корзину</button>
                </div>
                : <CalculatorInstruction/>}
        </div>
    );
};

export default Result;