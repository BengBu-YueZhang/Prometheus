<template>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import { mixins } from 'vue-class-component';
import TableMixins from '@/mixins/TableMixins';

@Component
export default class Home extends mixins(TableMixins) {
}
</script>
