import styled, { keyframes } from 'styled-components';

export const App = styled.div`
  text-align: center;
`;

export const AppHeader = styled.header`
  background-color: var(--color-background);
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
  border-color: var(--color-primary);
  border-radius: 50vmin;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: 0.5s;
  &:hover {
    cursor: pointer;
  }
  &:active{
    
    -webkit-transform: scale(100);
    transition: 0.5s;
  }
`;

export const Notification = styled.div`
  color: var(--color-primary);
  margin-bottom: 50px ;
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
