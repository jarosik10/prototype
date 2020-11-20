import styled from 'styled-components';

const Separator = styled.span`
    margin: 0 8px;
    color: ${({ theme }) => theme.colors.darkGray};
    font-size: 8px;
    width: 5px;
    height: 5px;
    border-radius: 5px;
    flex-shrink: 0;
    background-color: ${({ theme }) => theme.colors.darkGray};
`;

export default Separator;