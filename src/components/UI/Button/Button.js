import styled from 'styled-components';

const Button = styled.button`
    display: block;
    margin: 0 auto;
    padding: 10px 24px;
    font-size: 18px;
    border: none;
    border-radius: 24px;
    background-color: ${({ theme }) => theme.colors.blue};
    color: ${({ theme }) => theme.colors.white};
`;

export default Button;