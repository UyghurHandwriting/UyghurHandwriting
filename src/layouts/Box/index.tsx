import React, { useState } from 'react';
import './BoxLayout.css';
import TextField from '../../components/TextField';
interface BoxLayoutProps { }

const BoxLayout: React.FC<BoxLayoutProps> = () => {

    return (
        <div className="box-layout">
            <span className=''>TextField:</span>
            <TextField maxLength={5000} />
        </div>
    );
};

export default BoxLayout;
