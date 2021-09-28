import styled from 'styled-components';

export const NoColorButton = styled.button`
    box-sizing: border-box;
    height: 7vh;
    width: 40%;
    background-color: transparent;

    border: 1px solid #61dafb;
    border-radius: 25px;
    padding: 0 0.9rem;
    
    font-family: inherit;
    font-size: 1.2rem;
    font-weight: 500;
    color: #61dafb;
    outline: 0;
    transition: 0.5s;

    &:hover {
        cursor: pointer;
        background-color: #3e4451;
        border-color: #4398af;
    }
`;