// src/components/KanbanBoard.jsx
import React, { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';

const columnTitles = {
  todo: 'To Do',
  inprogress: 'In Progress',
  done: 'Done',
};

const KanbanBoard = ({ tasks, onAddTask, onEditTask, onShift }) => {
  const [hoveredTaskId, setHoveredTaskId] = useState(null);
  const [shiftMenu, setShiftMenu] = useState({ taskId: null, fromCol: null });

  const renderShiftOptions = (taskId, fromCol) => {
    const destinations = Object.keys(columnTitles).filter((col) => col !== fromCol);
    return (
      <div className="absolute top-10 right-4 bg-white dark:bg-gray-700 border dark:border-gray-600 shadow rounded p-2 z-50">
        <p className="font-semibold mb-1 text-sm">Move to:</p>
        {destinations.map((dest) => (
          <button
            key={dest}
            onClick={() => {
              onShift(fromCol, dest, taskId);
              setShiftMenu({ taskId: null, fromCol: null });
            }}
            className="block text-left text-sm w-full px-2 py-1 rounded hover:bg-gray-200 dark:hover:bg-gray-600"
          >
            {columnTitles[dest]}
          </button>
        ))}
      </div>
    );
  };

  return (
    <div className="p-4 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white min-h-screen">
      <h2 className="text-2xl font-bold mb-6">Kanban Board</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {Object.entries(columnTitles).map(([colId, colTitle]) => (
          <div key={colId} className="bg-white dark:bg-gray-800 rounded shadow p-4 flex flex-col relative">
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-lg font-semibold">{colTitle}</h3>
              <button
                className="text-blue-500 hover:text-blue-700 font-semibold"
                onClick={() => onAddTask(colId)}
              >
                + Add
              </button>
            </div>

            <div className="flex flex-col gap-3">
              {tasks[colId]?.map((task) => (
                <div
                  key={task.id}
                  className="relative group p-4 rounded shadow bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-all cursor-pointer"
                  onClick={() => onEditTask(colId, task)}
                  onMouseEnter={() => setHoveredTaskId(task.id)}
                  onMouseLeave={() => setHoveredTaskId(null)}
                >
                  <p className="font-semibold text-md">{task.title}</p>
                  {task.desc && <p className="text-sm">{task.desc}</p>}

                  {hoveredTaskId === task.id && (
                    <button
                      className="absolute top-2 right-2 text-blue-500 hover:text-blue-700"
                      onClick={(e) => {
                        e.stopPropagation();
                        setShiftMenu({ taskId: task.id, fromCol: colId });
                      }}
                    >
                      <FaArrowRight />
                    </button>
                  )}

                  {shiftMenu.taskId === task.id && shiftMenu.fromCol === colId &&
                    renderShiftOptions(task.id, colId)}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KanbanBoard;
