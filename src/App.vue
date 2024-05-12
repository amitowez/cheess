<template>
  <div>
    <CheesseTable/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CheesseTable from '@/components/table/table.vue'
export default defineComponent({
  name: 'App',
  data(){
    return {
      test: 'dfasd'
    }
  },
  components: {
    CheesseTable,
  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
