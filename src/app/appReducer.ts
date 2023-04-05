import {AllReducersActionType, AppActionsType, AppThunk, ConfigType, DataType} from "./types";
import {setConfigAC, setDataAC} from "../features/calculator/actions";
import {setIsAppInitializedAC} from "./actions";
import {base64ToUtf8} from "../common/utils/base64ToUtf8";
import {instance} from "../api/appApi";

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


//thunk creators
export const getDataAndConfigTC = (): AppThunk<AllReducersActionType> => async (dispatch) => {
    try {

        // const response1 = await fetch('data.json', {headers})
        // const result1: DataType[] = await response1.json()
        // dispatch(setDataAC(result1))
        // const response1 = await fetch(`${baseUrl}data.json`, {headers})
        const response1 = await instance.get('data.json')
        const data: DataType[] = JSON.parse(base64ToUtf8(response1.data.content))
        dispatch(setDataAC(data))
        // const response2 = await fetch('config.json', {headers})
        // const result2: ConfigType[] = await response2.json()
        // dispatch(setConfigAC(result2))
        const response2 = await instance.get('config.json')
        const config: ConfigType[] = JSON.parse(base64ToUtf8(response2.data.content))
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