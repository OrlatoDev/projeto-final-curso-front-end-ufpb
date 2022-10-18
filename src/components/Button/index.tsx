import React from 'react';

import './style.css';

class ButtonProps {
    content: string;
    color: string;
    fontSize: string | number;
    padding: string | number;
    paddingBottomAndTop?: string | number;
    backgroundColor: string;
    path: string;

    constructor(props: ButtonProps) {
        this.content = props.content;
        this.color = props.color;
        this.fontSize = props.fontSize + 'rem';
        this.padding = props.padding + 'rem';
        this.paddingBottomAndTop = Number(props.padding) / 2 + 'rem';
        this.backgroundColor = props.backgroundColor;
        this.path = props.path;
    }
}

function Button(props: ButtonProps) {
    const buttonProps = new ButtonProps(props);

    return (
        <button
            className="button"
            style={{
                color: buttonProps.color,
                fontSize: buttonProps.fontSize,
                paddingLeft: buttonProps.padding,
                paddingRight: buttonProps.padding,
                paddingTop: buttonProps.paddingBottomAndTop,
                paddingBottom: buttonProps.paddingBottomAndTop,
                backgroundColor: buttonProps.backgroundColor
            }}
            onClick={() => (window.location.href = buttonProps.path)}
        >
            {props.content}
        </button>
    );
}

export default Button;
