import React, { useState } from 'react';
import styled from 'styled-components';
import { useField } from 'formik';

import Input from '../../UI/Input/Input';
import PasswordInput from '../../UI/Input/PasswordInput/PasswordInput';
import Label from '../../UI/Label/Label';
import ErrorMessage from '../../UI/ErrorMessage/ErrorMessage';

const StyledFormField = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 35px;
    flex: 0 0 auto;
`;

const FormField = ({ label, type, id, theme, setShowPasswordRequirements, ...props }) => {
    const [isFocused, setIsFocused] = useState(false);
    const [field, meta] = useField(props);
    const errorText = meta.error && meta.touched ? meta.error : "";
    const isError = !!errorText;

    const handleOnFocus = (event) => {
        setIsFocused(true);
    }

    const handleOnBlur = (event) => {
        setIsFocused(false);
        field.onBlur(event);
    }

    let input = type === 'password' ?
        <PasswordInput type={type} id={id} {...props} {...field} isError={isError}
            onBlur={(event) => {
                handleOnBlur(event);
                id === 'password' && setShowPasswordRequirements(false);
            }}
            onFocus={() => {
                handleOnFocus();
                id === 'password' && setShowPasswordRequirements(true);
            }} />
        : <Input type={type} id={id} {...props} {...field} isError={isError}
            onBlur={(event) => handleOnBlur(event)}
            onFocus={handleOnFocus} />
    return (
        <StyledFormField>
            <Label
                isActive={isFocused}
                isInputFilled={field.value.length > 0}
                htmlFor={id}
            >
                {label}
            </Label>
            {input}
            { isError && <ErrorMessage isAbsolute error={errorText} />}
        </StyledFormField>);
};

export default FormField;