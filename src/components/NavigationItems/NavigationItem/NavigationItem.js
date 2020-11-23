import styled from 'styled-components';

const StyledWrapper = styled.li`
      ${({ theme }) => theme.media.tablet} {
        margin-right: 24px;
        :last-of-type {
            margin-right: 0;
        }
      }

      ${({ theme }) => theme.media.smallDesktop} {
        margin-right: 30px;
      }
      
      ${({ theme }) => theme.media.desktop} {
        margin-right: 36px;
      }
`;

const StyledAnchor = styled.a`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: ${({ theme }) => theme.colors.darkGray};
    text-decoration: none;
    text-align: center;
`;

const NavigationItem = ({ children, handleOnClick, className }) => {
    return (
        <StyledWrapper className={className}>
            <StyledAnchor onClick={handleOnClick} role='button' href='#'>
                {children}
            </StyledAnchor>
        </StyledWrapper>
    );
}

export default NavigationItem;