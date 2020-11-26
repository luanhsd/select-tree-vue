<template>
  <div class="container my-container">
    <SelectTreeVue />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import SelectTreeVue from './components/SelectTreeVue/SelectTreeVue.vue'

export default Vue.extend({
  name: 'App',
  components: {
    SelectTreeVue
  }
});
</script>

<style>
.my-container{
  margin: 1%;
  justify-content: center;
}
</style>