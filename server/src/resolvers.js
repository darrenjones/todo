module.exports = {
  Query: {
    todoList: async (_root, _var, { dataSources }) => {
      return dataSources.todoListAPI.getTodoList();
    },
  },

  Mutation: {
    createTodo: async (_root, { input }, { dataSources }) => {
      return dataSources.todoListAPI.createTodo(input)
    },
    updateTodo: async (_root, args, { dataSources }) => {
      return dataSources.todoListAPI.updateTodo(args.input.id, args.input);
    },
    deleteTodo: async (_root, { id }, { dataSources }) => {
      return dataSources.todoListAPI.deleteTodo(id)
    }
  }
};