import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');
  const [color, setColor] = useState('#ffffff');
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5000/api/todos')
      .then(res => setTodos(res.data));
  }, []);

  const addTodo = () => {
    if (!text.trim()) return;
    const payload = { text, color };

    if (editId) {
      axios.put(`http://localhost:5000/api/todos/${editId}`, payload).then(res => {
        setTodos(todos.map(todo => todo._id === editId ? res.data : todo));
        resetForm();
      });
    } else {
      axios.post('http://localhost:5000/api/todos', payload).then(res => {
        setTodos([res.data, ...todos]);
        resetForm();
      });
    }
  };

  const deleteTodo = id => {
    axios.delete(`http://localhost:5000/api/todos/${id}`).then(() => {
      setTodos(todos.filter(todo => todo._id !== id));
    });
  };

  const editTodo = todo => {
    setText(todo.text);
    setColor(todo.color || '#ffffff');
    setEditId(todo._id);
  };

  const resetForm = () => {
    setText('');
    setColor('#ffffff');
    setEditId(null);
  };

  return (
    <div className="min-h-screen text-black ">
      <div className="max-w-xl mx-auto bg-white rounded-xl shadow p-6 ">
        <h1 className="text-2xl font-bold mb-4">MERN Todo App</h1>
        <div className="flex gap-2 mb-4">
          <input
            value={text}
            onChange={e => setText(e.target.value)}
            className="flex-1 px-4 py-2 border rounded"
            placeholder="Enter todo..."
          />
          <input
            type="color"
            value={color}
            onChange={e => setColor(e.target.value)}
            className="w-12 h-10 p-0 border rounded"
            title="Choose color"
          />
          <button onClick={addTodo} className="bg-blue-500 text-white px-4 py-2 rounded">
            {editId ? 'Update' : 'Add'}
          </button>
        </div>

        <ul >
          {todos.map(todo => (
            <li
              key={todo._id}
              className="flex justify-between text-left py-2 px-3 w-100 mb-2 rounded shadow"
              style={{ backgroundColor: todo.color || '#ffffff' }}
            >
              <div>
                <p className="font-medium ">{todo.text}</p>
                <p className="text-xs text-gray-600 ">
                  Last updated: {new Date(todo.updatedAt).toLocaleString()}
                </p>
              </div>
              <div className="space-x-2 sm:flex sm:justify-items-right">
                <button
                  onClick={() => editTodo(todo)}
                  className="text-sm bg-yellow-400 text-white px-2 py-1 rounded "
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteTodo(todo._id)}
                  className="text-sm bg-red-500 text-white px-2 py-1 rounded"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
