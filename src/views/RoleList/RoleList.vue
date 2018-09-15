<template>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import { mixins } from 'vue-class-component';
import TableMixins from '@/mixins/TableMixins';
import Pagination from '@/components/Pagination.vue';
import * as moment from 'moment';
import RoleListRequest from '@/request/roleList';
import { RoleInterface } from '@/interfaces';

@Component({
  components: {
    Pagination,
  },
})
export default class RoleList extends mixins(TableMixins) {
  public role: RoleInterface = {
    id: '',
    code: '',
    name: '',
    auths: [],
  };
}
</script>
