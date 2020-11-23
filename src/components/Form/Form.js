import styled from 'styled-components';

const Form = styled.form`
     ${({ theme }) => theme.media.smallTablet} {
        max-width: 588px;
        margin: 0 auto;
      }
`;

export default Form;