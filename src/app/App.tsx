import React, {useEffect} from 'react';
import './App.css';
import InputForm from "../features/input/InputForm/InputForm";
import ResultView from "../features/ResultView/ResultView";
import {getConfig, getData} from "../features/input/materialsReducer";
import useAppDispatch from "../common/hooks/useAppDispatch";

function App() {
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(getData())
        dispatch(getConfig())
    }, [])
    return (
        <>
            <InputForm/>
            <ResultView/>
        </>
    );
}

export default App;
