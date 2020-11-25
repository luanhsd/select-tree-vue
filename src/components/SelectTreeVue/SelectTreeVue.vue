<template>
  <div>
    <input type="text" class="form-control" :value="set" />
    <div class="card">
      <div class="card-body" v-show="true">
        This is some text within a card body {{ set }}.
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./SelectTreeVue.ts"/>