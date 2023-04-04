import {CalculatorActionsType, ListType, PipeType, FixType, SizeType, FrameType, FixByTypeType} from "./types";

const calculatorInitialState = {
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
        list: '',
        pipe: '',
        width: '',
        length: '',
        frame: 'standard',
    },
}


export type CalculatorInitialStateType = typeof calculatorInitialState

export const calculatorReducer = (state: CalculatorInitialStateType = calculatorInitialState, action: CalculatorActionsType): CalculatorInitialStateType => {
    switch (action.type) {
        case 'CALCULATOR/SET_DESIGN_DATA':
            return {...state, designData: action.payload.designData}
        case 'CALCULATOR/SET_DATA':
            const lists = action.payload.data.filter(f => f.type === 'list') as ListType[]
            const pipes = action.payload.data.filter(f => f.type === 'pipe') as PipeType[]
            const fixings = action.payload.data.filter(f => f.type === 'fix') as FixByTypeType[]

            return {...state, data: {...state.data, lists, pipes, fixings},designData: {...state.designData,list: lists[0].name,pipe: pipes[0].width.toString()}}
        case 'CALCULATOR/SET_CONFIG':
            const size = action.payload.config.filter(f => f.type === 'size') as SizeType[]
            const frame = action.payload.config.filter(f => f.type === 'frame') as FrameType[]
            const fix = action.payload.config.filter(f => f.type === 'fix') as FixType[]

            return {...state, config: {...state.data, size, fix, frame},designData: {...state.designData,frame: frame[1].key}}
        default:
            return state
    }
}

//thunk creators

