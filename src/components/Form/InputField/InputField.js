import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { useField } from 'formik';

import Input from '../../UI/Input/Input';
import Label from '../../UI/Label/Label';
import Select from '../../UI/Select/Select';
import ErrorMessage from '../../UI/ErrorMessage/ErrorMessage';

const StyledFormField = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 35px;
    flex: 0 0 auto;
`;

const FormField = ({ label, type, id, ...props }) => {
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

    return (
        <StyledFormField>
            <Label
                isActive={isFocused}
                isInputFilled={field.value.length > 0}
                htmlFor={id}
                >
                {label}
            </Label>
            <Input type={type} id={id} {...props} {...field} isError={isError} onBlur={(event) => handleOnBlur(event)} onFocus={handleOnFocus} />
            {isError && <ErrorMessage isAbsolute error={errorText} />}
        </StyledFormField>);
}

export default FormField;