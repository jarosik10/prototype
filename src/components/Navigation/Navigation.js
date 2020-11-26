import React from 'react';
import styled, { withTheme } from 'styled-components';
import { Home } from "react-feather";

import NavigationItem from '../NavigationItems/NavigationItem/NavigationItem';
import NavigationItems from '../NavigationItems/NavigationItems';
import NavigationIcon from '../NavigationItems/NavigationIcon/NavigationIcon';

const StyledWrapper = styled.nav`
        margin-left: auto;
`;

const StyledNavigationItems = styled(NavigationItems)`
    display: flex;
    align-items: center;
`;

const Navigation = ({ theme, openLogin, openRegistration }) => {
    return (
        <StyledWrapper>
            <StyledNavigationItems>
                <NavigationItem>
                    <NavigationIcon>
                        <Home color={theme.colors.darkGray} size={24}/>
                    </NavigationIcon>
                </NavigationItem>
                <NavigationItem>
                    Produkty
                </NavigationItem>
                <NavigationItem>
                    Dodaj produkt
                </NavigationItem>
                <NavigationItem>
                    FAQ
                </NavigationItem>
                <NavigationItem handleOnClick={openLogin}>
                    Zaloguj się
                </NavigationItem>
                <NavigationItem handleOnClick={openRegistration}>
                    Załóż kotno
                </NavigationItem>
            </StyledNavigationItems>
        </StyledWrapper>
    );
}

export default withTheme(Navigation);