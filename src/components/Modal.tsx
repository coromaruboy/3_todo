/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import { css } from "@emotion/react";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    onsubmit: (task: string) => void;
}

const modalStyle = css`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 20px;
    background-color: white;
    border: 1px solid #ddd;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    z-index: 1000;
`;

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, onsubmit }) => {
    const [task, setTask] = useState('');

    const handleInpitChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTask(event.target.value);
    };

    const handleSubmit = () => {
        if (task.trim().length > 0) {
            onsubmit(task);
            setTask('');
        }
    };

    return (
        <>
            {isOpen && (
                <div css={modalStyle}>
                    <label>
                        Task:
                        <input type="text" value={task} onChange={handleInpitChange} />
                    </label>
                    <button onClick={handleSubmit}>Add Task</button>
                    <button onClick={onClose}>Close</button>
                </div>
            )}
        </>
    )
}

export default Modal;