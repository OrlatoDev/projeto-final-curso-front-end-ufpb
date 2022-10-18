import React from 'react';
import Button from '../../../components/Button';
import Input from '../../../components/Input';
import Menu from '../../../components/Menu';
import Title from '../../../components/Title';
import Colors from '../../../enums/colors';

import './style.css';

function Config() {
    return (
        <main>
            <div className="app-config">
                <Menu />
                <div className="main">
                    <div id="register-form">
                        <Title color={Colors.white} content="modify your account" fontSize={1.75} />
                        <Input
                            id="name"
                            name="name"
                            label="complete name"
                            padding={1}
                            type="text"
                            width={20}
                            backgroundColor={Colors.black}
                            color={Colors.white}
                        />
                        <Input id="email" name="email" label="email" padding={1} type="email" width={20} backgroundColor={Colors.black} color={Colors.white} />
                        <div id="passwords">
                            <Input
                                id="password"
                                name="password"
                                label="password"
                                padding={1}
                                type="password"
                                width={8}
                                backgroundColor={Colors.black}
                                color={Colors.white}
                            />
                            <Input
                                id="confirm-password"
                                name="confirm-password"
                                label="confirm password"
                                padding={1}
                                type="password"
                                width={8}
                                backgroundColor={Colors.black}
                                color={Colors.white}
                            />
                        </div>
                        <Button content="save" backgroundColor={Colors.purple} color={Colors.white} fontSize={1} padding={1} path="/app/" />
                    </div>
                </div>
            </div>
        </main>
    );
}

export const AppConfig = Config;
