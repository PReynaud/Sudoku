<template>
    <div class="cell">
        <div class="inner-cell">{{ value }}</div>
    </div>
</template>

<script>
export default {
    props: {
        value: Number
    }
}
</script>

<style scoped>
.cell {
    width: calc(100% / 3);
    font-size: 50px;
    text-align: center;
}

.inner-cell {
    border: 1px solid;
}
</style>