// src/pages/KanbanPage.jsx
import React, { useState } from 'react';
import KanbanBoard from '../components/KanbanBoard';
import TaskModal from '../components/TaskModal';

const initialData = {
  todo: [
    { id: '1', title: 'Setup Project', desc: 'Initial project setup and dependencies' },
  ],
  inprogress: [
    { id: '2', title: 'Create Sidebar', desc: 'Implement responsive sidebar' },
  ],
  done: [
    { id: '3', title: 'Topbar Complete', desc: 'Header and dark/light toggle' },
  ],
};

const KanbanPage = () => {
  const [tasks, setTasks] = useState(initialData);
  const [modalInfo, setModalInfo] = useState({ isOpen: false, columnId: '', task: null });

  const handleOpenModal = (columnId, task = null) => {
    setModalInfo({ isOpen: true, columnId, task });
  };

  const handleCloseModal = () => {
    setModalInfo({ isOpen: false, columnId: '', task: null });
  };

  const handleSave = (updatedTask) => {
    setTasks((prev) => {
      const updatedColumn = [...(prev[modalInfo.columnId] || [])];
      if (updatedTask.id) {
        const idx = updatedColumn.findIndex((t) => t.id === updatedTask.id);
        updatedColumn[idx] = { ...updatedColumn[idx], ...updatedTask };
      } else {
        updatedTask.id = Date.now().toString();
        updatedColumn.push(updatedTask);
      }
      return { ...prev, [modalInfo.columnId]: updatedColumn };
    });
    handleCloseModal();
  };

  const handleDelete = (id) => {
    setTasks((prev) => {
      const updatedColumn = prev[modalInfo.columnId].filter((t) => t.id !== id);
      return { ...prev, [modalInfo.columnId]: updatedColumn };
    });
    handleCloseModal();
  };

  const handleShift = (fromCol, toCol, taskId) => {
    setTasks((prev) => {
      const taskToMove = prev[fromCol].find((t) => t.id === taskId);
      const newFrom = prev[fromCol].filter((t) => t.id !== taskId);
      const newTo = [...prev[toCol], taskToMove];
      return {
        ...prev,
        [fromCol]: newFrom,
        [toCol]: newTo,
      };
    });
  };

  return (
    <>
      <KanbanBoard
        tasks={tasks}
        onAddTask={handleOpenModal}
        onEditTask={handleOpenModal}
        onShift={handleShift}
      />
      {modalInfo.isOpen && (
        <TaskModal
          columnId={modalInfo.columnId}
          task={modalInfo.task}
          onSave={handleSave}
          onDelete={handleDelete}
          onClose={handleCloseModal}
        />
      )}
    </>
  );
};

export default KanbanPage;
