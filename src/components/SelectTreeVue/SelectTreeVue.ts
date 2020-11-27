import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class SelectTreeVue extends Vue {
  @Prop({ required: true, type: Array }) private options!: any[];
  @Prop({ default: false }) private multiple!: boolean;

  private data = '';
  private show = false;
  private search = '';
  private treeData = this.options;

  private treeOptions = {
    multiple: false,
    checkbox: false,
    autoCheckChildren: false,
    propertyNames: {
      text: 'label',
      children: 'children'
    },
    fetchData(node: Node) {
      console.log(node);
    }
  };

  public created() {
    if (this.multiple === true) {
      this.treeOptions.multiple = true;
      this.treeOptions.checkbox = true;
    }
  }

  public onSelect(node: Node) {
    this.data = node.data.text;
    this.$emit('onSelect', node);
    this.show = false;
  }

  public openMenu() {
    this.show = true;
  }

  public mounted() {
    document.addEventListener('click', this.clickOutListener);
  }

  public clickOutListener(event) {
    if (!this.$el.contains(event.target)) {
      this.show = false;
    }
  }

  public searching(event) {
    if (event.which <= 90 && event.which >= 48) {
      console.log(`procurando por: ${event.target.value}`);
      this.search = event.target.value;
    }
  }
}

export interface Node {
  id: number;
  text: string;
  data: {
    text: string;
  };
  children: Node[];
  state: object;
}
