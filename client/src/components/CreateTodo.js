import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_TODO } from "../graphql/Mutations";
import { GET_TODO_LIST } from "../graphql/Query";

const CreateTodo = () => {
  const [todo, setTodo] = useState({ title: "", completed: false, });

  const [createTodo, { loading, error }] = useMutation(CREATE_TODO);
  if (todo.title === "") return
  if (loading) return <p className="loading">Loading...</p>;
  if (error) return <p className="error">Error!</p>;

  const handleCreateTodo = (e) => {
    e.preventDefault();
    createTodo({
      variables: {
        input: {
          title: todo.title,
          completed: todo.completed,
        },
      },
      refetchQueries: [GET_TODO_LIST, "getTodoList"],
    });
    setTodo({
      title: "",
      completed: false,
    });
  };
  return (
    <>
      <h2>Add items to list</h2>
      <form onSubmit={handleCreateTodo}>
        <input
          type="text"
          name="title"
          value={todo.title}
          placeholder="Add a new item to list"
          onChange={(e) => setTodo({ ...todo, title: e.target.value })}
        />
        <button type="submit" className="todo-button">
          Add
        </button>
      </form>
    </>
  );
};

export default CreateTodo;