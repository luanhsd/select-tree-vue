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

    <b-form-tags
      v-else
      type="text"
      placeholder=""
      class="form-control"
      invalidTagText=""
      no-add-on-enter
      disableAddButton
      v-model.lazy="arrayValue"
      @click.stop.prevent="arrayValue = ''"
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
