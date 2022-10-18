import React, { useState } from 'react';
import CustomImage from '../CustomImage';
import Paragraph from '../Paragraph';
import Title from '../Title';

import './style.css';

class GenericCardProps {
    accentColor: string;
    color: string;
    backgroundColor: string;
    text: string;
    value: number;

    constructor(props: GenericCardProps) {
        this.accentColor = props.accentColor;
        this.color = props.color;
        this.backgroundColor = props.backgroundColor;
        this.text = props.text;
        this.value = props.value;
    }
}

function GenericCard(props: GenericCardProps) {
    const genericCardProps = new GenericCardProps(props);

    const [valueVisibility, setVisibility] = useState(false);

    return (
        <div className="generic-card" style={{ backgroundColor: genericCardProps.backgroundColor }}>
            <div className="generic-card-left">
                <Paragraph color={genericCardProps.accentColor} content={genericCardProps.text} fontSize={1} />
                <Title
                    content="$"
                    color={genericCardProps.accentColor}
                    fontSize={2}
                    highlightContent={valueVisibility ? String(genericCardProps.value) : '*'.repeat(String(genericCardProps.value).length)}
                    highlightColor={genericCardProps.color}
                />
            </div>

            <div className="generic-card-right">
                <div onClick={() => setVisibility(true)}>
                    <CustomImage src="/assets/eye.png" width={3} />
                </div>
                <div onClick={() => setVisibility(false)}>
                    <CustomImage src="/assets/eye_1.png" width={3} />
                </div>
            </div>
        </div>
    );
}

export default GenericCard;
