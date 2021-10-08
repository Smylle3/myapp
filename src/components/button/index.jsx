import React from "react";
import { NormalButton } from "./styles";

export default function Button({ children, onClick }) {
    return (
    <NormalButton onClick = {onClick}>
        {children}
    </NormalButton>
    );
}