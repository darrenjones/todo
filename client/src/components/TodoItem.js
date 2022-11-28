import React from "react";
import { useMutation } from "@apollo/client";
import { DELETE_TODO, UPDATE_TODO } from "../graphql/Mutations";
import { GET_TODO_LIST } from "../graphql/Query"

const TodoItem = ({ todo }) => {

  const [deleteTodo] = useMutation(DELETE_TODO);
  const [updateTodo, { data, loading, error }] = useMutation(UPDATE_TODO);
  if (loading) return <p className="loading">Loading...</p>;
  if (error) return <p className="error">Error!</p>;

  const handleClickDelete = (id) => {
    deleteTodo({
      variables: { id },
      refetchQueries: [GET_TODO_LIST, 'getTodoList']
    })
  }

  const handleClickUpdate = async ({ id, title, completed }) => {
    updateTodo({
      variables: {
        input: {
          id,
          title,
          completed: !completed,
        },
      },
      refetchQueries: [GET_TODO_LIST, "getTodoList"],
    })
  }

  return (
    <div className="todo-item">
      <div className="todo-info">
        <button
          className={`todo-completed-button ${todo.completed ? 'completed' : ''}`}
          onClick={() => handleClickUpdate(todo)}
        >
        </button>
        <h2 className={`todo-title ${todo.completed ? 'completed' : ''}`}>{todo.title}</h2>
      </div>
      <div className="button-group">
        <button title="Delete" onClick={() => handleClickDelete(todo.id)}>
          <svg stroke="#333" fill="#333" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path>
          </svg>
        </button>
      </div>
    </div >
  )
}

export default TodoItem