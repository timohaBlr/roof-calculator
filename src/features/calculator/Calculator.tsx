import React, {useEffect} from 'react';
import InputForm from "./InputForm/InputForm";
import Result from "./Result/Result";
import useAppDispatch from "../../common/hooks/useAppDispatch";
import {setActiveCartItemAC} from "../cart/actions";
import {FixByTypeType, FixType, FrameType, ListType, PipeType} from "./types";
import s from './Calculator.module.css'

const Calculator = () => {

    const dispatch = useAppDispatch()
    useEffect(() => {
        // Для сброса расчётов при возвращении к калькулятору
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

    return (
        <div className={s.calculator }>
            <InputForm/>
            <Result/>
        </div>
    );
};

export default Calculator;