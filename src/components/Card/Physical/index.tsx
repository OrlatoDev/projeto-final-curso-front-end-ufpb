import React from 'react';
import Colors from '../../../enums/colors';
import CustomImage from '../../CustomImage';
import Paragraph from '../../Paragraph';

import './style.css';

const dueDate = new Date().getFullYear() + 4;
const dueDateString = 'due date: ' + dueDate;

function PhysicalCard() {
    return (
        <div className="physical-card">
            <div className="top">
                <CustomImage src="/assets/aproximation_icon.png" width={1.5} height={1.5} />
            </div>
            <div className="bottom">
                <Paragraph content={dueDateString} color={Colors.white} fontSize={1} />
                <Paragraph content="U" color={Colors.white} fontSize={2} />
            </div>
        </div>
    );
}

export default PhysicalCard;
