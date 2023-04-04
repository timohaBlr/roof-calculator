import React from 'react';
import './App.css';
import {Outlet} from 'react-router-dom';
import Header from "../common/components/Header/Header";

const MainLayout = () => {
    return (
        <div className={'wrapper'}>
            <Header/>
            <Outlet/>
        </div>
    );
};

export default MainLayout;