
import { useState, useRef } from "react";

function App() {
  const userInp = useRef();
  const [todo, setTodo] = useState([]);

  function addTodo() {
    setTodo([...todo, userInp.current.value]);
    userInp.current.value = ""
  }

  const deleteTodo = (index) => {
    // const newTodos = todo.filter((_, i) => i !== index);
    todo.splice(index, 1)
    setTodo([...todo]);

  };

  const editTodo = (index) => {
    const newValue = prompt("Edit your todo", todo[index]);
    const newTodos = todo.map((item, i) => (i === index ? newValue : item));
    setTodo(newTodos);
  };

  return (
    <div className="bg-purple-700	h-screen ">
    <div className="w-2/4 min-h-96 border-2 shadow-2xl shadow-gray-400  bg-[#1A1A40] pt-2 border-none  mx-auto text-center  "  >
      <h1 className="font-bold  text-white text-5xl  " >Todo List</h1>
      <input placeholder="What is the Task Today?" className="text-white pl-3 mt-8 text-lg bg-[#1A1A40] border-solid border-2 border-indigo-600  w-2/4 min-h-11"   type="text" ref={userInp} />
      <button className="border-2 border-none  font-medium cursor-pointer bg-[#8758FF] min-h-11 w-24 text-base  text-white " onClick={addTodo}>Add Todo</button>
      <ul className="text-white text-base  ">
        {todo.map((item, index) => (
          <li key={index}>
            {item}
            <button className="text-white  min-h-9 w-24 border-2 mt-6 mx-2 cursor-pointer " onClick={() => deleteTodo(index)}>Delete</button>
            <button className="text-white  border-2 min-h-9 w-24 cursor-pointer" onClick={() => editTodo(index)}>Edit</button>
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
}

export default App;