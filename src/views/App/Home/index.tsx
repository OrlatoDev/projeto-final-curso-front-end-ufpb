import React, { useState } from 'react';

import './style.css';

import CustomImage from '../../../components/CustomImage';
import GenericCard from '../../../components/GenericCard';
import Menu from '../../../components/Menu';
import Paragraph from '../../../components/Paragraph';
import Title from '../../../components/Title';
import Colors from '../../../enums/colors';
import ExtractPopup from '../../../components/TransactionsPopup';

const receipts = 1643.85;
const outgoings = 823.62;
const balance = Number((receipts - outgoings).toFixed(2));

const greenBarPercentage = (receipts * 100) / (receipts + outgoings);
const redBarPercentage = (outgoings * 100) / (receipts + outgoings);

function Home() {
    const [popup, setPopup] = useState(false);

    return (
        <main>
            <div className="app-main">
                <Menu />
                <div className="main">
                    <div className="left">
                        <Title content="welcome back, " color={Colors.white} fontSize={2} highlightContent="Samuel" highlightColor={Colors.purple} />
                        <div className="resume">
                            <div className="top">
                                <Title content="your month" color={Colors.black} fontSize={1.3} />
                            </div>
                            <div className="middle">
                                <div className="resume-middle-left">
                                    <div className="set">
                                        <div className="set-left">
                                            <CustomImage src="/assets/plus_icon.png" width={1} />
                                        </div>
                                        <div className="set-right">
                                            <Paragraph color={Colors.black} content="receipts" fontSize={1} />
                                            <Paragraph color={Colors.green} content={'$' + String(receipts)} fontSize={1.3} />
                                        </div>
                                    </div>
                                    <div className="set">
                                        <div className="set-left">
                                            <CustomImage src="/assets/minus_icon.png" width={1} />
                                        </div>
                                        <div className="set-right">
                                            <Paragraph color={Colors.black} content="outgoings" fontSize={1} />
                                            <Paragraph color={Colors.orange} content={'$' + String(outgoings)} fontSize={1.3} />
                                        </div>
                                    </div>
                                    <div className="set">
                                        <div className="set-left">
                                            <CustomImage src="/assets/menu_icon.png" width={1} />
                                        </div>
                                        <div className="set-right">
                                            <Paragraph color={Colors.black} content="balance" fontSize={1} />
                                            <Paragraph color={balance >= 0 ? Colors.green : Colors.orange} content={'$' + String(balance)} fontSize={1.3} />
                                        </div>
                                    </div>
                                </div>
                                <div className="resume-middle-right">
                                    <div id="green-bar" style={{ height: String(greenBarPercentage + '%') }}></div>
                                    <div id="red-bar" style={{ height: String(redBarPercentage + '%') }}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <GenericCard text="in your account" value={2846.97} color={Colors.black} accentColor={Colors.purple} backgroundColor={Colors.white} />
                        <GenericCard
                            text="income from investments"
                            value={421.24}
                            color={Colors.white}
                            accentColor={Colors.orange}
                            backgroundColor={Colors.gray}
                        />
                        <div className="panel">
                            <Title content="actions" color={Colors.white} fontSize={1.5} />
                            <div className="col">
                                <div className="action" onClick={() => (popup ? setPopup(false) : setPopup(true))}>
                                    transactions
                                </div>
                                <div className="action">transfers</div>
                                <div className="action">bills</div>
                            </div>
                            <div className="col">
                                <div className="action">loans</div>
                                <div className="action">help</div>
                            </div>
                            <Title content="from your country" color={Colors.white} fontSize={1.5} />
                            <div className="col">
                                <div className="action">PIX</div>
                                <div className="action">TED</div>
                                <div className="action">DOC</div>
                            </div>
                        </div>
                    </div>
                </div>
                {popup ? <ExtractPopup /> : <></>}
            </div>
        </main>
    );
}

export const AppHome = Home;
