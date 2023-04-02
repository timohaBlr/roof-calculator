import {InferValueTypes} from "../../app/types";
import * as actions from './actions'

export type MaterialsActionsType = ReturnType<InferValueTypes<typeof actions>>
export type DesignDataType = {
    name: string
    // material: string
    pipe: string
    width: string
    length: string
    frame: string
}
export type MaterialType = {
    type: string
    name: string
    material: string
    unit: string
    width: number
    price: number
}
export type PipeType = {
    type: string
    name: string
    unit: string
    width: number
    price: number
}
export type DataType = {
    material?: string
    name: string
    price: number
    type: string
    unit: string
    width?: number
}
export type ConfigType = {
    type: string
    key: string
    name: string
    min?: number
    max?: number
    step?: number
    value?: number
}
