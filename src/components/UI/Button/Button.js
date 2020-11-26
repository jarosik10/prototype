import styled from 'styled-components';

const Button = styled.button`
    display: block;
    margin: 16px auto 0;
    padding: 10px 24px;
    font-size: 18px;
    border: none;
    border-radius: 24px;
    background-color: ${({ theme }) => theme.colors.blue};
    color: ${({ theme }) => theme.colors.white};
    cursor: pointer;
`;

export default Button;