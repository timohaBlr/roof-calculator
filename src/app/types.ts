import {AnyAction} from "redux"
import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {AppRootStateType} from "./store";
import {MaterialsActionsType} from "../features/input/types";

//general application types
export type InferValueTypes<T> = T extends { [key: string]: infer U } ? U : never

export type AppThunkDispatch = ThunkDispatch<AppRootStateType, unknown, AllReducersActionType>

export type AppThunk<A extends AnyAction, ReturnType = void> = ThunkAction<ReturnType,
    AppRootStateType,
    unknown,
    A>

export type AllReducersActionType = MaterialsActionsType


//

