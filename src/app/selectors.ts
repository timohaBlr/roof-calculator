import {AppRootStateType} from "./store";

export const selectIsAppInitialized = (state: AppRootStateType) => state.app.iSAppInitialized
