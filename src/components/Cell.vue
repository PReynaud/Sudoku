<template>
  <div class="cell"
    v-on:click="activateCell">
    <div class="inner-cell"
      v-bind:class="{ 'selected': selected }">{{ printedValue }}</div>
  </div>
</template>

<script>
export default {
  props: {
    value: Number
  },
  data() {
    return {
      selected: false
    };
  },
  computed: {
    printedValue() {
      return this.value > 0 ? this.value : "";
    }
  },
  methods: {
    activateCell() {
      this.selected = !this.selected;
    }
  }
};
</script>

<style scoped>
.cell {
  width: calc(100% / 3);
  font-size: 50px;
  text-align: center;
}

.cell:hover {
  font-weight: bold;
  background-color: #324d67;
}

.inner-cell {
  border: 1px solid;
  min-height: 60px;
}

.selected {
  background-color: #42678a;
}
</style>