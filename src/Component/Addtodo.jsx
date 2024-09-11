import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo, updateTodo } from "../features/todo/todoSlice";

const Addtodo = ({ todoEdit, clearEdit }) => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    if (todoEdit) {
      setInput(todoEdit.text);
    }
  }, [todoEdit]);

  const addTodoHandler = (e) => {
    e.preventDefault();

    if (todoEdit) {
      dispatch(updateTodo({ id: todoEdit.id, newTxt: input }));
      clearEdit();
    } else {
      dispatch(addTodo(input));
    }

    setInput("");
  };

  return (
    <div>
      <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
        <input
          type="text"
          className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          placeholder="Enter a Todo..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          type="submit"
          className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
        >
          {todoEdit ? "Update todo" : "Add todo"}
        </button>
      </form>
    </div>
  );
};

export default Addtodo;
