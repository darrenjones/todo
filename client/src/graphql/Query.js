//import { gql } from "@apollo/client";
import gql from "graphql-tag";

export const GET_TODO_LIST = gql`
  query getTodoList {
    todoList {
      id
      title
      completed
    }
  }
`;