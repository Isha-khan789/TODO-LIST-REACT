import React from "react";
import Todo from "./assets/Component/Todo";
// import Todolist from "./assets/Component/Todolist";

const App = () => {
  return (
    <div className="bg-stone-600 grid min-h-screen py-4 text-whit">
      <Todo />
      {/* <Todolist /> */}
    </div>
  );
};

export default App;
