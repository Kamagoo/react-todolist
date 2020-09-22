import React from "react";

import Paper from "../components/paper";
import Header from "../components/Header";
import ToDoForm from "../components/ToDoForm";
import Todos from "../components/todos";

const Todolist = () => {
  return (
    <Paper>
      <Header />
      <ToDoForm />
      <Todos />
    </Paper>
  );
};

export default Todolist;
