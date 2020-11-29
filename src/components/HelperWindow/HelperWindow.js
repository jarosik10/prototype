import React from 'react';
import styled, { withTheme } from 'styled-components';
import { HelpCircle } from 'react-feather';

const StyledWrapper = styled.div`
    position: relative;
`;

const StyledButton = styled.button`
    display: block;
    border: none;
    background: none;

    svg {
        display: block;
    }
`;

// const WindowWrapper = styled.div`
//     z-index: ${({ theme }) => theme.zindex.level9};
//     position: absolute;
//     top: 0;
//     left: 100%;

// `;

const HelperContent = styled.div`
    z-index: ${({ theme }) => theme.zindex.level9};
    position: absolute;
    background-color: ${({ theme }) => theme.colors.white};
    border: 1px solid ${({ theme }) => theme.colors.lightGray};
    border-radius: 12px;
    box-shadow: 1px 1px 3px 0px rgba(0, 0, 0, 0.2);
    padding: 8px;   
    bottom: 120%;
    left: 0;

    ::before {
        content: '';
        position: absolute;
        right: 100%;
        top: 10px;
        width: 0; 
        height: 0; 
        border-top: 10px solid transparent;
        border-bottom: 10px solid transparent; 
        border-right:10px solid ${({ theme }) => theme.colors.lightGray};; 
    }
`;


const HelperWindow = ({ theme, children }) => {
    return (
        <StyledWrapper>
            <StyledButton type='button'>
                <HelpCircle color={theme.colors.darkGray} size={24} />
            </StyledButton>
            {/* <WindowWrapper> */}
            {/* <Arror /> */}
            <HelperContent>
                {children}
            </HelperContent>
            {/* </WindowWrapper> */}
        </StyledWrapper>
    );
}

export default withTheme(HelperWindow);
