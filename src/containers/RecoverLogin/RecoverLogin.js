import React from 'react';
import styled from 'styled-components';
import { Formik } from 'formik';
import * as yup from 'yup';

import ReturnButton from '../../components/UI/CloseButton/CloseButton';
import Form from '../../components/Form/Form';
import InputField from '../../components/Form/InputField/InputField';
import Button from '../../components/UI/Button/Button';
import FormLink from '../../components/Form/FormLink/FormLink';
import Paragraph from '../../components/UI/Paragraph/Paragraph';

const StyledFormParagraph = styled(Paragraph)`
    margin: 0 0 70px;
`;

const RecoverPassword = ({ closeRecoverLogin, openLogin }) => {
    const validationSchema = yup.object({
        email: yup.string().required('Pole obowiązkowe!'),
    });

    return (
        <>
            <ReturnButton handleOnClick={closeRecoverLogin} />
            <StyledFormParagraph isBig isCentered isBold>
                Podaj email, który był użyty podczas zakładania Twojego konta. Wyślemy na niego zapomniany login.
            </StyledFormParagraph>
            <Formik
                initialValues={{ email: '' }} onSubmit={(values, { setSubmitting }) => {
                    console.log('Submitting');
                    setSubmitting(true);
                    // Async call
                    setTimeout(() => {
                        console.log(values);
                        setSubmitting(false);
                    }, 500);
                }}
                validationSchema={validationSchema}>
                {({ handleSubmit, errors, values, isSubmitting }) => (
                    <Form onSubmit={handleSubmit}>
                        <InputField type='email' name='email' id='email' label='Email' />
                        <Button type='submit' disabled={isSubmitting}>Wyślij</Button>
                        {/* <pre>{JSON.stringify(values, null, 2)}</pre>
                        <pre>{JSON.stringify(errors, null, 2)}</pre> */}
                    </Form>
                )}
            </Formik>
            <FormLink isBold href="#" type='button' isCenterd onClick={openLogin}>Powrót do logowania</FormLink>
        </>
    );
}

export default RecoverPassword;