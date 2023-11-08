<script>
import Card from "./Card.vue";

export default {
  components: {
    Card,
  },
  props: {
    products: {
      type: Object,
      default: {},
      required: true,
    },
  },
};
</script>

<template>
  <main>
    <div class="container">
      <div class="row">
        <Card :product="product" v-for="product in products" />
      </div>
    </div>
  </main>
</template>
