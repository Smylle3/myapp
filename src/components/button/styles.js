import styled from 'styled-components';

export const NormalButton = styled.button`
    box-sizing: border-box;
    height: 7vh;
    width: 40%;
    background-color: #61dafb;
    margin-left: 10px;
    margin-right: 10px;

    border: 1px solid #61dafb;
    border-radius: 25px;
    padding: 0 0.9rem;
    
    font-family: inherit;
    font-size: 1.2rem;
    font-weight: 500;
    color: #282c34;
    outline: 0;
    transition: 0.5s;
    &:hover {
        cursor: pointer;
        background-color: #4398af;
        border: none;
    }
`;