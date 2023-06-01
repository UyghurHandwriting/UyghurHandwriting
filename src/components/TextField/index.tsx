import React, { useState, ChangeEvent } from 'react';
import "./TextField.css"
interface TextFieldProps {
    maxLength: number;
}

const TextField: React.FC<TextFieldProps> = ({ maxLength }) => {
    const [text, setText] = useState<string>('');

    const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        const inputValue = event.target.value;
        if (inputValue.length <= maxLength) {
            setText(inputValue);
        }
    };

    return (
        <div className="text-field">
            <textarea
                className="input-field"
                value={text}
                onChange={handleChange}
                placeholder="Enter Text"
            ></textarea>
            <div className="character-count">{maxLength - text.length}/5000</div>
        </div>
    );
};

export default TextField;
