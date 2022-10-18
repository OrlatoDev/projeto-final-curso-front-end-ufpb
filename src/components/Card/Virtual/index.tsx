import React from 'react';
import Colors from '../../../enums/colors';
import Paragraph from '../../Paragraph';

import './style.css';

const dueDate = new Date().getFullYear() + 4;
const dueDateString = 'due date: ' + dueDate;

function VirtualCard() {
    return (
        <div className="virtual-card">
            <div className="top">
                <Paragraph content="0000 0000 0000 0000" color={Colors.white} fontSize={1} />
            </div>
            <div className="bottom">
                <Paragraph content={dueDateString} color={Colors.white} fontSize={1} />
                <Paragraph content="U" color={Colors.white} fontSize={2} />
            </div>
        </div>
    );
}

export default VirtualCard;
