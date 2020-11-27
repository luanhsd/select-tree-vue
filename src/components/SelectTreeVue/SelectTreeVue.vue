<template>
  <div>
    <input
      type="text"
      class="form-control"
      v-model.lazy="data"
      @click.stop.prevent="data = ''"
      @focus.stop.prevent="openMenu"
      />

    <div v-show="show" class="card mt-1">
      <div class="card-body">
      <tree
        ref='tree'
        :data="treeData"
        @node:selected="onSelect"
        :options="treeOptions"
        :filter="data"
      />
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./SelectTreeVue.ts"/>