import {AllReducersActionType, AppActionsType, AppThunk, ConfigType, DataType} from "./types";
import {setConfigAC, setDataAC} from "../features/calculator/actions";
import {setIsAppInitializedAC} from "./actions";

const appInitialState = {
    iSAppInitialized: false,
    // appError: false
}


export type AppInitialStateType = typeof appInitialState

export const appReducer = (state: AppInitialStateType = appInitialState, action: AppActionsType): AppInitialStateType => {
    switch (action.type) {
        case 'APP/SET_IS_APP_INITIALIZED':
            return {...state, iSAppInitialized: action.payload.isAppInitialized}
        // case 'APP/SET_APP_ERROR':
        //     return {...state, appError: action.payload.appError}
        default:
            return state
    }
}

function b64_to_utf8(str: string) {
    return decodeURIComponent(escape(window.atob(str)));
}

//thunk creators
export const getDataAndConfigTC = (): AppThunk<AllReducersActionType> => async (dispatch) => {
    try {
        //имитация запроса на сервер
        const headers = {
            'Content-Type': 'application/json',
            'Accept': 'application/vnd.github+json'
        }
        const baseUrl = 'https://api.github.com/repositories/604581677/contents/data/'

        // const response1 = await fetch('data.json', {headers})
        // const result1: DataType[] = await response1.json()
        const response1 = await fetch(`${baseUrl}data.json`, {headers})
        const result1 = await response1.json()
        const data: DataType[] = JSON.parse(b64_to_utf8(result1.content))

        // const response2 = await fetch('config.json', {headers})
        // const result2: ConfigType[] = await response2.json()
        const response2 = await fetch(`${baseUrl}config.json`, {headers})
        const result2 = await response2.json()
        const config: ConfigType[] = JSON.parse(b64_to_utf8(result2.content))
        dispatch(setDataAC(data))
        dispatch(setConfigAC(config))
        dispatch(setIsAppInitializedAC(true))
    } catch (err: any) {
        console.warn(err)
    } finally {

    }
}
// export const getConfigTC = (): AppThunk<AllReducersActionType> => async (dispatch) => {
//     try {
//         //имитация запроса на сервер
//         const response = await fetch('config.json'
//             , {
//                 headers: {
//                     'Content-Type': 'application/json',
//                     'Accept': 'application/json'
//                 }
//             }
//         )
//         const result: ConfigType[] = await response.json()
//         dispatch(setConfigAC(result))
//     } catch (err: any) {
//     } finally {
//     }
// }