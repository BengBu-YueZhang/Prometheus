<template>
  <container>
  </container>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import Container from '@/components/Container.vue';

@Component({
  components: {
    Container,
  },
})
export default class Home extends Vue {
}
</script>
