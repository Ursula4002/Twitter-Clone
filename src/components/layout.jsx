import React from 'react';
import { Outlet } from "react-router-dom";
import LeftSideBarIcons from './sidebar/left-sidebar-icons';
import RightSideBarItems from './right-sidebar/right-sidebar';

function Layout() {
    return (
        <>
            <div className="left-sidebar"/>
            <LeftSideBarIcons />
            <Outlet/>
            <div className="right-sidebar" />  
            <RightSideBarItems />
                
        </>
    );
}

export default Layout;