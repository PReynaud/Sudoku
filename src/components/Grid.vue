<template>
    <div class="grid">
        <div class="sector" v-for="oneSector in gridData" v-bind:key="oneSector">
            <Sector v-bind:values="oneSector"/>
        </div>
    </div>
</template>

<script>
import Sector from './Sector.vue'
// import SudokuUtils from '@/utils/sudoku.utils'

export default {
    components: {
        Sector
    },
    data() {
        return {
            // gridData: SudokuUtils.generateEmptyGrid(),
            gridData: [[1, 2, 3, 4, 5, 6, 7, 8, 9],
            [4, 5, 6, 7, 8, 9, 1, 2, 3],
            [7, 8, 9, 1, 2, 3, 4, 5, 6],
            [3, 1, 2, 6, 4, 5, 9, 7, 8],
            [6, 4, 5, 9, 7, 8, 3, 1, 2],
            [9, 7, 8, 3, 1, 2, 6, 4, 5],
            [2, 3, 1, 5, 6, 4, 8, 9, 7],
            [5, 6, 4, 8, 9, 7, 2, 3, 1],
            [8, 9, 7, 2, 3, 1, 5, 6, 4]]
        }
    }
}
</script>

<style scoped>
.grid {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}

.sector {
    width: 33.3%;
}
</style>