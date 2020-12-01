import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    background-color: ${({ theme }) => theme.colors.white};
    width: 100%;
    overflow-y: auto;

    ${({ theme }) => theme.media.tablet} {
        height: auto;
        width: auto;
        top: 50%;
        bottom: unset;
        left: 50%;
        transform: translateY(-50%) translateX(-50%);
        margin: auto;
        box-shadow: 0 0 6px 1px rgba(0, 0, 0, .3);
        border-radius: 35px;
        overflow-y: initial;
    }
`;

const StyledContentContainer = styled.div`
    text-align: center;
    padding: 70px 16px 50px;
    margin: 0 auto;
    max-width: 550px;
  
    ${({ theme }) => theme.media.tablet} {
        padding: 70px 50px;
        min-width: 550px;
    }
`;

const Modal = ({ children }) => {
    return (
        <StyledWrapper>
            <StyledContentContainer>
                {children}
            </StyledContentContainer>
        </StyledWrapper>
    );
}

export default Modal;