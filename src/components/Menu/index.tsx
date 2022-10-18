import React from 'react';
import Colors from '../../enums/colors';
import CustomImage from '../CustomImage';
import Logo from '../Logo';
import Paragraph from '../Paragraph';

import './style.css';

type menuDataSet = {
    name: string;
    path: string;
    icon: string;
    position: string;
    color: Colors;
};

const menuData: menuDataSet[] = [
    {
        name: 'home',
        path: '/app/',
        icon: '/assets/home_icon.png',
        position: 'middle',
        color: Colors.purple
    },
    {
        name: 'investments',
        path: '/app/investments',
        icon: '/assets/chart_icon.png',
        position: 'middle',
        color: Colors.orange
    },
    {
        name: 'cards',
        path: '/app/cards',
        icon: '/assets/wallet_icon.png',
        position: 'middle',
        color: Colors.purple
    },
    {
        name: 'config',
        path: '/app/config',
        icon: '/assets/config_icon.png',
        position: 'bottom',
        color: Colors.purple
    },
    {
        name: 'logout',
        path: '/',
        icon: '/assets/logout_icon.png',
        position: 'bottom',
        color: Colors.purple
    }
];

const actualPage = window.location.pathname;

function Menu() {
    return (
        <div className="menu">
            <div id="logo-menu-wrapper">
                <Logo />
            </div>
            <div id="middle-menu-wrapper">
                {menuData.map((set) => {
                    if (set.position == 'middle') {
                        return (
                            <div className="menu-item" onClick={() => (window.location.pathname = set.path)}>
                                <CustomImage src={set.icon} width={2} />
                                {actualPage == set.path ? (
                                    <Paragraph content={set.name} color={set.color} fontSize={1.2} />
                                ) : (
                                    <Paragraph content={set.name} color={Colors.black} fontSize={1.2} />
                                )}
                            </div>
                        );
                    }
                })}
            </div>
            <div id="bottom-menu-wrapper">
                {menuData.map((set) => {
                    if (set.position == 'bottom') {
                        return (
                            <div className="menu-item" onClick={() => (window.location.pathname = set.path)}>
                                <CustomImage src={set.icon} width={2} />
                                {actualPage == set.path ? (
                                    <Paragraph content={set.name} color={Colors.purple} fontSize={1.2} />
                                ) : (
                                    <Paragraph content={set.name} color={Colors.black} fontSize={1.2} />
                                )}
                            </div>
                        );
                    }
                })}
            </div>
        </div>
    );
}

export default Menu;
