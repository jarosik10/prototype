import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
    height: 44px;
    border: 1px solid ${({ theme }) => theme.colors.darkGray};
    border-radius: 22px;
    box-shadow: ${({isError}) => isError ? '0 0 3px 0px #E51A1A' : ''};
    padding: 0 32px;
    font-size: 18px;
    outline: none;
`;

const Input = (props) => {
    return <StyledInput {...props} />
}

export default Input;