import React from 'react'
import Work from "./WorkExpr";
import Ed from "./Education";
import Project from "./Project";
import Title from './TopBar';

const Index = () => {
    return (<div>
        <Work/>
        <Ed/>
        <Project/>
        <Title />
    </div>)
}

export default Index;