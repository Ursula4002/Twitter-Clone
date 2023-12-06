import React from 'react';
import { Outlet } from "react-router-dom";
import LeftSideBarIcons from './sidebar/left-sidebar-icons';

function Layout() {
    return (
        <>
            <div className="left-sidebar"/>
            <LeftSideBarIcons />
            <Outlet/>
            <div className="right-sidebar" />       
        </>
    );
}

export default Layout;