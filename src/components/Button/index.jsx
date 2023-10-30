import React from "react";
import './style.css';
import { useMagic } from "../../magic-context";

export const Button = ({ link, title, }) => {
    const {magicColorHeadline} = useMagic();
    return (
        <a className="button" href={link} style={{ color: magicColorHeadline() }}>
            {title}
        </a>
    )
}