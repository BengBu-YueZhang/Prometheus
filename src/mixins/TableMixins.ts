import Vue from 'vue';
import { Component } from 'vue-property-decorator';

interface FilterInterface {
  pagesize: number;
  pagestart: number;
}

@Component
export default class TableMixins extends Vue {
  public filter: FilterInterface = {
    pagestart: 1,
    pagesize: 10,
  };

  public tableLoading: boolean = false;

  public total: number = 0;

  public list: any[] = [];

  public created(): void {
    this.get();
  }

  public onPageSizeChange(size: number): void {
    if (this.filter.pagesize !== size) {
      this.filter = { ...this.filter, pagesize: size, pagestart: 1 };
    }
  }

  public onPageChange(page: number): void {
    if (this.filter.pagestart !== page) {
      this.filter = { ...this.filter, pagestart: page };
    }
  }

  public async get(): Promise<any> {
    return Promise.resolve();
  }
}
