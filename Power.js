import React, { useState } from "react";

 const App = (props) => {

  const [todo,setTodo] =useState('');
  const [todos,setTodos] =useState([]);
  const [editId,setEditId] =useState(0);
  const handleSubmit = (e) => {
    e.preventDefault();
     if (todo !== '') {
      setTodos([{ id: `${todo}-  ${Date.now()}`,todo}, ...todos]);
      setTodo('')
     } 
  };

  const ChangeAdd = (e) => {
    setTodo(e.target.value);
    
  }
  const handleDelete = (id) => {
    const delTodo = todos.filter((to) => to.id !== id);
    setTodos([...delTodo]);
  }
  const handleEdit = (id) => {
const editTodo =todos.find((i) => i.id === id);
setTodo(editTodo.todo);
setEditId(id)
  };

return (
  <div>
    <div  className="container">
      <h1>Todo List</h1>
      <form className="arman" onSubmit={handleSubmit}>
        <input type='text'   value={todo} onChange={ChangeAdd} />
        <button type="submit">{editId? 'Edit' : 'Go'}</button>
      </form>
      <ul>
        {todos.map((t) => (
        <li  className="itr">
        
          <span  key={t.id}>{t.todo}</span>
          <button  onClick={() =>handleEdit(t.id)}>Edit</button>
          <button onClick={() => handleDelete (t.id)}>Delte</button>
        </li>
        ))}
      </ul>


    </div>
  </div>
)
 };
 export default App;
