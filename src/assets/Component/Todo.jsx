import React from "react";
import todoicon from "../Images/todo_icon.png";

const Todo = () => {
  return (
    <div className="bg-white place-self-center rounded-xl w-11/12 max-w-md flex flex-col p-7 min-h-[550px]">
      {/* title */}
      <div className="flex items-center mt-7 gap-2">
        <img src={todoicon} className="w-8" alt="" />
        <h1 className="text-3l font-semibold">To Do list</h1>
      </div>
      {/* input box */}
      <div className="flex items-center my-7 bg-gray-200 rounded-full">
        <input
          className="bg-transparent border-0 outline-none flex-1 h-14 pl-16 pr-2 placeholder:text-slate-600"
          type="text"
          placeholder="Add your task"
        />
        <button>Add+</button>
      </div>
    </div>
  );
};

export default Todo;
