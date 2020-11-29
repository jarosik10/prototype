import React, { useState, useRef } from 'react';
import styled, { withTheme } from 'styled-components';
import { Eye, EyeOff } from "react-feather";

import Input from '../Input';

const StyledButton = styled.button`
    position: absolute;
    border: none;
    background: none;
    right: 32px;
    padding: 0;
    cursor: pointer;

    svg {
        display: block;
    }
`;

const PasswordInput = ({ type, theme, ...props }) => {
    const [showPassword, setShowPassword] = useState(false);
    const inputRef = useRef(null);

    const toggleShowPassword = () => {
        setShowPassword((prevState) => !prevState);
    }

    const focusEndOfTheInput = () => {
        const input = inputRef.current;
        setTimeout(() => {
            input.focus();
            input.setSelectionRange(input.value.length, input.value.length);
        }, 0);
    }

    const handleOnClick = () => {
        toggleShowPassword();
        focusEndOfTheInput();
    }

    return (
        <>
            <Input ref={inputRef} type={showPassword ? 'text' : 'password'} {...props} />
            <StyledButton type='button' onClick={handleOnClick}>
                {showPassword ? <EyeOff color={theme.colors.darkGray} size={24} /> : <Eye color={theme.colors.darkGray} size={24} />}
            </StyledButton>
        </>
    );

}

export default withTheme(PasswordInput);