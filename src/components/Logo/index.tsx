import React from 'react';

import Colors from '../../enums/colors';
import Title from '../Title';

function Logo() {
    return <Title content="u" color={Colors.purple} fontSize={1.75} highlightColor={Colors.black} highlightContent="bank" />;
}

export default Logo;
