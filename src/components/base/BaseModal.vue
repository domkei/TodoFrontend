<template>
  <transition name="Modal-fade">
    <div class="Modal-backdrop">
      <div class="Modal" role="dialog" aria-labelledby="modalTitle" aria-describedby="modalDescription">
        <h2>Create new Task</h2>
        <div class="Modal-closeBtn">
          <button type="button" class="btn-close" @click="close" aria-label="Close modal">x</button>
        </div>
        <form>
          <label for="">Name</label>
          <input type="text" v-model="name" />
          <label for="">Description</label>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="describe the task.."
            v-model="description"
          ></textarea>
        </form>
        <div class="Btn-wrapper">
          <base-button @click="saveTask" aria-label="Close modal">Create</base-button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import BaseButton from "./BaseButton.vue";
export default {
  name: "ClassicModal",
  components: {
    BaseButton,
  },
  props: ["data"],
  data() {
    return {
      name: "",
      description: "",
      todo: {},
    };
  },
  methods: {
    close() {
      this.$emit("close");
    },
    saveTask() {
      const updatedTodo = this.todo;

      updatedTodo.todo.tasks.push({ name: this.name, description: this.description, status: "todo" });
      this.$store.dispatch("updateTodo", {
        id: this.$route.params.id,
        todo: updatedTodo,
      });

      this.close();
    },
  },
  updated() {
    this.todo = this.data;
  },
};
</script>

<style lang="scss" scoped>
.Modal {
  background: $color-background-dark;
  box-shadow: 2px 2px 20px 1px $color-main-purple;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  position: relative;
  border-radius: 8px;
  width: 400px;
  padding: 20px;

  &-backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.9);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  h2 {
    text-align: left;
  }

  &-closeBtn {
    position: absolute;
    top: 10px;
    right: 10px;

    .btn-close {
      background: $color-red;
      border: 0;
      color: $color-white-main;
      font-size: 18px;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    text-align: left;

    input {
      margin-bottom: 20px;
      font-size: 18px;
      padding: 10px;
    }

    label {
      padding: 5px 0;
    }

    textarea {
      resize: none;
      padding: 10px;
      font-size: 18px;
    }
  }

  .Btn {
    border-radius: 0;
    padding: 10px 30px;
    margin-top: 20px;
  }
}

.Modal-fade-enter,
.Modal-fade-leave-to {
  opacity: 0;
}
.Modal-fade-enter-active,
.Modal-fade-leave-active {
  transition: opacity 0.5s ease;
}
</style>
