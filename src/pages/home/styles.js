import styled, { keyframes } from 'styled-components';

export const App = styled.div`
  text-align: center;
`;

export const AppHeader = styled.header`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;


export const Logo = styled.div`
  height: 50vmin;
  width: 50vmin;
  border-width: medium;
  border-style: solid;
  border-color: #61dafb;
  border-radius: 50vmin;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: 0.5s;
  &:hover {
    cursor: pointer;
    background-color: #3e4451;
    transition: 0.5s;
  }
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const AppLogo = styled.img`
  height: 40vmin;
  animation: ${rotate} infinite 20s linear;
`;
