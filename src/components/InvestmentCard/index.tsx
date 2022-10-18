import React from 'react';
import Colors from '../../enums/colors';
import Button from '../Button';
import Paragraph from '../Paragraph';
import Title from '../Title';

import './style.css';

class InvestmendCardProps {
    nameTitle: string;
    name: string;
    priceNow: number;
    value: number;
    color: string;

    constructor(props: InvestmendCardProps) {
        this.nameTitle = props.nameTitle;
        this.name = props.name;
        this.priceNow = props.priceNow;
        this.value = props.value;
        this.color = props.color;
    }
}

function InvestmentCard(props: InvestmendCardProps) {
    const investmentCardProps = new InvestmendCardProps(props);

    return (
        <div className="investment-card">
            <div className="top">
                <div className="name">
                    <Title content={investmentCardProps.nameTitle} color={investmentCardProps.color} fontSize={1.2} />
                    <Paragraph content={investmentCardProps.name} color={Colors.black} fontSize={0.8} />
                </div>
                <div className="buttons">
                    <Button backgroundColor={Colors.purple} color={Colors.white} content="sell" fontSize={1} padding={1} path="" />
                    <Button backgroundColor={Colors.purple} color={Colors.white} content="buy" fontSize={1} padding={1} path="" />
                </div>
            </div>
            <div className="bottom">
                <div className="chart"></div>
                <div className="values">
                    <Title content={'$' + String(investmentCardProps.priceNow)} color={Colors.black} fontSize={1.2} />
                    <Paragraph
                        content={String(investmentCardProps.value) + '%'}
                        color={investmentCardProps.value >= 0 ? Colors.green : Colors.orange}
                        fontSize={0.8}
                    />
                </div>
            </div>
        </div>
    );
}

export default InvestmentCard;
