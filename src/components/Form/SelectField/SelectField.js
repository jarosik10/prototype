import React from 'react';
import { useField } from 'formik';

import Select from '../../UI/Select/Select';

const SelectField = ({ label, id, type, children, ...props }) => {
    const [field] = useField(props);

    return (
        <Select id={id} {...props} {...field}>
            {children}
        </Select>
    );
}

export default SelectField;