<template>
  <img :src="iconComponent" />
</template>

<script>
const icons = {
  puzzle: require("../../assets/icons8-puzzle.svg"),
  document: require("../../assets/icons8-dokument.svg"),
  settings: require("../../assets/icons8-einstellungen.svg"),
  info: require("../../assets/icons8-info.svg"),
  edit: require("../../assets/icons8-bearbeiten.svg"),
  home: require("../../assets/icons8-zuhause.svg"),
};

export default {
  props: {
    name: {
      type: String,
      required: true,
    },
  },

  computed: {
    iconComponent() {
      return icons[this.name];
    },
  },
};
</script>
