require("dotenv").config();
const { ApolloServer } = require("apollo-server");
const typeDefs = require("./schema");
const TodoList = require("./datasources/TodoListAPI");
const resolvers = require("./resolvers");

const server = new ApolloServer({
  dataSources: () => ({
    todoListAPI: new TodoList(),
  }),
  typeDefs,
  resolvers,
});

const port = process.env.PORT || 9000;
server.listen({ port }).then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
