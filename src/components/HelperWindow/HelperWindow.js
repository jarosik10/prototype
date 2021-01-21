import React, { useState, useRef, useCallback } from 'react';
import styled, { withTheme } from 'styled-components';
import { HelpCircle } from 'react-feather';
import HelperContent from './HelperContent/HelperContent';

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

const HelperWindow = ({ theme, children }) => {
    const [showWindow, setShowWindow] = useState(false);
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);
    const [isSelecting, setIsSelecting] = useState(false);
    const buttonRef = useRef(null);

    let openWindowTimeout;
    let closeWindowTimeout;

    const setOpenWindowTimeout = () => {
        openWindowTimeout = setTimeout(() => {
            setShowWindow(true);
            setIsButtonDisabled(true);
            setTimeout(() => {
                setIsButtonDisabled(false);
            }, 200)
        }, 200);
    }

    const setCloseWindowTimeout = () => {
        if (!showWindow) {
            clearTimeout(openWindowTimeout);
        } else {
            closeWindowTimeout = setTimeout(() => setShowWindow(false), 200);
        }
    }

    const handleOnEnterHelperButton = () => {
        if (showWindow) {
            clearTimeout(closeWindowTimeout);
        } else {
            setOpenWindowTimeout();
        }
    }

    const handleOnLeaveHelperContent = () => {
        if (!isSelecting) {
            setCloseWindowTimeout();
        }
    }

    const handleToggleWindow = () => {
        !isButtonDisabled && setShowWindow(prevState => !prevState);
    }

    const handleMouseDownHelperContent = () => {
        setIsSelecting(true);
    }

    const handleMouseUpHelperContent = (event) => {
        event.stopPropagation();
        setIsSelecting(false);
    }

    const handleMouseUpWindow = useCallback(() => {
        if (isSelecting) {
            setCloseWindowTimeout();
            setIsSelecting(false);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isSelecting])

    return (
        <>
            <StyledWrapper>
                <StyledButton
                    onMouseEnter={handleOnEnterHelperButton}
                    onMouseLeave={setCloseWindowTimeout}
                    onClick={handleToggleWindow}
                    type='button'
                    ref={buttonRef}>
                    <HelpCircle color={showWindow ? theme.colors.black : theme.colors.darkGray} size={24} />
                </StyledButton>
                {showWindow &&
                    <HelperContent
                        onMouseEnter={() => clearTimeout(closeWindowTimeout)}
                        onMouseLeave={handleOnLeaveHelperContent}
                        onMouseDown={handleMouseDownHelperContent}
                        onMouseUp={handleMouseUpHelperContent}
                        handleMouseUpWindow={handleMouseUpWindow}
                    >
                        {children}
                    </HelperContent>}
            </StyledWrapper>
        </>
    );
}

export default withTheme(HelperWindow);
