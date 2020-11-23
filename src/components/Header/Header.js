import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
    background-color: ${({ theme }) => theme.colors.white };
    padding: 8px 16px;

    /* ${({theme}) => theme.media.smallTablet} {
        padding: 16px 24px;
    } */

    ${({theme}) => theme.media.tablet} {
        padding: 16px 24px;
        display: flex;
        align-items: center;
    }

    ${({theme}) => theme.media.smallDesktop} {
        padding: 16px 32px;
    }

    ${({theme}) => theme.media.desktop} {
        padding: 24px 64px;
        max-width: 1640px;
        margin: 0 auto;
    }
`;

const Header = ({children}) => {
    return (
        <StyledHeader>
            {children}
        </StyledHeader>
    );
}

export default Header;