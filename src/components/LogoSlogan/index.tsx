import React from 'react';

import './style.css';

import Colors from '../../enums/colors';
import Title from '../Title';
import Paragraph from '../Paragraph';

function LogoSlogan() {
    return (
        <div className="logo-slogan">
            <Title content="u" color={Colors.purple} fontSize={8} highlightColor={Colors.white} highlightContent="bank" />
            <Paragraph content="the bank in your hands" color={Colors.white} fontSize={2} />
        </div>
    );
}

export default LogoSlogan;
