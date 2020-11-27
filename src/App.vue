<template>
  <div class="container my-container">
    <SelectTreeVue
      v-if="data"
      :options="data"
      @onSelect="selected"
      :multiple="false"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import SelectTreeVue from './components/SelectTreeVue/SelectTreeVue.vue';
import json from '@/services/tree.json';
import api from '@/services/api';

export default Vue.extend({
  name: 'App',
  components: {
    SelectTreeVue
  },
  data() {
    return {
      data: null
    };
  },
  methods: {
    async loadData() {
      const response = await api.get('<base_url>');
      this.data = response.data;
    },
    selected(node: []) {
      console.log(node);
    }
  },
  async created() {
    await this.loadData();
  }
});
</script>

<style>
.my-container {
  margin: 50%;
  justify-content: center;
}
</style>
