import { createStore } from "vuex";

export default createStore({
  state: {
    todos: {},
    error: {},
    activeTodo: {},
  },
  mutations: {
    SET_TODOS(state, todos) {
      state.todos = todos;
    },
    SET_ERROR(state, error) {
      state.error = error;
    },
    SET_ACTIVETODO(state, activeTodo) {
      state.activeTodo = activeTodo;
    },
  },
  actions: {
    getTodos(context) {
      const URL = "http://localhost:3000/todos";

      fetch(URL)
        .then(async (res) => {
          const data = await res.json();

          if (!res.ok) {
            const error = (data && data.message) || res.statusText;
            return Promise.reject(error);
          }

          context.commit("SET_TODOS", data);
        })
        .catch((error) => {
          this.errorMessage = error;
          console.error("There was an error!", error);
        });
    },
    saveTodo(context, payload) {
      const URL = "http://localhost:3000/todos";
      const data = payload.todo;

      fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error("Something went wrong");
          }
        })
        .then((responseJson) => {
          if (responseJson.message) {
            context.commit("SET_ERROR", {
              name: responseJson.message.name,
              code: responseJson.message.code,
            });
            console.error("Something went wrong:", responseJson.message.name, responseJson.message.code);
          }
        })

        .catch((error) => {
          console.log(error);
        });
    },
    getActiveTodo(context, payload) {
      const id = payload.id;
      const URL = `http://localhost:3000/todos/${id}`;

      fetch(URL)
        .then(async (res) => {
          const data = await res.json();

          if (!res.ok) {
            const error = (data && data.message) || res.statusText;
            return Promise.reject(error);
          }

          context.commit("SET_ACTIVETODO", data);
        })
        .catch((error) => {
          this.errorMessage = error;
          console.error("There was an error!", error);
        });
    },
    updateTodo(context, payload) {
      const id = payload.id;
      const data = payload.todo.todo;
      const URL = `http://localhost:3000/todos/${id}`;

      fetch(URL, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error("Something went wrong");
          }
        })
        .then((responseJson) => {
          if (responseJson.message) {
            context.commit("SET_ERROR", {
              name: responseJson.message.name,
              code: responseJson.message.code,
            });
            console.error("Something went wrong:", responseJson.message.name, responseJson.message.code);
          }
        })

        .catch((error) => {
          console.log(error);
        });
    },
  },
  getters: {
    todos(state) {
      return state.todos;
    },
    activeTodo(state) {
      return state.activeTodo;
    },
    error(state) {
      let errorMessage = null;
      if (state.error !== {})
        if (state.error.code === 11000) {
          errorMessage = "Es ist bereits ein Todo mit dem selben Namen vorhanden :(";
        }
      return errorMessage;
    },
  },
});
