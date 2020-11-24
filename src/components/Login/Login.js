import React from 'react';
import styled from 'styled-components';
import { Formik, useFormik } from 'formik';

import H2 from '../UI/H2/H2';
import Paragraph from '../UI/Paragraph/Paragraph';
import Form from '../Form/Form';
import FormField from '../Form/FormField/FormField';
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

const Login = ({ closeLogin }) => {
    // const formik = useFormik({
    //     initialValues: {
    //         login: '',
    //         password: '',
    //     },
    //     onSubmit: values => {
    //         console.log(values);
    //     }
    // });

    return (
        <>
            <ReturnButton handleOnClick={closeLogin} />
            <H2>Zaloguj się</H2>
            <Formik initialValues={{ login: '', password: '' }} onSubmit={values => { console.log(values) }}>
                {({handleSubmit}) => (
                    <Form onSubmit={handleSubmit}>
                        <FormField type='text' name='login' id='login' label='Login' />
                        <FormField type='password' name='password' id='password' label='Hasło' />
                        <StyledFormParagraph isSmall isCentered>Kontynuując akceptujesz nasz Regulamin oraz Politykę Prywatności</StyledFormParagraph>
                        <Button type='submit'>Zaloguj się</Button>
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