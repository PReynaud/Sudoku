<template>
    <div class="grid">
        <div class="sector" v-for="oneSector in gridData" v-bind:key="oneSector">
            <Sector v-bind:values="oneSector"/>
        </div>
    </div>
</template>

<script>
import Sector from './Sector.vue'
import SudokuUtils from '@/utils/sudoku.utils'

export default {
    components: {
        Sector
    },
    data() {
        return {
            gridData: SudokuUtils.generateEmptyGrid()
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