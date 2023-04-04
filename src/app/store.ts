import {legacy_createStore as createStore, combineReducers, applyMiddleware} from "redux";
import thunk from 'redux-thunk'
import {AppThunkDispatch} from "./types";
import {composeWithDevTools} from "redux-devtools-extension";
import {calculatorReducer} from "../features/input/calculatorReducer";
import {appReducer} from "./appReducer";
import {cartReducer} from "../features/cart/cartReducer";

const rootReducer = combineReducers({
    app: appReducer,
    calculator: calculatorReducer,
    cart: cartReducer,
})

const middlewareEnhancer = applyMiddleware<AppThunkDispatch, AppRootStateType>(thunk)
const composedEnhancers = composeWithDevTools(middlewareEnhancer)

export const store = createStore(rootReducer, composedEnhancers)

export type AppRootStateType = ReturnType<typeof rootReducer>


// @ts-ignore
window.store = store
