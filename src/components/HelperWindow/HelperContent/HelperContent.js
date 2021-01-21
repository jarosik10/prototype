import React, { useEffect } from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
    display: block;
    z-index: ${({ theme }) => theme.zindex.level9};
    position: absolute;
    background-color: ${({ theme }) => theme.colors.white};
    border: 1px solid ${({ theme }) => theme.colors.lightGray};
    border-radius: 12px;
    box-shadow: 1px 1px 3px 0px rgba(0, 0, 0, 0.2);
    padding: 0 8px;   
    bottom: 120%;
    width: 10em;
    right: 16px;
    border-bottom-right-radius: 0;

    ${({ theme }) => theme.media.smallTablet} {
        width: 12em;
        left: 16px;
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 12px;
    }
`
const HelperContent = ({ handleMouseUpWindow, ...props }) => {
    useEffect(() => {
        window.addEventListener('mouseup', handleMouseUpWindow);
        return () => {
            window.removeEventListener('mouseup', handleMouseUpWindow)
        };
    }, [handleMouseUpWindow]);

    return (
        <StyledWrapper {...props} />
    );
}

export default HelperContent;