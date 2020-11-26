import React from 'react';
import styled from 'styled-components';
import { useField } from 'formik';

import Select from '../../UI/Select/Select';

const SelectField = ({ label, id, type, children, ...props }) => {
    const [field, meta] = useField(props);

    return (
        <Select id={id} {...props} {...field}>
            {children}
        </Select>
    );
}

export default SelectField;