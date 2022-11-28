import React from "react";
import { useQuery } from "@apollo/client";
import { GET_TODO_LIST } from "../graphql/Query"
import CreateTodo from "./CreateTodo"
import TodoItem from "./TodoItem";

const TodoList = () => {

  const { loading, error, data: { todoList } = [] } = useQuery(GET_TODO_LIST);
  if (loading) return <p className="loading">Loading...</p>;
  if (error) return <p className="error">Error!</p>;

  return (
    <div className="container">
      <h1>Todo List</h1>
      <div className="todo-form">
        <CreateTodo />
      </div>
      <div className="todo-list">
        {todoList && todoList.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </div>
    </div>
  );
};

export default TodoList
