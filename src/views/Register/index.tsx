import React from 'react';
import Box from '../../components/Box';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Title from '../../components/Title';
import Colors from '../../enums/colors';

import './style.css';

function Register() {
    return (
        <main>
            <div id="register-main">
                <div id="register-main-wrapper">
                    <Box>
                        <div id="register-form">
                            <Title color={Colors.black} content="register" fontSize={1.75} />
                            <Input
                                id="name"
                                name="name"
                                label="complete name"
                                padding={1}
                                type="text"
                                width={20}
                                backgroundColor={Colors.white}
                                color={Colors.black}
                            />
                            <Input
                                id="email"
                                name="email"
                                label="email"
                                padding={1}
                                type="email"
                                width={20}
                                backgroundColor={Colors.white}
                                color={Colors.black}
                            />
                            <div id="passwords">
                                <Input
                                    id="password"
                                    name="password"
                                    label="password"
                                    padding={1}
                                    type="password"
                                    width={8}
                                    backgroundColor={Colors.white}
                                    color={Colors.black}
                                />
                                <Input
                                    id="confirm-password"
                                    name="confirm-password"
                                    label="confirm password"
                                    padding={1}
                                    type="password"
                                    width={8}
                                    backgroundColor={Colors.white}
                                    color={Colors.black}
                                />
                            </div>
                            <Button content="register" backgroundColor={Colors.purple} color={Colors.white} fontSize={1} padding={1} path="/app/" />
                        </div>
                    </Box>
                </div>
            </div>
        </main>
    );
}

export default Register;
