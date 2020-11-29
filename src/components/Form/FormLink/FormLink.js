import styled from 'styled-components';

const FormLink = styled.a`
    /* flex: 0 0 auto; */
    display: inline-block;
    /* display: ${({ isInline }) => isInline ? 'inline-block' : 'block'}; */
    font-size: 16px;
    color: ${({ theme }) => theme.colors.darkGray};
    font-weight: ${({ isBold }) => isBold ? 'bold' : 'normal'};
    text-decoration: none;
    margin: ${({isCenterd}) => isCenterd ? '25px auto 0' : '25px 0 0' };
    /* margin: 25px 0 0; */
    text-align: center;
`;

export default FormLink;