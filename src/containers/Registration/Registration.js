import React, { useState } from 'react';
import styled from 'styled-components';
import { Formik } from 'formik';
import * as yup from 'yup';
import ReCAPTCHA from "react-google-recaptcha";

import H2 from '../../components/UI/H2/H2';
import Form from '../../components/Form/Form';
import InputField from '../../components/Form/InputField/InputField';
import ErrorMessage from '../../components/UI/ErrorMessage/ErrorMessage';
import Button from '../../components/UI/Button/Button';
import ReturnButton from '../../components/UI/CloseButton/CloseButton';
import FormLink from '../../components/Form/FormLink/FormLink';
import SelectField from '../../components/Form/SelectField/SelectField';
import Select from '../../components/UI/Select/Select';
import PasswordRequirements from '../../components/PasswordRequirements/PasswordRequirements';
import HelperWindow from '../../components/HelperWindow/HelperWindow';
import Paragraph from '../../components/UI/Paragraph/Paragraph';

const StyledReCAPTCHA = styled(ReCAPTCHA)`
    transform:scale(0.9);
    margin: 0 auto;
    transform-origin: center;
    
    ${({ theme }) => theme.media.smallTablet} {
        transform: unset
    }
`

const InlineFields = styled.div`
    flex: 0 0 auto;
    position: relative;
    display: flex;
    justify-content: space-between;
    margin-bottom: 35px;

    ${Select}{
        padding: 0 8px 0 24px;
        min-width: 30%;
    }
`;

const StyledGroupLabel = styled.div`
    z-index: ${({ theme }) => theme.zindex.level9};
    flex: 0 0 auto;
    font-size: 18px;
    margin: 0 auto 12px;
    color: ${({ theme }) => theme.colors.darkGray};
    display: flex;
    align-items: center;
`;

const passwordRequirementsInitialState = {
    minLength: false,
    hasLowercase: false,
    hasUppercase: false,
    hasDigit: false,
    hasSpecialChar: false,
}

