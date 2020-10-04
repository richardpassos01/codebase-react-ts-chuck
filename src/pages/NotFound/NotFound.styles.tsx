import styled from 'styled-components';

export const Wrapper = styled.div`
    height: 100%;
    min-height: 100%;
    display: -webkit-flex;
    display: flex;
    -webkit-align-items: center;
    align-items: center;
    -webkit-justify-content: center;
    justify-content: center;
    margin-top: 13vh;
`;

export const Content = styled.div`
    padding: 40px;
`;

export const useStyles = () => ({
  logo: {
    marginBottom: '2rem',
  },
});
