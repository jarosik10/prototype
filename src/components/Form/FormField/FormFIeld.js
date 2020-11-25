import React, { useState } from 'react';
import styled from 'styled-components';
import { useField } from 'formik';

import Input from '../../UI/Input/Input';
import Label from '../../UI/Label/Label';
import ErrorMessage from '../../UI/ErrorMessage/ErrorMessage';

const StyledFormField = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 35px;
`;

const FormField = ({ label, id, ...props }) => {
    const [isFocused, setIsFocused] = useState(false);
    const [field, meta] = useField(props);
    const errorText = meta.error && meta.touched ? meta.error : "";

    const handleOnFocus = (event) => {
        setIsFocused(true);
    }

    const handleOnBlur = (event) => {
        setIsFocused(false);
        field.onBlur(event);
    }

    return (
        <StyledFormField>
            <Label
                isActive={isFocused}
                isInputFilled={field.value.length > 0}
                htmlFor={id}>
                {label}
            </Label>
            <Input id={id} {...props} {...field} onBlur={(event) => handleOnBlur(event)} onFocus={handleOnFocus} />
            {!!errorText && <ErrorMessage error={errorText} />}
        </StyledFormField>);
}

export default FormField;