/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import Button from './Button';

interface TaskListProps {
    tasks: String[];
    onDelete: (index: number) => void;
}

const taskListStyle = css`
    list-style: none;
    padding: 0;
`;

const TaskList: React.FC<TaskListProps> = ({ tasks, onDelete }) => {
    return (
        <ul css={taskListStyle}>
            {tasks.map((task, index) => (
                <li key={index}>
                    {task}
                    <Button onClick={() => onDelete(index)}>delete</Button>
                </li>
            ))}
        </ul>
    );
};

export default TaskList;
