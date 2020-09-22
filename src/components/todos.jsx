import React from "react";

import Todo from "./todo";

const Todos = () => {
  const todos = [
    {
      text: "Belajar React 1"
    },
    {
      text: "Belajar React 2"
    },
    {
      text: "Belajar React 3"
    },
    {
      text: "Belajar React 4"
    },
    {
      text: "Belajar React 5"
    }
  ];

  return (
    <section className="todos">
      {todos.map((todo) => {
        return <Todo text={todo.text} />;
      })}
    </section>
  );
};

export default Todos;
