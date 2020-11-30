<template>
  <div>
    <input
      v-if="multiple===false"
      type="text"
      class="form-control"
      v-model.lazy="value"
      @click.stop.prevent="value = ''"
      @focus.stop.prevent="openMenu"
    />

    <input
      v-else
      type="text"
      class="form-control"
      v-model.lazy="value"
      @click.stop.prevent="value = ''"
      @focus.stop.prevent="openMenu"
    />

    <div v-show="show" class="card">
      <div class="card-body">
      <tree
        ref='tree'
        :data="treeData"
        @node:selected="onSelect"
        :options="treeOptions"
      />
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./SelectTreeVue.ts"/>
