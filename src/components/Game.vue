<template>
  <div>
    <Grid v-bind:gridData="gridData" />
  </div>
</template>

<script>
import Grid from "./Grid.vue";

export default {
  components: {
    Grid
  },
  props: {
    gridData: Array
  }
};
</script>
