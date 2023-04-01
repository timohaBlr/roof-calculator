import {MaterialsActionsType} from "./types";

const materialsInitialState = {}


export type MaterialsInitialStateType = typeof materialsInitialState

export const materialsReducer = (state: MaterialsInitialStateType = materialsInitialState, action: MaterialsActionsType): MaterialsInitialStateType => {
    switch (action.type) {
        case 'MATERIALS/SORT_MATERIAL':
            return {...state}
        default:
            return state
    }
}