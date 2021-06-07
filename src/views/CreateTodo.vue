<template>
  <div class="CreateNewTodo">
    <h1>{{ showTaskForm ? "Todo succesfully created! Start by adding a new Task :)" : "Create new Todo" }}</h1>
    <h1>{{ taskSaved ? "Task saved! You can add more!" : null }}</h1>
    <div class="CreateNewTodo-wrapper">
      <div v-if="showTaskForm" class="CreateNewTodo-newTask">
        <form>
          <label for="">Task Name</label>
          <input type="text" placeholder="Enter a name" />
          <label for="">Description</label>
          <textarea name="" id="" cols="30" rows="10" placeholder="describe the todo.."></textarea>
          <base-button @click="saveTask">Create Task</base-button>
        </form>
      </div>
      <div v-else class="CreateNewTodo-newTodo">
        <form>
          <label for="">Todo Name</label>
          <input type="text" placeholder="Enter a name" />
          <label for="">Description</label>
          <textarea name="" id="" cols="30" rows="10" placeholder="describe the todo.."></textarea>
          <base-button @click="saveTodo">Create Todo</base-button>
        </form>
      </div>
    </div>
    <div v-if="todoSaved" class="Banner">
      Todo saved :)
    </div>
    <div v-if="taskSaved" class="Banner">
      Task saved :)
    </div>
  </div>
</template>

<script>
import BaseButton from "../components/base/BaseButton.vue";
export default {
  components: { BaseButton },
  data() {
    return {
      showTaskForm: false,
      todoSaved: false,
      taskSaved: false,
    };
  },
  methods: {
    saveTodo() {
      this.showTaskForm = true;
      this.todoSaved = true;
      setTimeout(() => {
        this.todoSaved = false;
      }, 3000);
    },
    saveTask() {
      this.taskSaved = true;
      setTimeout(() => {
        this.taskSaved = false;
      }, 3000);
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
    display: flex;
    justify-content: space-between;

    .CreateNewTodo-newTodo {
      width: 45%;
    }
    .CreateNewTodo-newTask {
      width: 45%;
    }
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
    padding: 10px 15px;
    margin-top: 40px;
    margin-bottom: 30px;
  }
}

.Banner {
  background: #00e676;
  padding: 20px;
  width: 45%;
  font-size: 20px;
}
</style>
