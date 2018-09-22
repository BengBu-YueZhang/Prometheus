import Vue from 'vue';
import { Component, Watch } from 'vue-property-decorator';
import { tableListInterface } from '@/interfaces';

@Component
export default class TableMixins extends Vue {
  public filter: tableListInterface = {
    pagestart: 1,
    pagesize: 10,
  };

  public tableLoading: boolean = false;

  public total: number = 0;

  public list: any[] = [];

  @Watch('filter')
  public onFilterChange(): void {
    this.get();
  }

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
