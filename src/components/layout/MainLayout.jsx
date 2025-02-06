import React from 'react';
import { cn } from '../../utils';
import Navbar from '../navbar/navbar';
import Footer from '../footer/footer';

function MainLayout ({ children,className,incNav=true,incFooter=true }) {
    return (
        <div className={cn("relative w-full min-h-screen flex flex-col justify-start items-center pt-[82px]  ",className)}>
            {incNav?<Navbar/> :""}
            {children}
            {incFooter?<Footer/>:""}
        </div>
    );
};

export default MainLayout;