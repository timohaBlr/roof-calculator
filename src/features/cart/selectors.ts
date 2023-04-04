import {AppRootStateType} from "../../app/store";
import {createSelector} from "reselect";

export const selectPipesCount = (state: AppRootStateType) => state.cart.activeCartItem.pipesCount

export const selectActiveItem = createSelector([(state: AppRootStateType) => state.cart.activeCartItem], (activeItem) => {
    return activeItem
})
export const selectCartItems = createSelector([(state: AppRootStateType) => state.cart.cartItems], (cartItems) => {
    return cartItems
})
