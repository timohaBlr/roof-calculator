import {ConfigType, DataType, MaterialsActionsType, MaterialType, PipeType} from "./types";
import {AllReducersActionType, AppThunk} from "../../app/types";
import {setConfigAC, setDataAC} from "./actions";

const materialsInitialState = {
    data: [{}] as DataType[],
    config: [{}] as ConfigType[],
    usedMaterial: {
        material: '',
        name: '',
        price: 0,
        type: '',
        unit: '',
        width: 0,
    },
    usedPipe: {
        name: '',
        price: 0,
        type: '',
        unit: '',
        width: 0,
    },
    designData: {
        name: 'Лист-1 0.5 ширина 1.8м',
        pipe: '20',
        width: '',
        length: '',
        frame: '1.2',
    },
}


export type MaterialsInitialStateType = typeof materialsInitialState

export const materialsReducer = (state: MaterialsInitialStateType = materialsInitialState, action: MaterialsActionsType): MaterialsInitialStateType => {
    switch (action.type) {
        case 'MATERIALS/SET_DESIGN_DATA':
            const usedMaterial = state.data.find(f => f.name === action.payload.designData.name)
            const usedPipe = state.data.find(f => f.width === +action.payload.designData.pipe)
            return {
                ...state, designData: action.payload.designData,
                usedMaterial: (usedMaterial ? usedMaterial : {}) as MaterialType,
                usedPipe: (usedPipe ? usedPipe : {}) as PipeType
            }
        case 'MATERIALS/SET_DATA':
            return {...state, data: action.payload.data}
        case 'MATERIALS/SET_CONFIG':
            return {...state, config: action.payload.config}
        default:
            return state
    }
}

//thunk creators

export const getData = (): AppThunk<AllReducersActionType> => async (dispatch) => {
    try {
        //имитация запроса на сервер
        const response = await fetch('data.json'
            , {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }
        )
        const result: DataType[] = await response.json()
        dispatch(setDataAC(result))
    } catch (err: any) {
    } finally {
    }
}
export const getConfig = (): AppThunk<AllReducersActionType> => async (dispatch) => {
    try {
        //имитация запроса на сервер
        const response = await fetch('config.json'
            , {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }
        )
        const result: ConfigType[] = await response.json()
        dispatch(setConfigAC(result))
    } catch (err: any) {
    } finally {
    }
}