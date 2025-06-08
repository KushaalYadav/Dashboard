import React, { useState, useMemo, useCallback } from 'react';
import {
  useTable,
  useSortBy,
  useGlobalFilter,
  usePagination,
} from 'react-table';
import { FaEdit, FaTrash } from 'react-icons/fa';

const initialData = [
  { id: 1, name: 'Shah Rukh Khan', role: 'Actor', movies: 80, hitRatio: 0.7 },
  { id: 2, name: 'Dilwale Multiplex', role: 'Multiplex', movies: 120, hitRatio: 0.6 },
  { id: 3, name: 'Box Office Hits', role: 'Analytics', movies: 100, hitRatio: 0.8 },
];

const TablePage = () => {
  const [data, setData] = useState(initialData);
  const [newEntry, setNewEntry] = useState({ name: '', role: '', movies: '', hitRatio: '' });
  const [editId, setEditId] = useState(null);

  const handleDelete = useCallback((id) => {
    if (data.length <= 3) {
      alert('Minimum 3 entries should be present.');
      return;
    }
    setData((prev) => prev.filter((item) => item.id !== id));
    if (editId === id) setEditId(null);
  }, [data.length, editId]);

  const handleSave = () => {
    if (!newEntry.name || !newEntry.role) return alert('Please fill Name and Role');

    if (editId) {
      setData((prev) =>
        prev.map((item) =>
          item.id === editId
            ? {
                ...item,
                name: newEntry.name,
                role: newEntry.role,
                movies: Number(newEntry.movies),
                hitRatio: Number(newEntry.hitRatio),
              }
            : item
        )
      );
      setEditId(null);
    } else {
      const newId = data.length ? Math.max(...data.map((d) => d.id)) + 1 : 1;
      setData((prev) => [
        ...prev,
        {
          id: newId,
          name: newEntry.name,
          role: newEntry.role,
          movies: Number(newEntry.movies),
          hitRatio: Number(newEntry.hitRatio),
        },
      ]);
    }

    setNewEntry({ name: '', role: '', movies: '', hitRatio: '' });
  };

  const columns = useMemo(() => [
    { Header: 'Name', accessor: 'name' },
    { Header: 'Role', accessor: 'role' },
    { Header: 'Movies', accessor: 'movies' },
    {
      Header: 'Hit Ratio',
      accessor: 'hitRatio',
      Cell: ({ value }) => `${(value * 100).toFixed(1)}%`,
    },
    {
      Header: 'Actions',
      id: 'actions',
      disableSortBy: true,
      Cell: ({ row }) => (
        <div className="flex gap-2">
          <button
            onClick={() => {
              const task = row.original;
              setEditId(task.id);
              setNewEntry({
                name: task.name,
                role: task.role,
                movies: task.movies,
                hitRatio: task.hitRatio,
              });
            }}
            className="text-blue-600 hover:text-blue-900"
          >
            <FaEdit />
          </button>
          <button
            onClick={() => handleDelete(row.original.id)}
            className="text-red-600 hover:text-red-900"
          >
            <FaTrash />
          </button>
        </div>
      ),
    },
  ], [handleDelete]);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    state: { pageIndex, pageSize, globalFilter },
    setGlobalFilter,
    gotoPage,
    pageCount,
    setPageSize,
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0, pageSize: 5 },
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">🎬 Movie Analytics Table</h2>

      {/* Global Search */}
      <div className="mb-6 flex justify-center">
        <input
          value={globalFilter || ''}
          onChange={(e) => setGlobalFilter(e.target.value)}
          placeholder="Search records..."
          className="w-full max-w-md p-3 border rounded shadow-sm dark:bg-gray-800 dark:text-white"
        />
      </div>

      {/* Add/Edit Form */}
      <div className="mb-6 flex flex-wrap gap-4 items-center justify-center">
        <input
          type="text"
          placeholder="Name"
          value={newEntry.name}
          onChange={(e) => setNewEntry({ ...newEntry, name: e.target.value })}
          className="p-2 border rounded w-40"
        />
        <input
          type="text"
          placeholder="Role"
          value={newEntry.role}
          onChange={(e) => setNewEntry({ ...newEntry, role: e.target.value })}
          className="p-2 border rounded w-40"
        />
        <input
          type="number"
          placeholder="Movies"
          value={newEntry.movies}
          onChange={(e) => setNewEntry({ ...newEntry, movies: e.target.value })}
          className="p-2 border rounded w-32"
        />
        <input
          type="number"
          step="0.01"
          placeholder="Hit Ratio"
          value={newEntry.hitRatio}
          onChange={(e) => setNewEntry({ ...newEntry, hitRatio: e.target.value })}
          className="p-2 border rounded w-32"
        />
        <button
          onClick={handleSave}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          {editId ? 'Update' : 'Add'}
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded shadow-lg border border-gray-300 dark:border-gray-600">
        <table {...getTableProps()} className="min-w-full text-sm text-left">
          <thead className="bg-gray-100 dark:bg-gray-700">
            {headerGroups.map(headerGroup => (
              <tr {...headerGroup.getHeaderGroupProps()} key={headerGroup.id}>
                {headerGroup.headers.map(column => (
                  <th
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                    className="p-3 font-semibold text-gray-700 dark:text-white cursor-pointer"
                    key={column.id}
                  >
                    <div className="flex items-center justify-between">
                      {column.render('Header')}
                      <span>
                        {column.isSorted
                          ? column.isSortedDesc
                            ? ' 🔽'
                            : ' 🔼'
                          : ''}
                      </span>
                    </div>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()} className="bg-white dark:bg-gray-900">
            {page.map(row => {
              prepareRow(row);
              return (
                <tr
                  {...row.getRowProps()}
                  key={row.id}
                  className="hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  {row.cells.map(cell => (
                    <td
                      {...cell.getCellProps()}
                      className="p-3 border-t dark:border-gray-600"
                      key={cell.column.id}
                    >
                      {cell.render('Cell')}
                    </td>
                  ))}
                </tr>
              );
            })}
            {page.length === 0 && (
              <tr>
                <td colSpan={columns.length} className="text-center p-4">
                  No records found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex flex-wrap justify-between items-center mt-6 gap-4">
        <div className="flex gap-2">
          <button onClick={() => gotoPage(0)} disabled={!canPreviousPage} className="px-3 py-1 border rounded">
            {'<<'}
          </button>
          <button onClick={previousPage} disabled={!canPreviousPage} className="px-3 py-1 border rounded">
            Prev
          </button>
          <button onClick={nextPage} disabled={!canNextPage} className="px-3 py-1 border rounded">
            Next
          </button>
          <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage} className="px-3 py-1 border rounded">
            {'>>'}
          </button>
        </div>

        <span className="text-sm">
          Page <strong>{pageIndex + 1}</strong> of <strong>{pageOptions.length}</strong>
        </span>

        <select
          value={pageSize}
          onChange={(e) => setPageSize(Number(e.target.value))}
          className="p-1 border rounded"
        >
          {[5, 10, 20].map(size => (
            <option key={size} value={size}>
              Show {size}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default TablePage;
