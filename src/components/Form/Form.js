import styled from 'styled-components';

const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 450px;
    margin: 0 auto;
    
    ${({ theme }) => theme.media.smallTablet} {
    
    }

    ${({ theme }) => theme.media.tablet} {
        min-width: 450px;
    }
`;

export default Form;