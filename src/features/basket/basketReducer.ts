import {BasketActionsType} from "./types";
import {AllReducersActionType, AppThunk} from "../../app/types";
import {DesignDataType, FixByTypeType, FixType, ListType, PipeType} from "../input/types";
import {setActiveBasketItemAC} from "./actions";
import {cellSizer, countPipesLength, listsCounter} from "../../common/utils/mathUtils";

const basketInitialState = {
    activeItem: {
        list: {} as ListType,
        listsCount: 0,
        listsPrice: 0,
        pipe: {} as PipeType,
        pipesCount: 0,
        pipesPrice: 0,
        fix: {} as FixType,
        fixByType: {} as FixByTypeType,
        fixingsCount: 0,
        fixingsPrice: 0,
        frame: {},
        cellSize: {
            cellWidth: 0,
            cellLength: 0,
        },
        square: 0,
        totalPrice: 0,
    },
    items: [],
}


export type BasketInitialStateType = typeof basketInitialState

export const basketReducer = (state: BasketInitialStateType = basketInitialState, action: BasketActionsType): BasketInitialStateType => {
    switch (action.type) {
        case 'BASKET/SET_ACTIVE_ITEM':
            return {...state, activeItem: action.payload.basketItem}
        default:
            return state
    }
}

//thunk creators
export const setBasketActiveItemTC = (designData: DesignDataType): AppThunk<AllReducersActionType> => (dispatch, getState) => {
    const list = getState().data.data.lists.find(f => f.name === designData.list)
    const pipe = getState().data.data.pipes.find(f => f.width === +designData.pipe)
    const frame = getState().data.config.frame.find(f => f.key === designData.frame)
    const width = +designData.width
    const length = +designData.length
    const square = Number((width * length).toFixed(2))
    const fix = getState().data.config.fix.find(f => f.key === list!.material && f.type === 'fix')
    // на случай, если вариант крепления будет зависеть не только от материала листа, а будет выбор(гвозди,заклёпки и т.д.)
    const fixByType = getState().data.data.fixings.find(f => f.name === 'Саморез')


    if (list && pipe && frame && fixByType && fix) {
        const cellSize = cellSizer(width, length, frame.step, pipe.width)
        const pipesCount = Math.ceil(countPipesLength(cellSize, width, length, pipe.width))
        const listsCount = listsCounter(square, list.name)
        const listsPrice = listsCount * list.price
        const pipesPrice = pipesCount * pipe.price

        const fixingsCount = Math.ceil(square * fix!.value!)
        const fixingsPrice = fixingsCount * fixByType!.price
        const totalPrice = listsPrice + pipesPrice + fixingsPrice
        dispatch(setActiveBasketItemAC({
            list, pipe, fix, fixByType, frame, listsCount,
            cellSize, pipesCount, fixingsCount, square, listsPrice, pipesPrice,
            fixingsPrice, totalPrice
        }))
    }
}