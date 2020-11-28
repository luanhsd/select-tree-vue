import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class SelectTreeVue extends Vue {
  @Prop({ required: true, type: Array }) private options!: Node[];
  @Prop({ default: false }) private multiple!: boolean;

  private nodeSelected: Node[] = [];
  private data = '';
  private show = false;
  private search = '';
  private treeData = this.options;
  private eventsList = [
    { name: 'node:checked', args: ['Node'] },
    { name: 'node:unchecked', args: ['Node'] },
  ]



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
    this.$emit('input', node.text)
    this.show = false;
  }

  public openMenu() {
    this.show = true;
  }

  public handleInput(){
    this.$emit('input', this.data)
  }

  public mounted() {
    document.addEventListener('click', this.clickOutListener);
    this.eventsList.forEach( e => {
      this.$refs.tree.$on(e.name, this.initEventViewer(e))
    })
  }

  public initEventViewer(event){
    console.log(event.name)
    return (node) =>{
      this.nodeSelected.push(node)
      this.$emit('onChecked', node)
      this.$emit('input', this.nodeSelected.map(value => value.text))
    }
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
