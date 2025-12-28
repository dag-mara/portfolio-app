import React from "react";
import './style.css';
import { useMagic } from "../../magic-context";

export const Button = ({ link, title, }) => {
    const {magicColorText} = useMagic();
    return (
        <a className="button" href={link} style={{ color: magicColorText(), borderColor: magicColorText() }}>
            {title}
        </a>
    )
}