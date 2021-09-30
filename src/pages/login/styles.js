import styled, { keyframes } from 'styled-components';

export const App = styled.div`
    text-align: center;
`;

export const AppBody = styled.header`
    background-color: #61dafb;
    min-height: 100vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const BoxLogin = styled.div`
    background-color: #282c34;
    height: 50vh;
    width: 30vw;

    border-radius: 25px;
    box-shadow: 5px 5px 20px #3e4451;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const BoxButton = styled.div`
    width: 25vw;
    margin-bottom: 1rem;
`;

export const BoxLogo = styled.div`
    height: 20vmin;
    width: 20vmin;

    border-radius: 50vmin;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: 0.5s;
    background-color: #3e4451;
    box-shadow: 5px 5px 20px #3e4451;
    margin-bottom: 30px;

    &:hover {
        cursor: pointer;
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

export const BoxLogoImg = styled.img`
    height: 15vmin;
    animation: ${rotate} infinite 20ms linear;
`;