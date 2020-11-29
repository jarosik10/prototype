import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    /* display: flex;
    flex-direction: column; */
    background-color: ${({ theme }) => theme.colors.white};
    width: 100%;
    /* padding: 70px 16px 50px; */
    overflow-y: auto;

    ${({ theme }) => theme.media.tablet} {
        height: auto;
        width: auto;
        top: 50%;
        bottom: unset;
        left: 50%;
        transform: translateY(-50%) translateX(-50%);
        margin: auto;
        /* padding: 70px 50px; */
        box-shadow: 0 0 6px 1px rgba(0, 0, 0, .3);
        border-radius: 5%;
        overflow-y: initial;
    }
`;

const Modal = ({ children }) => {
    return (
        <StyledWrapper>
            {children}
        </StyledWrapper>
    );
}

export default Modal;