import {ActiveBasketItemType} from "./types";

export const setActiveBasketItemAC = (basketItem: ActiveBasketItemType) => ({
    type: 'BASKET/SET_ACTIVE_ITEM',
    payload: {basketItem}
} as const)
