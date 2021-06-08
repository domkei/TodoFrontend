<template>
  <div class="BaseCardContainer">
    <div v-for="task in data.todo.tasks" class="BaseCard" :key="task._id" :id="task._id">
      <div class="BaseCard-heading">
        <input type="text" v-model="task.name" disabled="true" />
        <div class="BaseCard-Icon-wrapper">
          <base-icon class="BaseCard-Icon" name="edit" @click="editTodo"></base-icon>
          <base-icon class="BaseCard-Icon" name="delete"></base-icon>
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
  props: ["data"],
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
}

.BaseCard {
  width: 80%;
  background: #fff;
  border-radius: 20px;
  padding: 20px;
  margin: 20px;
  display: flex;
  flex-direction: column;

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
