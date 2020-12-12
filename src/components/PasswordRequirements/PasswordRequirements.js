import React from 'react';
import styled from 'styled-components';
import okImage from '../../assets/images/ok-16.png';

const StyledWrapper = styled.div`
    font-size: 12px;
    margin: -10px 0 25px;
`;

const Requirement = styled.span`
    position: relative;
    display: inline-block;
    font-size: 15px; 
    color: ${({isMet}) => isMet ? '#434343' : '#999999'}; 
    font-weight: ${({isMet}) => isMet ? 'bold' : 'normal'};
    margin: 0 4px; 

    ${({isMet}) => isMet && `
        margin-left: 24px;

        ::before {
            content: '';
            position: absolute;
            width: 16px;
            height: 16px;
            right: 100%;
            margin-right: 4px;
            background-image: url(${okImage});
        };
    `};
`;

const PasswordRequirements = ({requirementState}) => {
    return (
        <StyledWrapper>
            <Requirement isMet={requirementState.minLength}>Min. 8 znaków</Requirement> | 
            <Requirement isMet={requirementState.hasSpecialChar}>znak specjalny</Requirement> | 
            <Requirement isMet={requirementState.hasUppercase}>wielka litera</Requirement> | 
            <Requirement isMet={requirementState.hasLowercase}>mała litera</Requirement> | 
            <Requirement isMet={requirementState.hasDigit}>cyfra</Requirement>
        </StyledWrapper>
    );
}

export default PasswordRequirements;