import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 75%;
    padding-bottom: 1rem;
`
export const Label = styled.h1`

    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0;
    padding-bottom: 0.5rem;

    font-size: 1.1rem;
    font-weight: 400;
    color: #61dafb;
`;

export const NormalInput = styled.input`
    box-sizing: border-box;
    height: 7vh;
    width: 100%;
    background-color: transparent;

    border: 1px solid #61dafb;
    border-radius: 25px;
    padding: 0 0.9rem;
    
    font-family: inherit;
    font-size: 1.2rem;
    font-weight: 300;
    color: #61dafb;
    outline: 0;

    &:focus {
        background-color: #3e4451;
        border-width: 2px;
    }
    &:hover {
        background-color: #3e4451;
        border-width: 2px;
    }
`;