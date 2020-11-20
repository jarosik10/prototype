import React, { useState } from 'react';
import styled from 'styled-components';

import Input from '../../UI/Input/Input';
import Label from '../../UI/Label/Label';

const StyledFormField = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 35px;
`;

const FormField = ({ inputType, inputId, labelText, formik }) => {
    const [isFocused, setIsFocused] = useState(false);

    const handleOnFocus = (event) => {
        setIsFocused(true);
    }

    const handleOnBlur = (event) => {
        setIsFocused(false);
        formik.handleBlur(event);
    }

    return (
        <StyledFormField>
            <Label
                isActive={isFocused}
                isInputFilled={formik.values[inputId].length > 0}
                htmlFor={inputId}>{labelText}
            </Label>
            <Input
                // isActive={isFocused}
                id={inputId}
                type={inputType}
                onFocus={handleOnFocus}
                onBlur={(event) => handleOnBlur(event)}
                onChange={formik.handleChange}
                value={formik.values.inputId} />
        </StyledFormField>);
}

export default FormField;