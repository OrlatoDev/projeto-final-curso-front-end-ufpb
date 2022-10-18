import React from 'react';
import Button from '../../../components/Button';
import PhysicalCard from '../../../components/Card/Physical';
import VirtualCard from '../../../components/Card/Virtual';
import Menu from '../../../components/Menu';
import Title from '../../../components/Title';
import Colors from '../../../enums/colors';

import './style.css';

function Cards() {
    return (
        <main>
            <div className="app-cards">
                <Menu />
                <div className="main">
                    <div className="physical-cards">
                        <Title color={Colors.white} content="physical cards" fontSize={1} />
                        <PhysicalCard />
                        <div className="buttons">
                            <Button backgroundColor={Colors.white} color={Colors.black} content="block" fontSize={0.9} padding={1} path={''} />
                            <Button backgroundColor={Colors.white} color={Colors.black} content="password" fontSize={0.9} padding={1} path={''} />
                            <Button backgroundColor={Colors.white} color={Colors.black} content="second way" fontSize={0.9} padding={1} path={''} />
                        </div>
                    </div>
                    <div className="virtual-cards">
                        <Title color={Colors.white} content="virtual cards" fontSize={1} />
                        <VirtualCard />
                        <div className="buttons">
                            <Button backgroundColor={Colors.white} color={Colors.black} content="block" fontSize={0.9} padding={1} path={''} />
                            <Button backgroundColor={Colors.white} color={Colors.black} content="delete" fontSize={0.9} padding={1} path={''} />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export const AppCards = Cards;
