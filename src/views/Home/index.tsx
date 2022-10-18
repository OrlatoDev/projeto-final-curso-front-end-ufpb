import React from 'react';

import './style.css';

import Navbar from '../../components/Navbar';
import LogoSlogan from '../../components/LogoSlogan';
import Paragraph from '../../components/Paragraph';
import Colors from '../../enums/colors';
import Button from '../../components/Button';
import CustomImage from '../../components/CustomImage';

function Test() {
    return (
        <main>
            <Navbar></Navbar>
            <div id="home-main">
                <div id="home-main-wrapper">
                    <div className="left">
                        <LogoSlogan />
                        <div>
                            <Paragraph color={Colors.white} content="no fees, easy and modern" fontSize={1} />
                            <div className="buttons">
                                <Button backgroundColor={Colors.purple} color={Colors.white} content="try it out" fontSize={1} padding={1} path="/register" />
                                <Button backgroundColor={Colors.orange} color={Colors.white} content="more about" fontSize={1} padding={1} path="/about" />
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <CustomImage src="/assets/credit_card_icon.png" width={30} />
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Test;