const passwordRequirementsRegex = {
    minLength: new RegExp(/(?=.{8,})/),
    hasLowercase: new RegExp(/(?=.*[a-z])/),
    hasUppercase: new RegExp(/(?=.*[A-Z])/),
    hasDigit: new RegExp(/(?=.*\d)/),
    hasSpecialChar: new RegExp(/(?=.*[-+_!@#$%^&*.,?])/),
}

const Registration = ({ closeRegistration, openLogin, theme }) => {
    const [showPasswordRequirements, setShowPasswordRequirements] = useState(false);
    const [passwordRequirements, setPasswordRequirements] = useState(passwordRequirementsInitialState);

    const checkPasswordRequirements = (password) => {
        let newState = { ...passwordRequirements };
        Object.keys(passwordRequirements).forEach(requirement => {
            newState = {
                ...newState,
                [requirement]: passwordRequirementsRegex[requirement].test(password),
            }
        });

        return newState;
    }

    const validationSchema = yup.object({
        login: yup.string().required('Pole obowiązkowe!').min(6, 'Login musi składać się z co najmniej 6 znaków!'),
        email: yup.string().email('Niepoprawny email!').required('Pole obowiązkowe!'),
        password: yup.string().required('Pole obowiązkowe!').test('meets-requiremenst', 'Nie spełnia wymagań!', (value, context) => {
            if (!value) {
                setPasswordRequirements(passwordRequirementsInitialState);
                return false;
            }

            const passwordRequirements = checkPasswordRequirements(value);
            const isValid = Object.keys(passwordRequirements).reduce((isValidAccumulator, key) => {
                const isRequirementmMet = passwordRequirements[key];
                return isRequirementmMet && isValidAccumulator;
            }, true)

            setPasswordRequirements(passwordRequirements);
            return isValid;
        }),
        repeatPassword: yup.string().required('Pole obowiązkowe!').oneOf([yup.ref('password'), null], 'Podane hasła nie są takie same!'),
        birthDate: yup.object({
            day: yup.number(),
            month: yup.number(),
            year: yup.number(),
        }).test('is-valid-date', 'Niepoprawna data!', ({ day, month, year }) => {
            const date = new Date(year, month, day);
            return date.getFullYear() === year && date.getMonth() === month && date.getDate() === day;
        }),
    });

    const daySelectOptions = [];
    for (let i = 1; i < 32; i++) {
        daySelectOptions.push(<option key={i} value={i}>{i}</option>);
    }
    // const months = ['styczeń', 'luty', 'marzec', 'kwiecień', 'maj', 'czerwiec', 'lipiec', 'sierpień', 'wrzesień', 'październik', 'listopad', 'grudzień'];
    const months = ['sty', 'lut', 'mar', 'kwi', 'maj', 'cze', 'lip', 'sie', 'wrz', 'paź', 'lis', 'gru'];
    const monthSelectOptions = [];
    for (let i = 0; i < 12; i++) {
        monthSelectOptions.push(<option key={i} value={i}>{months[i]}</option>);
    }
    const yearSelectOptions = [];
    for (let i = 0; i < 121; i++) {
        const year = new Date().getFullYear() - i;
        yearSelectOptions.push(<option key={year} value={year}>{year}</option>);
    }

    return (
        <>
            <ReturnButton handleOnClick={closeRegistration} />
            <H2>Załóż konto</H2>
            <Formik
                initialValues={{ login: '', email: '', password: '', repeatPassword: '', birthDate: { day: '', month: '', year: '' } }} onSubmit={(values, { setSubmitting }) => {
                    setSubmitting(true);
                    // Async call
                    setTimeout(() => {
                        console.log(values);
                        setSubmitting(false);
                    }, 500);
                }}
                validationSchema={validationSchema}
            >
                {({ handleSubmit, errors, values, isSubmitting, touched }) => (
                    <Form onSubmit={handleSubmit}>
                        <InputField type='text' name='login' id='login' label='Login' />
                        <InputField type='text' name='email' id='email' label='Email' />
                        <InputField setShowPasswordRequirements={setShowPasswordRequirements} type='password' name='password' id='password' label='Hasło' />
                        {showPasswordRequirements && <PasswordRequirements requirementState={passwordRequirements} />}
                        <InputField type='password' name='repeatPassword' id='repeatPassword' label='Powtórz hasło' />
                        <StyledGroupLabel>
                            Data urodzenia
                            <HelperWindow>
                                <Paragraph>Potrzebujemy daty twoich urodzin, ponieważ niektóre produkty oferowane w naszym serwisie dostępne są od lat 16 lub 18.</Paragraph>
                            </HelperWindow>
                        </StyledGroupLabel>
                        <InlineFields>
                            <SelectField type='select' name='birthDate.day' id='day' value=''>
                                <option value='' disabled>Dzień</option>
                                {daySelectOptions}
                            </SelectField>
                            <SelectField type='select' name='birthDate.month' id='month' value=''>
                                <option value='' disabled>Miesiąc</option>
                                {monthSelectOptions}
                            </SelectField>
                            <SelectField type='select' name='birthDate.year' id='year' value=''>
                                <option value='' disabled>Rok</option>
                                {yearSelectOptions}
                            </SelectField>
                            {touched.birthDate && touched.birthDate.day && touched.birthDate.month && touched.birthDate.year && !!errors.birthDate && <ErrorMessage isAbsolute error={errors.birthDate} />}
                        </InlineFields>
                        <StyledReCAPTCHA
                            sitekey='6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI'
                            onChange={(value) => console.log('CAPTCHA: ', value)}
                        />
                        <Button type='submit' disabled={isSubmitting}>Zarejestruj</Button>
                        {/* <pre>{JSON.stringify(values, null, 2)}</pre> */}
                        {/* <pre>{JSON.stringify(errors, null, 2)}</pre> */}
                        {/* <pre>{JSON.stringify(touched, null, 2)}</pre> */}
                    </Form>
                )}
            </Formik>
            <FormLink onClick={openLogin} isBold isCenterd href="#">Masz już konto? Zaloguj się!</FormLink>
        </>
    );
}

export default Registration;