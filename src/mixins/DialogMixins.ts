import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

@Component
export default class DialogMixins extends Vue {
  @Prop() public edit!: any;

  public visible: boolean = false;

  public dialogData: object = {};

  public merge(): void {
    this.dialogData = Object.assign({}, this.dialogData, this.edit);
  }

  public empty(): void {
    this.dialogData = {};
  }

  public beforeOpen(): void {
    this.merge();
  }

  public afterClose(): void {
    this.empty();
  }

  public ok(): void {
    this.$emit('ok', this.dialogData);
  }
}
