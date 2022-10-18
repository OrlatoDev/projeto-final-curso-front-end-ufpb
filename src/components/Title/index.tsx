import React from 'react';

import './style.css';

class TitleProps {
    content: string;
    color: string;
    fontSize: string | number;
    highlightContent?: string;
    highlightColor?: string;

    constructor(props: TitleProps) {
        this.content = props.content;
        this.color = props.color;
        this.fontSize = props.fontSize + 'rem';
        this.highlightContent = props.highlightContent;
        this.highlightColor = props.highlightColor;
    }
}

function Title(props: TitleProps) {
    const titleProps = new TitleProps(props);

    return (
        <h1 className="title" style={{ color: titleProps.color, fontSize: titleProps.fontSize }}>
            {props.content} <span style={{ color: props.highlightColor }}>{props.highlightContent}</span>
        </h1>
    );
}

export default Title;
