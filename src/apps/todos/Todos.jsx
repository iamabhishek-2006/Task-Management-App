import React from 'react'
import styles from "../../styles/todos.module.css"
import { Trash2Icon } from 'lucide-react';
import { useContext } from 'react';
import { todosContext } from '../../context/todos.context';
const Todos = () => {
  const {todos,setTodos}=useContext(todosContext)
  const [input,setInput]=React.useState("");
  const [error,setError]=React.useState("");

  const handleSubmit=(e)=>{
    e.preventDefault();
    setError("");
    
      if(!input.trim()){
        setError("Please enter a todo");
        return;
      }
      setTodos([...todos,{id:Date.now(),todo:input ,completed:false }]);
      setInput("");
      };

      const handleCheck=(id)=>{
        const updatedTodos=todos.map((t)=>(t.id==id?{...t,completed: !t.completed}:t));
        setTodos(updatedTodos);
      };

      const handleDelete=(id)=>{
        const updatedTodos=todos.filter((t)=>t.id !== id);
        setTodos(updatedTodos);
      };
     
  return (
    <div className={styles.todos_container}>
      <h1>TodosApp </h1>
      <div className={styles.form_container}>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter a todo"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button>Add</button>
          {error && <div className={styles.error_msg}>{error}</div>}
        </form>
      </div>
      {todos.length > 0 && (
        <div className={styles.todos_list}>
          {todos.length} Todos |  {todos.filter((t)=>t.completed).length} Completed |  {todos.filter((t)=>!t.completed).length} Pending
          {todos.filter((t)=>!t.completed).map((t) => (
            <div
              key={t.id}
              className={`${styles.todo_item} ${
                t.completed ? styles.completed : ""
              }`}
            >
              <div>
                <input
                  type="checkbox"
                  checked={t.completed}
                  onClick={() => handleCheck(t.id)}
                />
                {t.todo}
              </div>
              <Trash2Icon onClick={() => handleDelete(t.id)} />
            </div>
          ))}
         {todos.filter((t)=>t.completed).length>0 && <hr/>}
          {todos.filter((t)=>t.completed).map((t) => (
            <div
              key={t.id}
              className={`${styles.todo_item} ${
                t.completed ? styles.completed : ""
              }`}
            >
              <div>
                <input
                  type="checkbox"
                  checked={t.completed}
                  onClick={() => handleCheck(t.id)}
                />
                {t.todo}
              </div>
              <Trash2Icon onClick={() => handleDelete(t.id)} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Todos;