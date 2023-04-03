import React, {useEffect} from 'react';
import './App.css';
import InputForm from "../features/input/InputForm/InputForm";
import ResultView from "../features/ResultView/ResultView";
import useAppDispatch from "../common/hooks/useAppDispatch";
import {getDataAndConfigTC} from "./appReducer";
import {selectIsAppInitialized} from "./selectors";
import useAppSelector from "../common/hooks/useAppSelector";

function App() {
    const dispatch = useAppDispatch()
    const isAppInitialized = useAppSelector(selectIsAppInitialized)

    useEffect(() => {
        dispatch(getDataAndConfigTC())
    }, [dispatch])

    if (!isAppInitialized) return <h1>Приложение загружается</h1>
    return (
        <>
            <InputForm/>
            <ResultView/>
        </>
    );
}

export default App;
