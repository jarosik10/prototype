import React from 'react';
import styled, { withTheme } from 'styled-components';
import { Home, ShoppingBag, PlusCircle, HelpCircle, User } from "react-feather";

import NavigationItems from '../NavigationItems/NavigationItems';
import NavigationItem from '../NavigationItems/NavigationItem/NavigationItem';
import NavigationIcon from '../NavigationItems/NavigationIcon/NavigationIcon';

const StyledWrapper = styled.nav`
    background-color: ${({ theme }) => theme.colors.white};
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    bottom: 0;
    width: 100vw;
    box-shadow: 0px -1px 6px 0px rgba(0, 0, 0, 0.2);
`;

const MobileNavigation = ({ theme, openLogin }) => {
    return (
        <StyledWrapper>
            <NavigationItems>
                <NavigationItem>
                    <NavigationIcon>
                        <Home color={theme.colors.darkGray} size={24} />
                    </NavigationIcon>
                    Home
                </NavigationItem>
                <NavigationItem>
                    <NavigationIcon>
                        <ShoppingBag color={theme.colors.darkGray} size={24} />
                    </NavigationIcon>
                    Produkty
                </NavigationItem>
                <NavigationItem>
                    <NavigationIcon>
                        <PlusCircle color={theme.colors.darkGray} size={24} />
                    </NavigationIcon>
                    Dodaj
                </NavigationItem>
                <NavigationItem>
                    <NavigationIcon>
                        <HelpCircle color={theme.colors.darkGray} size={24} />
                    </NavigationIcon>
                    FAQ
                </NavigationItem>
                <NavigationItem handleOnClick={openLogin}>
                    <NavigationIcon>
                        <User color={theme.colors.darkGray} size={24} />
                    </NavigationIcon>
                    Konto
                </NavigationItem>
            </NavigationItems>
        </StyledWrapper>
    );
}

export default withTheme(MobileNavigation);

