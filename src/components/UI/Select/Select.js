import styled from 'styled-components';

const Select = styled.select`
    height: 44px;
    border: 1px solid #5C677D;
    border-radius: 22px;
    padding: 0 6px 0 16px;
    font-size: 16px;
    background-color: white;
    color: ${({theme}) => theme.colors.darkGray};
    /* flex: 0 0 auto; */

    ${({ theme }) => theme.media.smallTablet} {
    padding: 0 8px 0 32px;
    font-size: 18px;
    }
`;

export default Select;