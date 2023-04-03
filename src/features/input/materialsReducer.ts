import {MaterialsActionsType, ListType, PipeType, FixType, SizeType, FrameType, FixByTypeType} from "./types";

const materialsInitialState = {
    data: {
        lists: [{}] as ListType[],
        pipes: [{}] as PipeType[],
        fixings: [{}] as FixByTypeType[],
    },
    config: {
        size: [{}] as SizeType[],
        fix: [{}] as FixType[],
        frame: [{}] as FrameType[],
    },
    designData: {
        list: 'Лист-1 0.5 ширина 1.8м',
        pipe: '20',
        width: '',
        length: '',
        frame: 'standard',
    },
}


export type MaterialsInitialStateType = typeof materialsInitialState

export const materialsReducer = (state: MaterialsInitialStateType = materialsInitialState, action: MaterialsActionsType): MaterialsInitialStateType => {
    switch (action.type) {
        case 'MATERIALS/SET_DESIGN_DATA':
            return {...state, designData: action.payload.designData}
        case 'MATERIALS/SET_DATA':
            const lists = action.payload.data.filter(f => f.type === 'list') as ListType[]
            const pipes = action.payload.data.filter(f => f.type === 'pipe') as PipeType[]
            const fixings = action.payload.data.filter(f => f.type === 'fix') as FixByTypeType[]

            return {...state, data: {...state.data, lists, pipes, fixings}}
        case 'MATERIALS/SET_CONFIG':
            const size = action.payload.config.filter(f => f.type === 'size') as SizeType[]
            const frame = action.payload.config.filter(f => f.type === 'frame') as FrameType[]
            const fix = action.payload.config.filter(f => f.type === 'fix') as FixType[]

            return {...state, config: {...state.data, size, fix, frame}}
        default:
            return state
    }
}

//thunk creators

