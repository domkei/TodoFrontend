<template>
  <div class="BaseCard-container" @drop="onDrop($event, category)" @dragenter.prevent @dragover.prevent>
    <div
      v-for="task in tasks"
      class="BaseCard"
      :key="task._id"
      :id="task._id"
      draggable="true"
      @dragstart="startDrag($event, task)"
    >
      <div v-if="category === 'done'" class="BaseCard-doneStatus">
        <base-icon name="checked"></base-icon>
      </div>
      <div class="BaseCard-heading">
        <input type="text" v-model="task.name" disabled="true" />
        <div class="BaseCard-Icon-wrapper">
          <base-icon class="BaseCard-Icon black" name="edit" @click="editTodo" draggable="false"></base-icon>
          <base-icon class="BaseCard-Icon black delete" name="delete" @click="deleteTask" draggable="false"></base-icon>
        </div>
      </div>
      <textarea
        name=""
        id=""
        cols="25"
        rows="10"
        placeholder="describe the task.."
        v-model="task.description"
        disabled="true"
      ></textarea>
    </div>
  </div>
</template>

<script>
import BaseIcon from "./BaseIcon.vue";
export default {
  components: {
    BaseIcon,
  },
  props: ["data", "tasks", "category"],
  data() {
    return {
      inputsDisabled: true,
    };
  },
  methods: {
    editTodo(e) {
      const currentCard = e.target.parentNode.parentNode.parentNode;
      const currentTextArea = currentCard.children[1];
      const currentHeadline = currentCard.children[0].children[0];
      currentTextArea.disabled = !this.inputsDisabled;
      currentHeadline.disabled = !this.inputsDisabled;
      this.inputsDisabled = !this.inputsDisabled;

      if (this.inputsDisabled)
        this.$store.dispatch("updateTodo", {
          id: this.$route.params.id,
          todo: this.data,
        });
    },
    deleteTask(e) {
      const taskId = e.target.parentNode.parentNode.parentNode.id;
      /* eslint-disable */
      this.data.todo.tasks = this.data.todo.tasks.filter((item) => {
        return item._id !== taskId;
      });

      this.$store.dispatch("updateTodo", {
        id: this.$route.params.id,
        todo: this.data,
      });
    },
    startDrag(event, item) {
      event.target.style.border = "5px solid black";
      const status = item.status;
      const itemID = item._id;
      event.dataTransfer.dropEffect = "move";
      event.dataTransfer.effectAllowed = "move";
      event.dataTransfer.setData("itemID", itemID);
    },
    onDrop(event, status) {
      const itemID = event.dataTransfer.getData("itemID");
      const item = this.data.todo.tasks.find((el) => el._id == itemID);
      item.status = status;

      this.$store.dispatch("updateTodo", {
        id: this.$route.params.id,
        todo: this.data,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.BaseCard-container {
  background: $color-main-purple;
  width: 25vw;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 350px;
}

.BaseCard {
  width: 80%;
  background: $color-white-main;
  border-radius: 20px;
  padding: 20px;
  margin: 20px;
  display: flex;
  flex-direction: column;
  position: relative;

  &-doneStatus {
    height: 100%;
    width: 100%;
    position: absolute;
    right: 0;
    top: 0;
    border-radius: 20px;
    pointer-events: none;

    ~ .BaseCard-heading > .BaseCard-Icon-wrapper > img:first-of-type {
      display: none;
    }

    ~ .BaseCard-heading input {
      text-decoration: line-through;
    }

    ~ textarea {
      text-decoration: line-through;
    }

    & img {
      position: absolute;
      bottom: 10px;
      right: 10px;
      pointer-events: none;
      filter: $color-icons-black;
    }
  }

  &-heading {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    height: 30%;
    margin-bottom: 10px;

    input[type="text"] {
      font-size: 16px;
      background: $color-white-main;
      border: 1px solid $color-background-dark;
      font-weight: 800;
      color: $color-background-dark;
      font-size: 18px;
      text-transform: uppercase;
      width: 100%;

      &:disabled {
        background: none;
        border: none;
      }
    }
  }

  &-Icon {
    cursor: pointer;
    margin-left: 15px;

    &-wrapper {
      display: flex;
    }
  }

  textarea {
    resize: none;
    background: $color-white-main;
    font-size: 15px;
    border: 1px solid $color-background-dark;
    padding: 5px;

    &:disabled {
      background: none;
      border: none;
    }
  }
}
</style>
