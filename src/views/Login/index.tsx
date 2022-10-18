import React from 'react';
import Box from '../../components/Box';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Title from '../../components/Title';
import Colors from '../../enums/colors';

import './style.css';

function Login() {
    return (
        <main>
            <div id="login-main">
                <div id="login-main-wrapper">
                    <Box>
                        <div id="login-form">
                            <Title color={Colors.black} content="login" fontSize={1.75} />
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
                            <Input
                                id="password"
                                name="password"
                                label="password"
                                padding={1}
                                type="password"
                                width={20}
                                secondaryLabel="forgot password?"
                                backgroundColor={Colors.white}
                                color={Colors.black}
                            />
                            <Button content="login" backgroundColor={Colors.purple} color={Colors.white} fontSize={1} padding={1} path="/app/" />
                        </div>
                    </Box>
                </div>
            </div>
        </main>
    );
}

export default Login;
