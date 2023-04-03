import {AppRootStateType} from "../../app/store";
import {createSelector} from "reselect";

export const selectPipesCount = (state: AppRootStateType) => state.basket.activeItem.pipesCount

export const selectActiveItem = createSelector([(state: AppRootStateType) => state.basket.activeItem], (activeItem) => {
    return activeItem
})
