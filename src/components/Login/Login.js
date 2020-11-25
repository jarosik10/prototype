import React, { useState } from 'react';
import styled from 'styled-components';
import { Formik, useFormik } from 'formik';
import * as yup from 'yup';

import H2 from '../UI/H2/H2';
import Paragraph from '../UI/Paragraph/Paragraph';
import Form from '../Form/Form';
import FormField from '../Form/FormField/FormField';
import ErrorMessage from '../UI/ErrorMessage/ErrorMessage';
import Button from '../UI/Button/Button';
import ReturnButton from '../UI/CloseButton/CloseButton';
import FormLink from '../Form/FormLink/FormLink';
import Separator from '../UI/Separator/Separator';


const StyledFormParagraph = styled(Paragraph)`
    margin: 44px 0 16px;
`;

const GroupedFormLinks = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 25px;

    ${FormLink} {
        margin-top: 0;
    }
`;

const ErrorWrapper = styled.div`
    position: relative;
    height: 1px;
    margin-top: -1px;
`;

const Login = ({ closeLogin }) => {
    const [formError, setFormError] = useState('');

    const validationSchema = yup.object({
        login: yup.string().required('Pole obowiązkowe!'),
        password: yup.string().required('Pole obowiązkowe!'),
    });

    return (
        <>
            <ReturnButton handleOnClick={closeLogin} />
            <H2>Zaloguj się</H2>
            <Formik
                initialValues={{ login: '', password: '' }} onSubmit={(values, { setSubmitting }) => {
                    setSubmitting(true);
                    // Async call
                    setTimeout(() => {
                        console.log(values);
                        const error = 'Wpisałeś niepoprawny login i/lub hasło!';
                        setFormError(error)
                        setSubmitting(false);
                    }, 500);
                }}
                validationSchema={validationSchema}>
                {({ handleSubmit, errors, values, isSubmitting }) => (
                    <Form onSubmit={handleSubmit}>
                        <FormField type='text' name='login' id='login' label='Login' />
                        <FormField type='password' name='password' id='password' label='Hasło' />
                        {formError &&
                            <ErrorWrapper>
                                <ErrorMessage error={formError} isBig isCentered />
                            </ErrorWrapper>
                            }
                        <StyledFormParagraph isSmall isCentered>Kontynuując akceptujesz nasz Regulamin oraz Politykę Prywatności</StyledFormParagraph>
                        <Button type='submit' disabled={isSubmitting}>Zaloguj się</Button>
                        {/* <pre>{JSON.stringify(values, null, 2)}</pre>
                        <pre>{JSON.stringify(errors, null, 2)}</pre> */}
                    </Form>
                )}
            </Formik>
            <FormLink isBold href="#">Nie masz konta? Zarejestruj się</FormLink>
            <GroupedFormLinks>
                <FormLink href="#">Nie pamiętam hasła</FormLink>
                <Separator />
                <FormLink href="#">Nie pamiętam loginu</FormLink>
            </GroupedFormLinks>
        </>
    );
}

export default Login;