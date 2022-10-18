import React from 'react';
import CustomImage from '../../components/CustomImage';
import Navbar from '../../components/Navbar';
import Paragraph from '../../components/Paragraph';
import Title from '../../components/Title';
import Colors from '../../enums/colors';

import './style.css';

function About() {
    return (
        <main>
            <Navbar />
            <div id="about-main">
                <div id="about-main-wrapper">
                    <div className="top">
                        <div>
                            <Title content="0%" fontSize={5} color={Colors.orange} />
                            <Paragraph content="fees, free account and free cards" fontSize={1.3} color={Colors.white} />
                        </div>
                        <div>
                            <Title content="24.000.000" fontSize={5} color={Colors.purple} />
                            <Paragraph content="clients spread around the world" fontSize={1.3} color={Colors.white} />
                        </div>
                        <div>
                            <Title content="14" fontSize={5} color={Colors.orange} />
                            <Paragraph content="different countries with us" fontSize={1.3} color={Colors.white} />
                        </div>
                    </div>
                    <div className="bottom">
                        <div>
                            <Paragraph content="digital account and cards" color={Colors.white} fontSize={1.3} />
                            <CustomImage src="/assets/credit_card_icon_2.png" width={12} />
                        </div>
                        <div>
                            <Paragraph content="investments and crypto" color={Colors.white} fontSize={1.3} />
                            <CustomImage src="/assets/crypto_portfolio.png" width={12} />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default About;
