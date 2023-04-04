import React, {useEffect} from 'react';
import './App.css';
import useAppDispatch from "../common/hooks/useAppDispatch";
import {getDataAndConfigTC} from "./appReducer";
import {selectIsAppInitialized} from "./selectors";
import useAppSelector from "../common/hooks/useAppSelector";
import { RouterProvider } from 'react-router-dom';
import {router} from "../common/routes";

function App() {
    const dispatch = useAppDispatch()
    const isAppInitialized = useAppSelector(selectIsAppInitialized)

    useEffect(() => {
        dispatch(getDataAndConfigTC())
    }, [dispatch])

    if (!isAppInitialized) return <h1>Приложение загружается</h1>
    return <RouterProvider router={router}/>;
}

export default App;
