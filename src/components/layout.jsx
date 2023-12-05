import React from 'react';
import LeftSideBar from './sidebar/left-sidebar';

function Layout({children}) {
    return (
        <>
            <div className="left-sidebar"/>
            <LeftSideBar />
            {children} 
            <div className="right-sidebar" />       
        </>
    );
}

export default Layout;