<template>
    <div class="inner-sector">
        <Cell v-for="oneCell in values" 
            v-bind:key="oneCell"
            v-bind:value="oneCell"/>
    </div>
</template>

<script>
import Cell from './Cell.vue'

export default {
    components: {
        Cell
    },
    props: {
        values: Array
    } 
}
</script>

<style scoped>
.inner-sector {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    border: 2px solid;
}
</style>