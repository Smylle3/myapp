import styled from 'styled-components';

export const NoColorButton = styled.button`
    box-sizing: border-box;
    width: 100%;
    background-color: transparent;
    margin-top: 1rem;

    border: none;
    padding: 0 0.9rem;
    
    font-family: inherit;
    font-size: 1.2rem;
    font-weight: 500;
    color: #61dafb;
    outline: 0;
    transition: 0.5s;

    &:hover {
        cursor: pointer;
        color: #4398af;
    }
`;