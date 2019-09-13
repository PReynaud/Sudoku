<template>
  <div id="app">
    <div class="title">
      Sudoku
    </div>
    <Game v-bind:gridData="gridData" />
    <textarea v-model="gridDataPrinted">
    </textarea>
    <button v-on:click="changeMode">{{ darkModeEnabled ? 'Change to light mode' : 'Change to dark mode' }}</button>
  </div>
</template>

<script>
import Game from "./components/Game.vue";
import SudokuUtils from "@/utils/sudoku.utils";

export default {
  name: "app",
  components: {
    Game
  },
  data() {
    return {
      // gridData: SudokuUtils.generateEmptyGrid(),
      gridData: [
        [0, 2, 3, 4, 5, 6, 7, 8, 9],
        [4, 5, 6, 7, 8, 9, 1, 2, 3],
        [7, 8, 9, 1, 2, 3, 4, 5, 6],
        [3, 1, 2, 6, 4, 5, 9, 7, 8],
        [6, 4, 5, 9, 7, 8, 3, 1, 2],
        [9, 7, 8, 3, 1, 2, 6, 4, 5],
        [2, 3, 1, 5, 6, 4, 8, 9, 7],
        [5, 6, 4, 8, 9, 7, 2, 3, 1],
        [8, 9, 7, 2, 3, 1, 5, 6, 4]
      ],
      darkModeEnabled: false
    };
  },
  computed: {
    gridDataPrinted() {
      return SudokuUtils.gridToObject(this.gridData);
    }
  },
  methods: {
    changeMode() {
      if (this.darkModeEnabled) {
        document.body.className = "light-mode";
      } else {
        document.body.className = "dark-mode";
      }

      this.darkModeEnabled = !this.darkModeEnabled;
    }
  }
};
</script>

<style>
.dark-mode {
  background-color: #15202b;
  /* background-color: #2c3e50; */
  color: white !important;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}
</style>
