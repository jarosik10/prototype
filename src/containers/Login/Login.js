import React, { useState } from 'react';
import styled from 'styled-components';
import { Formik } from 'formik';
import * as yup from 'yup';

import H2 from '../../components/UI/H2/H2';
import Paragraph from '../../components/UI/Paragraph/Paragraph';
import Form from '../../components/Form/Form';
import InputField from '../../components/Form/InputField/InputField';
import ErrorMessage from '../../components/UI/ErrorMessage/ErrorMessage';
import Button from '../../components/UI/Button/Button';
import ReturnButton from '../../components/UI/CloseButton/CloseButton';
import FormLink from '../../components/Form/FormLink/FormLink';
import Separator from '../../components/UI/Separator/Separator';

// const StyledWrapper = styled.div`
//     text-align: center;
//     padding: 70px 16px 50px;
//     ${({ theme }) => theme.media.tablet} {
//         padding: 70px 50px;
//     }
// `;

const StyledFormParagraph = styled(Paragraph)`
    margin: 15px 0 0;
`;

const GroupedFormLinks = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 25px;

    ${FormLink} {
        margin: 0;
    }
`;

const Login = ({ closeLogin, openRegistration, openRecoverPassword }) => {
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
                    console.log('Submitting');
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
                        <InputField type='text' name='login' id='login' label='Login' />
                        <InputField type='password' name='password' id='password' label='Hasło' />
                        {formError && <ErrorMessage error={formError} isBig isCentered />}
                        <StyledFormParagraph isSmall isCentered>Kontynuując akceptujesz nasz Regulamin oraz Politykę Prywatności</StyledFormParagraph>
                        <Button type='submit' disabled={isSubmitting}>Zaloguj się</Button>
                        {/* <pre>{JSON.stringify(values, null, 2)}</pre>
                        <pre>{JSON.stringify(errors, null, 2)}</pre> */}
                    </Form>
                )}
            </Formik>
            <FormLink isBold href="#" type='button' isCenterd onClick={openRegistration}>Nie masz konta? Zarejestruj się</FormLink>
            <GroupedFormLinks>
                <FormLink href="#" type='button' onClick={openRecoverPassword}>Nie pamiętam hasła</FormLink>
                <Separator />
                <FormLink href="#">Nie pamiętam loginu</FormLink>
            </GroupedFormLinks>
        </>
    );
}

export default Login;