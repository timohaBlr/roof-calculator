import {InferValueTypes} from "../../app/types";
import * as actions from './actions'
import {FixByTypeType, FixType, FrameType, ListType, PipeType} from "../calculator/types";

export type CartActionsType = ReturnType<InferValueTypes<typeof actions>>
export type ActiveCartItemType = {
    itemId: string
    list: ListType
    pipe: PipeType
    fix: FixType
    fixByType: FixByTypeType
    frame: FrameType
    listsCount: number
    cellSize: {
        cellWidth: number
        cellLength: number
    }
    pipesCount: number
    fixingsCount: number
    square: number
    listsPrice: number
    pipesPrice: number
    fixingsPrice: number
    totalPrice: number
}