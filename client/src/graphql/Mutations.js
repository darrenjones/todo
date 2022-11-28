//import { gql } from "@apollo/client";
import gql from "graphql-tag";

export const CREATE_TODO = gql`
  mutation createTodo($input: CreateTodoInput!) {
    createTodo(input: $input) {
      id
      title
      completed
    }
  }
`;

export const DELETE_TODO = gql`
  mutation deleteTodo($id: ID!) {
    deleteTodo(id: $id) {
      id
    }
  }
`;

export const UPDATE_TODO = gql`
  mutation updateTodo($input: UpdateTodoInput) {   
    updateTodo(input: $input) {
        id
        title
        completed
      }
  }
`;
