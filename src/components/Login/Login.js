import React from 'react';
import styled from 'styled-components';
import { useFormik } from 'formik';

import H2 from '../UI/H2/H2';
import Paragraph from '../UI/Paragraph/Paragraph';
import Form from '../Form/Form';
import FormField from '../Form/FormField/FormFIeld';
import Button from '../UI/Button/Button';
import ReturnButton from '../UI/ReturnButton/ReturnButton';
import FormLink from '../Form/FormLink/FormLink';
import Separator from '../UI/Separator/Separator';

const StyledWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    background-color: ${({ theme }) => theme.colors.white};
    width: 100%;
    padding: 70px 16px 50px;
    height: 100vh;
    overflow-y: auto;
`;

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
    const formik = useFormik({
        initialValues: {
            login: '',
            password: '',
        },
        onSubmit: values => {
            console.log(values);
        }
    });

    return (
        <StyledWrapper>
            <ReturnButton handleOnClick={closeLogin} />
            <H2>Zaloguj się</H2>
            <Form onSubmit={formik.handleSubmit}>
                <FormField inputType='text' inputId='login' labelText='Login' formik={formik} />
                <FormField inputType='password' inputId='password' labelText='Hasło' formik={formik} />
                <StyledFormParagraph isSmall isCentered>Kontynuując akceptujesz nasz Regulamin oraz Politykę Prywatności</StyledFormParagraph>
                <Button type='submit'>Zaloguj się</Button>
            </Form>
            <FormLink isBold href="#">Nie masz konta? Zarejestruj się</FormLink>
            <GroupedFormLinks>
                <FormLink href="#">Nie pamiętam hasła</FormLink>
                <Separator />
                <FormLink href="#">Nie pamiętam loginu</FormLink>
            </GroupedFormLinks>
        </StyledWrapper>
    );
}

export default Login;