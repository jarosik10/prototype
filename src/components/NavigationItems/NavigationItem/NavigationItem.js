import styled from 'styled-components';

const StyledWrapper = styled.li`
    width: calc((100% - 16px) / 5);
`;

const StyledAnchor = styled.a`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: ${({ theme }) => theme.colors.darkGray};
    text-decoration: none;
`;

const NavigationItem = ({ children }) => {
    return (
        <StyledWrapper>
            <StyledAnchor role='button' href='/#'>
                {children}
            </StyledAnchor>
        </StyledWrapper>
    );
}

export default NavigationItem;