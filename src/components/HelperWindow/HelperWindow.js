import React, { useState } from 'react';
import styled, { withTheme } from 'styled-components';
import { HelpCircle } from 'react-feather';

const StyledWrapper = styled.div`
    position: relative;
`;

const StyledButton = styled.button`
    display: block;
    border: none;
    background: none;
    cursor: pointer;

    svg {
        display: block;
    }
`;

const HelperContent = styled.div`
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

    ${({ theme }) => theme.media.tablet} {
        left: 24px;
        width: 17em;
        border-bottom-left-radius: 0;
    }
`;

const HelperWindow = ({ theme, children }) => {
    const [showWindow, setShowWindow] = useState(false);

    let closeWindowTimeout;

    const setOpenWindowTimeout = () => {
        setTimeout(() => setShowWindow(true), 400);
    }

    const setCloseWindowTimeout = () => {
        closeWindowTimeout = setTimeout(() => setShowWindow(false), 200);
    }

    const clearCloseWindowTimeout = () => {
        clearTimeout(closeWindowTimeout);
    }

    const handleOnEnterHelperButton = () => {
        if (showWindow) {
            clearCloseWindowTimeout();
        } else {
            setOpenWindowTimeout();
        }
    }

    const handleToggleWindow = () => {
        setShowWindow(prevState => !prevState);
    }

    return (
        <>
            <StyledWrapper>
                <StyledButton
                    onMouseEnter={handleOnEnterHelperButton}
                    onMouseLeave={setCloseWindowTimeout}
                    onClick={handleToggleWindow}
                    type='button'>
                    <HelpCircle color={showWindow ? theme.colors.black : theme.colors.darkGray} size={24} />
                </StyledButton>
                {showWindow &&
                    <HelperContent
                        onMouseEnter={clearCloseWindowTimeout}
                        onMouseLeave={setCloseWindowTimeout}>
                        {children}
                    </HelperContent>}
            </StyledWrapper>
        </>
    );
}

export default withTheme(HelperWindow);
