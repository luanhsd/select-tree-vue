<template>
  <div>
    <input @click="toogle" type="text" class="form-control" :value="data"/>

    <div class="card" v-show="show">
    <input type="text" class="form-control" v-model="search"/>
      <div class="card-body">
      <tree
        :data="treeData"
        :options="treeOptions"
        @node:selected="onNodeSelected"
      />
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./SelectTreeVue.ts"/>