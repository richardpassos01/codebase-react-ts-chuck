import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Icon = styled.img`
  margin-top: 2em;
  height: 60%;
`;

export const useStyles = () => ({
  text: {
    color: '#000000',
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: '24px',
    lineHeight: '36px',
  },
});

