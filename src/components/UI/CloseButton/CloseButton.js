import React, { useContext } from 'react';
import styled, { withTheme } from 'styled-components';
import { Context } from '../../../Store';
import { ChevronLeft, X } from "react-feather";

const StyledReturnButton = styled.button`
    position: absolute;
    right: 0;
    top: 0;
    margin: 8px 16px;
    background: none;
    border: none;
    padding: 0;
    
    svg {
        display: block;
    }
`;

const ReturnButton = ({ handleOnClick, theme }) => {
    const isMobile = useContext(Context);
    return (
        <StyledReturnButton onClick={handleOnClick}>
            {isMobile ? <ChevronLeft color={theme.colors.darkGray} size={36} /> : <X color={theme.colors.darkGray} size={36} />}
        </StyledReturnButton>
    );
}

export default withTheme(ReturnButton)

