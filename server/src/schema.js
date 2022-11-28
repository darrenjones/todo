const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    todoList: [Todo]
  }

  type Todo {
    id: ID
    title: String
    completed: Boolean
  }

  input CreateTodoInput {
    title: String!
    completed: Boolean!
  }

  input UpdateTodoInput {
    id: ID
    title: String
    completed: Boolean
  }

  type Mutation {
    createTodo(input: CreateTodoInput!): Todo
    updateTodo(input: UpdateTodoInput): Todo
    deleteTodo(id: ID!): Todo
  }
`;

module.exports = typeDefs;
