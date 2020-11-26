import styled from 'styled-components';

const Label = styled.label`
    position: absolute;
    left: 30px;
    color: ${({ isActive, theme }) => isActive ? theme.colors.blue : theme.colors.gray};
    font-size: ${({ isActive, isInputFilled }) => isActive || isInputFilled ? '13px' : '18px'};
    font-weight: ${({ isActive, isInputFilled }) => isActive || isInputFilled ? 'bold' : 'normal'};
    background-color: ${({ isActive, isInputFilled, theme }) => isActive || isInputFilled ? theme.colors.white : ''};
    padding: 1px 3px;
    transform: ${({ isActive, isInputFilled }) => isActive || isInputFilled ? 'translateY(-150%)' : 'translateY(0)'};
    transition: transform .2s ease-out;
`;

export default Label;
