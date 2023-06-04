import React from 'react';
import "./index.css"
interface SelectOption {
    value: string;
    label: string;
}

interface SelectData {
    title: string;
    options: SelectOption[];
}

interface SelectComponentProps {
    optionsData: SelectData[];
}

const SelectComponent: React.FC<SelectComponentProps> = ({ optionsData }) => {
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