import { InferValueTypes} from "../../app/types";
import * as actions from './actions'

export type MaterialsActionsType = ReturnType<InferValueTypes<typeof actions>>
export type DesignDataType = {
    list: string
    pipe: string
    width: string
    length: string
    frame: string
}
export type ListType = {
    type: string
    name: string
    material: string
    unit: string
    width: number
    price: number
}
export type PipeType = Omit<ListType, 'material'>
export type FixByTypeType = Omit<ListType, 'material' | 'width'>


export type SizeType = {
    type: string
    key: string
    name: string
    min: number
    max: number
    step: number
}
export type FrameType = Omit<SizeType, 'min' | 'max'>
export type FixType = Omit<SizeType, 'min' | 'max'> & { value: number }
