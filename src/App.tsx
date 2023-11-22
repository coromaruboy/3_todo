// src/App.tsx
/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import { css } from '@emotion/react';
import Button from './components/Button';
import Modal from './components/Modal';
import TaskList from './components/TaskList';

const appStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tasks, setTasks] = useState<string[]>([]);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const addTask = (task: string) => {
    setTasks([...tasks, task]);
    closeModal();
  };

  const deleteTask = (index: number) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  return (
    <div css={appStyle} >
      <h1>TODO List App</h1>
      <Button onClick={openModal}>Add Task</Button>
      <Modal isOpen={isModalOpen} onClose={closeModal} onsubmit={addTask} />
      <TaskList tasks={tasks} onDelete={deleteTask} />
    </div >
  );
};

export default App;