import React from 'react';

import './style.css';

import Colors from '../../enums/colors';
import Button from '../Button';
import Logo from '../Logo';

function Navbar() {
    return (
        <div className="nav">
            <div className="nav-left">
                <Logo />
            </div>
            <div className="nav-right">
                <Button content="contact" color={Colors.black} fontSize={1.5} padding={0} backgroundColor="transparent" path="/contact" />
                <Button content="login" color={Colors.black} fontSize={1.5} padding={0} backgroundColor="transparent" path="/login" />
            </div>
        </div>
    );
}

export default Navbar;
