import { useState } from "react";
import Addtodo from "./Component/Addtodo";
import Todos from "./Component/Todos";

function App() {
  const [todoEdit, setTodoEdit] = useState(null);

  const handleEdit = (todo) => {
    setTodoEdit(todo);
  };

  const clearEdit = () => {
    setTodoEdit(null);
  };

  return (
    <>
      <div className="w-1/2 mx-auto">
        <h1 className="text-4xl">hello redux toolkit</h1>
        <Addtodo todoEdit={todoEdit} clearEdit={clearEdit} />
        <Todos onEdit={handleEdit} />
      </div>
    </>
  );
}

export default App;
