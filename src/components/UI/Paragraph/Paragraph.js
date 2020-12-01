import styled from 'styled-components';

const Paragraph = styled.p`
    font-size: ${({isSmall, isBig}) => isSmall ? '12px' : isBig ? '22px' : '16px'};
    text-align: ${({isCentered}) => isCentered ? 'center' : 'left'};
    font-weight: ${({isBold}) => isBold ? 'bold' : 'regular'};
    color: ${({ theme }) => theme.colors.darkGray};
`;

export default Paragraph;