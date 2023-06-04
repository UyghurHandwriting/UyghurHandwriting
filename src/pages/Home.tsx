import React from 'react';
import OptionComponent from '../components/OptionComponent';

const optionsData = [
    {
        title: 'Select 1',
        options: [
            { value: '1', label: 'Option 1' },
            { value: '2', label: 'Option 2' },
            { value: '3', label: 'Option 3' },
        ],
    },
    {
        title: 'Select 2',
        options: [
            { value: '4', label: 'Option 1' },
            { value: '5', label: 'Option 2' },
            { value: '6', label: 'Option 3' },
        ],
    },
    
];


const App: React.FC = () => {
    return (
        <div>
            <OptionComponent optionsData={optionsData} />
        </div>
    );
};

export default App;
