import React from 'react';
import CustomImage from '../../components/CustomImage';
import Navbar from '../../components/Navbar';
import Paragraph from '../../components/Paragraph';
import Colors from '../../enums/colors';

import './style.css';

function Contact() {
    return (
        <main>
            <Navbar />
            <div id="contact-main">
                <div id="contact-main-wrapper">
                    <div className="left">
                        <Paragraph color={Colors.white} content="email:" fontSize={2.5} />
                        <Paragraph color={Colors.white} content="ubank@gmail.com" fontSize={2.5} />
                    </div>
                    <div className="right">
                        <CustomImage src="/assets/contact_icon.png" width={30} />
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Contact;
