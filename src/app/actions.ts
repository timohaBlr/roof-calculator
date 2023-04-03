
export const setIsAppInitializedAC = (isAppInitialized: boolean) => ({
    type: 'APP/SET_IS_APP_INITIALIZED',
    payload: {isAppInitialized}
} as const)
// export const setAppErrorAC = (appError: boolean) => ({
//     type: 'APP/SET_APP_ERROR',
//     payload: {appError}
// } as const)
