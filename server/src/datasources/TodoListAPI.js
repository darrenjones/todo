// const Axios = require("axios");


// class TodoListAPI {
//   constructor() {
//     this.api = Axios.create({
//       baseURL: "http://localhost:3333",
//     });
//   }

//   async getTodoList() {
//     const response = await this.api.get("/todoList");
//     return response.data || [];
//   }

//   async createTodo(input) {
//     const response = await this.api.post("/todoList", input);
//     return response.data || [];
//   }

//   async updateTodo(id, input) {
//     const response = await this.api.patch(`/todoList/${id}`, input);
//     return response.data || [];
//   }

//   async deleteTodo(id) {
//     const response = await this.api.delete(`/todoList/${id}`);
//     return response.data || [];
//   }
// }

// module.exports = TodoListAPI;

const { RESTDataSource } = require("apollo-datasource-rest");

class TodoListAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "http://localhost:3333/";
  }

  async getTodoList() {
    const response = await this.get("todoList");
    return response || [];
  }

  async createTodo(input) {
    const response = await this.post("todoList", input);
    return response || [];
  }

  async updateTodo(id, input) {
    const response = await this.patch(`todoList/${id}`, input);
    return response || [];
  }

  async deleteTodo(id) {
    const response = await this.delete(`todoList/${id}`);
    return response || [];

  }
}

module.exports = TodoListAPI;