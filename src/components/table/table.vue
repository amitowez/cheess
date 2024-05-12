<template>
    <div class="table-container">
        <div v-for="(line,index) in table" :key="index" style="display: flex;">

            <field v-for="field in line" :key="field.name" :field="field" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { initTable } from './initTable';
import field from './field.vue'
const table = initTable()
console.log(table)
</script>

<style>
.table-container{
    width: 40%;
    height: 100%;
}
</style>