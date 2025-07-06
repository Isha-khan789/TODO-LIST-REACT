import React, { useEffect, useRef, useState } from "react";
import todoicon from "../Images/todo_icon.png";
import Todolist from "./Todolist";

const Todo = () => {
  const [todoList, settodoList] = useState(
    localStorage.getItem("todos")
      ? JSON.parse(localStorage.getItem("todos"))
      : []
  );
  const inputRef = useRef();
  const add = () => {
    const inputText = inputRef.current.value.trim();
    if (inputText === "") {
      return null;
    }
    // adding two todo
    const newTodo = {
      id: Date.now(),
      text: inputText,
      isComplete: false,
    };
    settodoList((prev) => [...prev, newTodo]);
    inputRef.current.value = "";
  };
  // delete function
  const deleteTodo = (id) => {
    settodoList((prvTodos) => {
      return prvTodos.filter((Todo) => Todo.id !== id);
    });
  };
  const toggle = (id) => {
    settodoList((prvTodos) => {
      return prvTodos.map((Todo) => {
        if (Todo.id === id) {
          return { ...Todo, isComplete: !Todo.isComplete };
        }
        return Todo;
      });
    });
  };
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todoList));
  }, [todoList]);

  // main
  return (
    <div className="bg-white place-self-center rounded-xl w-11/12 max-w-md flex flex-col p-7 min-h-[550px]">
      {/* title */}
      <div className="flex items-center mt-7 gap-2">
        <img src={todoicon} className="w-8" alt="" />
        <h1 className="text-3l text-black  font-semibold">To Do list</h1>
      </div>
      {/* input box */}
      <div className="flex items-center my-7 bg-gray-200 rounded-full">
        <input
          ref={inputRef}
          className="bg-transparent border-0  text-black outline-none flex-1 h-14 pl-16 pr-2 placeholder:text-slate-600"
          type="text"
          placeholder="Add your task"
        />
        <button
          onClick={add}
          className="border-none rounded-full bg-orange-500 w-32 h-14 text-white text-lg font-medium cursor-pointer"
        >
          Add+
        </button>
      </div>
      {/* todo list */}
      <div>
        {todoList.map((item, index) => {
          return (
            <Todolist
              key={index}
              text={item.text}
              id={item.id}
              isComplete={item.isComplete}
              deleteTodo={deleteTodo}
              toggle={toggle}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Todo;
