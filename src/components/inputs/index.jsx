import React from "react";
import { Container, NormalInput, Label } from "./styles";

export default function Input({
    value,
    setValue,
    password,
    placeholder,
    label
}) {

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <Container>
            {label && <Label>{label}</Label>}
            <NormalInput
                type            =   {password ? 'password' : 'text'}
                placeholder     =   {placeholder}
                defaultValue    =   {value}
                onChange        =   {handleChange}
            />
        </Container>
    );
}