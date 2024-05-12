<template>
    <div  :style="`width: 65px;height: 65px;background-color:${field.color}`">

    </div>
</template>

<script setup lang="ts">

const props = defineProps({
    field: Object
})

console.log(props.field)
</script>

<style>

</style>