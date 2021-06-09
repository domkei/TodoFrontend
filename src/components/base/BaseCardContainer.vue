<template>
  <div class="BaseCardContainer" @drop="onDrop($event, category)" @dragenter.prevent @dragover.prevent>
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
          <base-icon class="BaseCard-Icon" name="edit" @click="editTodo"></base-icon>
          <base-icon class="BaseCard-Icon" name="delete" @click="deleteTask"></base-icon>
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
.BaseCardContainer {
  background: rgba(232, 48, 140, 0.753);
  width: 25vw;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 270px;
}

.BaseCard {
  width: 80%;
  background: #fff;
  border-radius: 20px;
  padding: 20px;
  margin: 20px;
  display: flex;
  flex-direction: column;
  position: relative;

  &-doneStatus {
    background: rgba(47, 255, 92, 0.425);
    height: 100%;
    width: 100%;
    position: absolute;
    right: 0;
    top: 0;
    border-radius: 20px;

    & img {
      position: relative;
      top: 25%;
      pointer-events: none;
    }
  }

  &-heading {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    height: 30%;

    input[type="text"] {
      font-size: 16px;

      &:disabled {
        background: none;
        border: none;
      }
    }
  }

  &-Icon {
    cursor: pointer;
    margin-left: 15px;
  }

  textarea {
    resize: none;
    &:disabled {
      background: none;
      border: none;
    }
  }
}
</style>
