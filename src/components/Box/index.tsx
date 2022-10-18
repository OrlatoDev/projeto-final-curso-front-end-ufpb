import React from 'react';
import LogoSlogan from '../LogoSlogan';

import './style.css';

type Props = {
    children: React.ReactNode;
};

function Box(props: Props) {
    return (
        <div id="box">
            <div className="left">
                <LogoSlogan />
            </div>
            <div className="right">{props.children}</div>
        </div>
    );
}

export default Box;
