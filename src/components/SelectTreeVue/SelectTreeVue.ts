import Vue from 'vue';
import Component from 'vue-class-component';
import json from '@/services/tree.json';

@Component
export default class SelectTreeVue extends Vue {
  private data = '';

  private show = false;

  private treeData = [];

  private treeOptions = {
    multiple: false,
    checkbox: false,
    autoCheckChildren: false,
    propertyNames: {
      text: 'label',
      children: 'children'
    },
    minFetchDelay: 1000,
    fetchData() {
      console.log('loading');
    }
  };

  public onNodeSelected(node: Node) {
    this.data = node.data.text;
    this.show = false;
  }

  public toogle() {
    this.show = !this.show;
  }

  public myConsole() {
    console.log('aqui');
  }
}

export interface Node {
  id: number;
  data: {
    text: string;
  };
}
