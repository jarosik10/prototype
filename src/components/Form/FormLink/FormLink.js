import styled from 'styled-components';

const FormLink = styled.a`
    display: ${({ isInline }) => isInline ? 'inline-block' : 'block'};
    font-size: 16px;
    color: ${({ theme }) => theme.colors.darkGray};
    font-weight: ${({ isBold }) => isBold ? 'bold' : 'normal'};
    text-decoration: none;
    margin-top: 25px;
    text-align: center;
`;

export default FormLink;