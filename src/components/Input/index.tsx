import React, { HTMLInputTypeAttribute } from 'react';

import './style.css';

class InputProps {
    type: HTMLInputTypeAttribute;
    name: string;
    id: string;
    width: string | number;
    padding: string | number;
    label: string;
    backgroundColor: string;
    color: string;
    secondaryLabel?: string;

    constructor(props: InputProps) {
        this.type = props.type;
        this.name = props.name;
        this.id = props.id;
        this.width = props.width + 'vw';
        this.padding = props.padding + 'vw';
        this.label = props.label;
        this.backgroundColor = props.backgroundColor;
        this.color = props.color;
        if (props.secondaryLabel) this.secondaryLabel = props.secondaryLabel;
    }
}

function Input(props: InputProps) {
    const inputProps = new InputProps(props);

    return (
        <div className="input-wrapper">
            <label htmlFor={inputProps.id} style={{ color: inputProps.color }}>
                {inputProps.label}
            </label>
            <input
                className="input"
                type={inputProps.type}
                name={inputProps.name}
                id={inputProps.id}
                style={{
                    width: inputProps.width,
                    padding: inputProps.padding,
                    backgroundColor: inputProps.backgroundColor,
                    color: inputProps.color,
                    borderColor: inputProps.color
                }}
            />
            <label className="secondary-label" style={{ color: inputProps.color }} htmlFor={inputProps.id}>
                {inputProps.secondaryLabel}
            </label>
        </div>
    );
}

export default Input;
