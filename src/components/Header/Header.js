import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
    background-color: ${({ theme }) => theme.colors.white };
    padding: 8px 16px;
`;

const H1 = styled.header`
    color: ${({ theme }) => theme.colors.blue };
    font-size: 36px;
    font-weight: bold;
`;

const Header = () => {
    return (
        <StyledHeader>
            <H1>Prototype</H1>
        </StyledHeader>
    );
}

export default Header;