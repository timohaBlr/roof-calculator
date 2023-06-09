import {AnyAction} from "redux"
import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {AppRootStateType} from "./store";
import {CalculatorActionsType} from "../features/calculator/types";
import * as actions from "./actions";
import {CartActionsType} from "../features/cart/types";

//general application types
export type InferValueTypes<T> = T extends { [key: string]: infer U } ? U : never

export type AppThunkDispatch = ThunkDispatch<AppRootStateType, unknown, AllReducersActionType>

export type AppThunk<A extends AnyAction, ReturnType = void> = ThunkAction<ReturnType,
    AppRootStateType,
    unknown,
    A>

export type AllReducersActionType = CalculatorActionsType | AppActionsType | CartActionsType


// appReducer types
export type AppActionsType = ReturnType<InferValueTypes<typeof actions>>

export type DataType = {
    material?: string
    name: string
    price: number
    type: string
    unit: string
    width?: number
}
export type ConfigType = {
    type: string
    key: string
    name: string
    min?: number
    max?: number
    step?: number
    value?: number
}
