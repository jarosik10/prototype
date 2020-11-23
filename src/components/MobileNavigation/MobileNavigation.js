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

const StyledNavigationItems = styled(NavigationItems)`
    flex-grow: 1;
    margin: 8px;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 12px;
    max-width: 500px;
`;

const StyledNavigationItem = styled(NavigationItem)`
    :hover {
         border-left: 1px solid ${({ theme }) => theme.colors.lightGray};
         border-right: 1px solid ${({ theme }) => theme.colors.lightGray};
    }
`;


const MobileNavigation = ({ theme, openLogin }) => {
    return (
        <StyledWrapper>
            <StyledNavigationItems>
                <StyledNavigationItem>
                    <NavigationIcon>
                        <Home color={theme.colors.darkGray} size={24} />
                    </NavigationIcon>
                    Home
                </StyledNavigationItem>
                <StyledNavigationItem>
                    <NavigationIcon>
                        <ShoppingBag color={theme.colors.darkGray} size={24} />
                    </NavigationIcon>
                    Produkty
                </StyledNavigationItem>
                <StyledNavigationItem>
                    <NavigationIcon>
                        <PlusCircle color={theme.colors.darkGray} size={24} />
                    </NavigationIcon>
                    Dodaj
                </StyledNavigationItem>
                <StyledNavigationItem>
                    <NavigationIcon>
                        <HelpCircle color={theme.colors.darkGray} size={24} />
                    </NavigationIcon>
                    FAQ
                </StyledNavigationItem>
                <StyledNavigationItem handleOnClick={openLogin}>
                    <NavigationIcon>
                        <User color={theme.colors.darkGray} size={24} />
                    </NavigationIcon>
                    Konto
                </StyledNavigationItem>
            </StyledNavigationItems>
        </StyledWrapper>
    );
}

export default withTheme(MobileNavigation);

