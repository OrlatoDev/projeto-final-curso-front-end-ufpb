import React from 'react';

import './style.css';

class ParagraphProps {
    content: string;
    color: string;
    fontSize: string | number;

    constructor(props: ParagraphProps) {
        this.content = props.content;
        this.color = props.color;
        this.fontSize = props.fontSize + 'rem';
    }
}

function Paragraph(props: ParagraphProps) {
    const paragraphProps = new ParagraphProps(props);

    return (
        <p className="paragraph" style={{ color: paragraphProps.color, fontSize: paragraphProps.fontSize }}>
            {props.content}
        </p>
    );
}

export default Paragraph;
