// src/components/Button.tsx
/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from "@emotion/react";

interface ButtonProps {
    onClick: () => void;
    children: React.ReactNode;
};

const buttonStyle = css`
    padding: 10px 20px;
    margin: 5px;
    font-size: 1rem;
    cursor: pointer;
`;

const Button: React.FC<ButtonProps> = ({ onClick, children }) => {
    return (
        <button css={buttonStyle} onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;