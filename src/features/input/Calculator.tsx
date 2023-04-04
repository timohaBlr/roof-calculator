import React, {useEffect} from 'react';
import InputForm from "./InputForm/InputForm";
import Result from "./Result/Result";
import {PATH} from "../../common/routes";
import {useNavigate} from "react-router-dom";
import useAppDispatch from "../../common/hooks/useAppDispatch";
import {setActiveCartItemAC} from "../cart/actions";
import {FixByTypeType, FixType, FrameType, ListType, PipeType} from "./types";

const Calculator = () => {

    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    useEffect(() => {
        dispatch(setActiveCartItemAC({
            itemId: '',
            list: {} as ListType,
            listsCount: 0,
            listsPrice: 0,
            pipe: {} as PipeType,
            pipesCount: 0,
            pipesPrice: 0,
            fix: {} as FixType,
            fixByType: {} as FixByTypeType,
            fixingsCount: 0,
            fixingsPrice: 0,
            frame: {} as FrameType,
            cellSize: {
                cellWidth: 0,
                cellLength: 0,
            },
            square: 0,
            totalPrice: 0,
        }))
    }, [dispatch])
    const handleToCart = () => {
        navigate(PATH.cart)
    }
    return (
        <div>
            <InputForm/>
            <Result/>
            <button onClick={handleToCart}>Перейти в корзину</button>
        </div>
    );
};

export default Calculator;