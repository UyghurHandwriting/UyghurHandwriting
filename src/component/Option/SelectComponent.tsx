import React from 'react';
import "./SelectComponent.scss"

export interface SelectOption {
    value: string;
    label: string;
}

export interface SelectData {
    title: string;
    options: SelectOption[];
}

const optionsData: SelectData[] = [
    {
        title: "Select 1",
        options: [
            { value: "1", label: "Option 1" },
            { value: "2", label: "Option 2" },
            { value: "3", label: "Option 3" }
        ]
    },
    {
        title: "Select 2",
        options: [
            { value: "4", label: "Option 4" },
            { value: "5", label: "Option 5" },
            { value: "6", label: "Option 6" }
        ]
    }
];

const  SelectComponent: React.FC = () => {
    return (
        <div className="select-container">
            {optionsData.map((select, index) => (
                <div key={index} className="select-wrapper">
                    <h2 className="select-title">{select.title}:</h2>
                    <select className="select-element">
                        {select.options.map((option, innerIndex) => (
                            <option key={innerIndex} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>
                </div>
            ))}
        </div>
    );
};

export default SelectComponent;
