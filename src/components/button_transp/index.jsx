import React from "react";
import { NoColorButton } from "./styles";

export default function Button({ children, href }) {
    return (
    <NoColorButton href = {href}>
        {children}
    </NoColorButton>
    );
}