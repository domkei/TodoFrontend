<template>
  <div class="CreateNewTodo">
    <h1>Create new Todo</h1>
    <div class="CreateNewTodo-wrapper">
      <form>
        <label for="">Todo Name</label>
        <input type="text" placeholder="Enter a name" v-model="todo.name" required />
        <label for="">Description</label>
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="describe the todo.."
          v-model="todo.description"
        ></textarea>
        <base-button @click="saveTodo">Create Todo</base-button>
      </form>
      <div class="Banner" v-if="error.status">{{ error.message }}</div>
    </div>
  </div>
</template>

<script>
import BaseButton from "../components/base/BaseButton.vue";
export default {
  components: { BaseButton },
  data() {
    return {
      todo: {
        name: "",
        description: "",
        tasks: [],
      },
      error: {
        status: null,
        message: "",
      },
      createdTodoId: null,
    };
  },
  watch: {
    "todo.name": function() {
      this.todo.name !== "" ? ((this.error.status = null), (this.error.message = "")) : null;
    },

    "$store.state.error"(value) {
      if (value.code === 11000) {
        this.error.message = "Es ist bereits ein Todo mit diesem Namen vorhanden";
      }
      this.error.status = true;
    },
    "$store.state.response": function(value) {
      if (value._id)
        this.$router.push({
          path: `/todos/${value._id}`,
        });
    },
  },
  methods: {
    saveTodo() {
      if (this.todo.name === "") {
        this.error.status = true;
        this.error.message = "Bitte gib einen Namen für dein Todo an :)";
        return;
      }
      this.$store.dispatch("saveTodo", { todo: this.todo });
    },
  },
};
</script>

<style lang="scss" scoped>
.CreateNewTodo {
  h1 {
    text-align: left;
    padding: 20px;
  }

  &-wrapper {
    padding: 20px;
    width: 70%;
  }

  form {
    display: flex;
    flex-direction: column;
    font-size: 25px;
  }

  label:nth-of-type(2) {
    margin-top: 30px;
  }

  label {
    text-align: left;
    padding: 20px 0;
    font-weight: bold;
  }

  input,
  textarea {
    border-radius: 20px;
    font-size: 18px;
    padding: 10px;
    border: 2px solid #ee63a8;
  }

  textarea {
    resize: none;
  }

  .Btn {
    width: max-content;
    margin: 0;
    margin-top: 30px;
  }
}

.Banner {
  background: #f50057;
  padding: 20px;
  font-size: 20px;
}
</style>
