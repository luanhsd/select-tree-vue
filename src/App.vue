<template>
  <div>
    <SelectTreeVue set="teste"/>
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
