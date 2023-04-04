import {AppRootStateType} from "../../app/store";
import {createSelector} from "reselect";

export const selectDesignData = (state: AppRootStateType) => state.calculator.designData
export const selectMaterials = createSelector([(state: AppRootStateType) => state.calculator.data.lists], (lists) => {
    return lists
})
export const selectPipes = createSelector([(state: AppRootStateType) => state.calculator.data.pipes], (pipes) => {
    return pipes
})
export const selectFrames = createSelector([(state: AppRootStateType) => state.calculator.config.frame], (frame) => {
    return frame
})
export const selectSizeFromConfig = createSelector([(state: AppRootStateType) => state.calculator.config.size], (size) => {
    return size
})
export const selectLengthConfig = createSelector([selectSizeFromConfig], (size) => {
    return size.find(f => f.key === 'length')
})
export const selectWidthFromConfig = createSelector([selectSizeFromConfig], (size) => {
    return size.find(f => f.key === 'width')
})
