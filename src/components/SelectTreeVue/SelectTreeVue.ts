import { Vue, Component, Prop, Watch } from 'vue-property-decorator';

@Component
export default class SelectTreeVue extends Vue {
  @Prop({ required: true, type: Array }) private options!: Node[];
  @Prop({ default: false }) private multiple!: boolean;

  private value = '';
  private checkedNodes: NodeResponse[] = [];
  private show = false;
  private treeData = this.options;
  private eventsList: EventList[] = [
    { name: 'tree:filtered', args: ['Matches', 'Filter String'] },
    { name: 'node:checked', args: ['Node'] },
    { name: 'node:unchecked', args: ['Node'] },
    { name: 'node:expanded', args: ['Node'] }
  ];

  private treeOptions = {
    multiple: false,
    checkbox: false,
    autoCheckChildren: false,
    checkOnSelect: false,
    propertyNames: {
      text: 'label',
      children: 'children'
    }
  };

  public created() {
    if (this.multiple === true) {
      this.treeOptions.multiple = true;
      this.treeOptions.checkbox = true;
      this.treeOptions.checkOnSelect = true;
    }
  }

  public onSelect(node: Node) {
    this.value = node.text;
    this.$emit('onSelect', this.serializeNode(node));
    this.$emit('input', this.serializeNode(node));
    this.show = false;
  }

  public openMenu() {
    this.show = true;
  }

  public handleInput() {
    this.$emit('input', this.value);
  }

  public mounted() {
    document.addEventListener('click', this.clickOutListener);
    this.eventsList.forEach((e: EventList) => {
      (this.$refs.tree as Vue).$on(e.name, this.initEventViewer(e));
    });
  }

  public initEventViewer(event: EventList) {
    if (event.name === 'tree:filtered')
      return () => {
        console.log(`teste`);
      };
    if (event.name === 'node:checked')
      return (node: Node) => this.nodeToggle(node, true);
    if (event.name === 'node:unchecked')
      return (node: Node) => this.nodeToggle(node, false);
    if (event.name === 'node:expanded')
      return () => {
        console.log('node:expanded');
      };
  }

  @Watch('checkedNodes')
  public watchCheckedNodes() {
    this.value = this.checkedNodes.map((nodes) => nodes.value).join(', ');
  }

  private nodeToggle(node: Node, check: boolean) {
    const nodeResponse: NodeResponse = this.serializeNode(node);
    if (check) {
      this.checkedNodes.push(nodeResponse);
    } else {
      this.checkedNodes = this.checkedNodes.filter(
        (node) => node.id !== nodeResponse.id
      );
    }
    this.$emit('input', this.checkedNodes);
  }

  public clickOutListener(event: Event): void {
    if (!this.$el.contains(event.target as globalThis.Node)) {
      this.show = false;
    }
  }

  public serializeNode(node: Node): NodeResponse {
    return {
      id: node.id,
      value: node.text
    };
  }
}

export interface Node {
  id: string;
  text: string;
  data: [];
  children: Node[];
  state: {
    selected: boolean;
    selectable: boolean;
    checked: boolean;
    expanded: boolean;
    disabled: boolean;
    visible: boolean;
    indeterminate: boolean;
    matched: boolean;
    editable: boolean;
    dragging: boolean;
    draggable: boolean;
    dropable: boolean;
  };
}

export interface NodeResponse {
  id: string;
  value: string;
}

export interface EventList {
  name: string;
  args: string[];
}
