import React from 'react';
import styled from 'styled-components';

const StyledBackdrop = styled.div`
    display: none;
    ${({ theme }) => theme.media.tablet} {
        display: block;
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background-color: rgba(0, 0, 0, .35);
    }
`;

const Backdrop = () => {
    return <StyledBackdrop />
}

export default Backdrop;