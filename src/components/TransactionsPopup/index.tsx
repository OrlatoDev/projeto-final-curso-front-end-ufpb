import React from 'react';
import Colors from '../../enums/colors';
import Paragraph from '../Paragraph';
import Title from '../Title';

import './style.css';

const day = new Date().getDate();
const month = new Date().getMonth();

function TransactionsPopup() {
    return (
        <div className="transactions-popup">
            <div className="top">
                <div>
                    <Title content={String(day) + '/' + String(month)} color={Colors.black} fontSize={1.5} />
                    <div className="transactions-popup-item">
                        <Paragraph content="PIX" color={Colors.black} fontSize={1} />
                        <Paragraph content="$250" color={Colors.green} fontSize={1} />
                    </div>
                    <div className="transactions-popup-item">
                        <Paragraph content="PIX" color={Colors.black} fontSize={1} />
                        <Paragraph content="$100" color={Colors.orange} fontSize={1} />
                    </div>
                    <Title content={String(day - 1) + '/' + String(month)} color={Colors.black} fontSize={1.5} />
                    <div className="transactions-popup-item">
                        <Paragraph content="bill" color={Colors.black} fontSize={1} />
                        <Paragraph content="$600" color={Colors.orange} fontSize={1} />
                    </div>
                    <div className="transactions-popup-item">
                        <Paragraph content="international transfer" color={Colors.black} fontSize={1} />
                        <Paragraph content="$920" color={Colors.green} fontSize={1} />
                    </div>
                    <div className="transactions-popup-item">
                        <Paragraph content="DOC" color={Colors.black} fontSize={1} />
                        <Paragraph content="$252" color={Colors.orange} fontSize={1} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TransactionsPopup;
