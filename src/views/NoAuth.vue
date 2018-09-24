<template>
  <section class="full-screen-centered">
    <h1>无权限</h1>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator'

@Component
export default class NoAuth extends Vue {
  name: string = 'NoAuth'
}
</script>

