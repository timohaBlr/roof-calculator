import {ActiveCartItemType, CartActionsType} from "./types";
import {AllReducersActionType, AppThunk} from "../../app/types";
import {DesignDataType, FixByTypeType, FixType, FrameType, ListType, PipeType} from "../calculator/types";
import {setActiveCartItemAC} from "./actions";
import {cellSizer, countPipesLength, listsCounter} from "../../common/utils/mathUtils";
import {v1} from "uuid";

const cartInitialState = {
    activeCartItem: {
        itemId: '',
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
        frame: {} as FrameType,
        cellSize: {
            cellWidth: 0,
            cellLength: 0,
        },
        square: 0,
        totalPrice: 0,
    },
    cartItems: [] as ActiveCartItemType[],
}


export type CartInitialStateType = typeof cartInitialState

export const cartReducer = (state: CartInitialStateType = cartInitialState, action: CartActionsType): CartInitialStateType => {
    switch (action.type) {
        case 'CART/SET_ACTIVE_ITEM':
            return {...state, activeCartItem: action.payload.cartItem}
        case 'CART/ADD_TO_CART_ITEMS':
            return {...state, cartItems: [action.payload.cartItem, ...state.cartItems]}
        case 'CART/REMOVE_ITEM_FROM_CART':
            return {...state, cartItems: state.cartItems.filter(f => f.itemId !== action.payload.itemId)}
        default:
            return state
    }
}

//thunk creators
export const setCartActiveItemTC = (designData: DesignDataType): AppThunk<AllReducersActionType> => (dispatch, getState) => {
    const list = getState().calculator.data.lists.find(f => f.name === designData.list)
    const pipe = getState().calculator.data.pipes.find(f => f.width === +designData.pipe)
    const frame = getState().calculator.config.frame.find(f => f.key === designData.frame)
    const width = +designData.width
    const length = +designData.length
    const square = Number((width * length).toFixed(2))
    const fix = getState().calculator.config.fix.find(f => f.key === list!.material && f.type === 'fix')
    // на случай, если вариант крепления будет зависеть не только от материала листа, а будет выбор(гвозди,заклёпки и т.д.)
    const fixByType = getState().calculator.data.fixings.find(f => f.name === 'Саморез')
    const itemId = v1()

    if (list && pipe && frame && fixByType && fix) {
        const cellSize = cellSizer(width, length, frame.step, pipe.width)
        const pipesCount = Math.ceil(countPipesLength(cellSize, width, length, pipe.width))
        const listsCount = listsCounter(square, list.name)
        const listsPrice = listsCount * list.price
        const pipesPrice = pipesCount * pipe.price

        const fixingsCount = Math.ceil(square * fix!.value!)
        const fixingsPrice = fixingsCount * fixByType!.price
        const totalPrice = listsPrice + pipesPrice + fixingsPrice
        dispatch(setActiveCartItemAC({
            list, pipe, fix, fixByType, frame, listsCount,
            cellSize, pipesCount, fixingsCount, square, listsPrice, pipesPrice,
            fixingsPrice, totalPrice, itemId
        }))
    }
}