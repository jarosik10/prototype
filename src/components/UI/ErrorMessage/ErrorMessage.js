import React from 'react';
import styled from 'styled-components';

const StyledErrorMessage = styled.div`
    position: ${({isAbsolute}) => isAbsolute ? 'absolute' : 'static'};
    margin-top: 3px;
    font-size: ${({isBig}) => isBig ? '16px' : '12px'};
    font-weight: bold;
    color: ${({theme}) => theme.colors.red};
    text-align: ${({isCentered}) => isCentered ? 'center' : 'left'};
    ${({isAbsolute, isCentered}) => isAbsolute && `
        top: 100%;
        left: ${isCentered ? '50%' : '33px'};
        transform: ${isCentered ? 'translateX(-50%)' : ''};
    `};
`;

const ErrorMessage = ({error, isAbsolute, isBig, isCentered}) => {
    return (
        <StyledErrorMessage isAbsolute={isAbsolute} isBig={isBig} isCentered={isCentered}>{error}</StyledErrorMessage>
    );
}

export default ErrorMessage;