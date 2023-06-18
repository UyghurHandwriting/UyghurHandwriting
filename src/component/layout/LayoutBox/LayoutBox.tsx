
import React, { useState, ReactNode } from 'react';
import './LayoutBox.scss';

interface BoxLayoutProps {
    propComponent: ReactNode;
    title: string;
}

const LayoutBox: React.FC<BoxLayoutProps> = ({ propComponent, title }) => {
    return (
        <div className="box-layout">
            <span className="">{title}:</span>
            {propComponent}
        </div>
    );
};

export default LayoutBox;