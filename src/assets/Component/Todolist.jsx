import React from "react";
import tick from "../Images/tick.png";
import notTick from "../Images/not_tick.png";
import delete_icon from "../Images/delete.png";

const Todolist = ({ text, id, isComplete, deleteTodo, toggle }) => {
  return (
    <div className="flex items-center my-3 gap-2">
      <div
        onClick={() => {
          toggle(id);
        }}
        className="flex flex-1 items-center cursor-pointer"
      >
        <img src={isComplete ? tick : notTick} alt="" className="w-7" />
        <p
          className={`text-slate-500 ml-4 text-[17px] ${
            isComplete ? "line-through" : " "
          }`}
        >
          {text}
        </p>
      </div>
      <img
        onClick={() => {
          deleteTodo(id);
        }}
        src={delete_icon}
        className="w-3.5 cursor-pointer"
        alt=""
      />
    </div>
  );
};

export default Todolist;
