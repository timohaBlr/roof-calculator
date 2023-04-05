import React, {useEffect} from 'react';
import './App.css';
import useAppDispatch from "../common/hooks/useAppDispatch";
import {getDataAndConfigTC} from "./appReducer";
import {selectIsAppInitialized} from "./selectors";
import useAppSelector from "../common/hooks/useAppSelector";
import {RouterProvider} from 'react-router-dom';
import {router} from "../common/routes";
import AppInfo from "../common/components/AppInfo/AppInfo";

function App() {
    const dispatch = useAppDispatch()
    const isAppInitialized = useAppSelector(selectIsAppInitialized)

    useEffect(() => {
        dispatch(getDataAndConfigTC())
    }, [dispatch])

    if (!isAppInitialized) return <AppInfo/>

    return <RouterProvider router={router}/>;
}

export default App;
