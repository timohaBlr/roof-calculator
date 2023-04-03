import {legacy_createStore as createStore, combineReducers, applyMiddleware} from "redux";
import thunk from 'redux-thunk'
import {AppThunkDispatch} from "./types";
import {composeWithDevTools} from "redux-devtools-extension";
import {materialsReducer} from "../features/input/materialsReducer";
import {appReducer} from "./appReducer";
import {basketReducer} from "../features/basket/basketReducer";

const rootReducer = combineReducers({
    app: appReducer,
    data: materialsReducer,
    basket: basketReducer,
})

const middlewareEnhancer = applyMiddleware<AppThunkDispatch, AppRootStateType>(thunk)
const composedEnhancers = composeWithDevTools(middlewareEnhancer)

export const store = createStore(rootReducer, composedEnhancers)

export type AppRootStateType = ReturnType<typeof rootReducer>


// @ts-ignore
window.store = store
