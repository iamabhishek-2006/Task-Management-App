import { useState } from "react";
import { createContext} from "react";

export const todosContext=createContext(null);

const TodosProvider=({children})=>{
     const [todos,setTodos]=useState([]);
    return (
      <todosContext.Provider value={{ todos, setTodos }}>
        {children}
      </todosContext.Provider>
    );
};
export default TodosProvider;