import {AppRootStateType} from "../../app/store";
import {createSelector} from "reselect";

export const selectDesignData = (state: AppRootStateType) => state.data.designData

export const selectSquare = createSelector([selectDesignData], (designData) => {
    return +designData.length * +designData.width
})
export const selectMaterials = createSelector([(state: AppRootStateType) => state.data.data], (data) => {
    return data.filter(f => f.type === 'list')
})
export const selectPipes = createSelector([(state: AppRootStateType) => state.data.data], (data) => {
    return data.filter(f => f.type === 'pipe')
})
export const selectFrames = createSelector([(state: AppRootStateType) => state.data.config], (config) => {
    return config.filter(f => f.type === 'frame')
})
export const selectLength = createSelector([(state: AppRootStateType) => state.data.config], (config) => {
    return config.find(f => f.key === 'length')
})
export const selectWidth = createSelector([(state: AppRootStateType) => state.data.config], (config) => {
    return config.find(f => f.key === 'width')
})
export const selectUsedMaterial = createSelector([(state: AppRootStateType) => state.data.usedMaterial], (usedMaterial) => {
    return usedMaterial
})