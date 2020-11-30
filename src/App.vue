<template>
  <div class="container my-container">
    <SelectTreeVue
      v-model="response"
      v-if="data"
      :options="data"
      @onSelect="selected"
      :multiple="true"
    />
    <p>response:{{ response }}</p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import SelectTreeVue from './components/SelectTreeVue/SelectTreeVue.vue';
import json from '@/services/tree.json';
import api from '@/services/api';
import { Node, NodeResponse } from './components/SelectTreeVue/SelectTreeVue';

export default Vue.extend({
  name: 'App',
  components: {
    SelectTreeVue
  },
  data() {
    return {
      data: json,
      response: ''
    };
  },
  watch: {
    response(newVal: Node, oldVal: Node){
      //console.log({newVal});
    }
  },
  methods: {
    async loadData() {
      const response = await api.get('/storegroups/all');
      this.data = response.data;
    },
    selected(node: NodeResponse) {
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
  margin: 1%;
  justify-content: center;
}
</style>

