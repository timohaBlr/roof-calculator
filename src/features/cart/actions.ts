import {ActiveCartItemType} from "./types";

export const setActiveCartItemAC = (cartItem: ActiveCartItemType) => ({
    type: 'CART/SET_ACTIVE_ITEM',
    payload: { cartItem}
} as const)

export const addToCartItemsAC = (cartItem: ActiveCartItemType) => ({
    type: 'CART/ADD_TO_CART_ITEMS',
    payload: {cartItem}
} as const)

export const removeItemFromCartAC = (itemId: string) => ({
    type: 'CART/REMOVE_ITEM_FROM_CART',
    payload: {itemId}
} as const)
