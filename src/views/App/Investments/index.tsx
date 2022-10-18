import React from 'react';
import GenericCard from '../../../components/GenericCard';
import Input from '../../../components/Input';
import InvestmentCard from '../../../components/InvestmentCard';
import Menu from '../../../components/Menu';
import Colors from '../../../enums/colors';

import './style.css';

function Investments() {
    return (
        <main>
            <div className="app-investments">
                <Menu />
                <div className="main">
                    <div className="left">
                        <Input
                            backgroundColor={Colors.white}
                            color={Colors.black}
                            id="applicable-input"
                            label="search for actions and applicable"
                            name="applicable-input"
                            padding={1}
                            type="text"
                            width={20}
                        />
                        <InvestmentCard nameTitle="BTC" name="bitcoin" color="#F2A900" priceNow={19734.5} value={2} />
                        <InvestmentCard nameTitle="ETH" name="ethereum" color="#37367B" priceNow={19734.5} value={-3} />
                    </div>
                    <div className="right">
                        <GenericCard
                            text="income from investments"
                            value={421.24}
                            accentColor={Colors.orange}
                            backgroundColor={Colors.gray}
                            color={Colors.white}
                        />
                        <GenericCard text="from BTC" value={421.24} accentColor="#F2A900" backgroundColor={Colors.gray} color={Colors.white} />
                        <GenericCard text="from ETH" value={421.24} accentColor="#37367B" backgroundColor={Colors.gray} color={Colors.white} />
                        <GenericCard text="total invested" value={421.24} accentColor={Colors.purple} backgroundColor={Colors.white} color={Colors.black} />
                        <GenericCard text="total returned" value={421.24} accentColor={Colors.purple} backgroundColor={Colors.white} color={Colors.black} />
                        <GenericCard text="total" value={421.24} accentColor={Colors.purple} backgroundColor={Colors.white} color={Colors.black} />
                    </div>
                </div>
            </div>
        </main>
    );
}

export const AppInvestments = Investments;
