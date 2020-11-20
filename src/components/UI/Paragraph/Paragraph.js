import styled from 'styled-components';

const Paragraph = styled.p`
    font-size: ${({isSmall}) => isSmall ? '12px' : '16px'};
    text-align: ${({isCentered}) => isCentered ? 'center' : 'inital'};
    color: ${({ theme }) => theme.colors.darkGray};
`;

export default Paragraph;