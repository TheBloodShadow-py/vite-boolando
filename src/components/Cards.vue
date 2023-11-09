<script>
import Card from "./Card.vue";
import Modal from "./Modal.vue";

export default {
  components: {
    Modal,
    Card,
  },
  props: {
    products: {
      type: Object,
      default: {},
      required: true,
    },
  },
  data() {
    return {
      isModalOpen: false,
      modalProduct: {},
    };
  },
  methods: {
    changeModalStatus: function (product) {
      this.modalProduct = product;
      if (this.isModalOpen) {
        this.isModalOpen = false;
      } else {
        this.isModalOpen = true;
      }
    },
  },
};
</script>

<template>
  <main>
    <div class="container">
      <div class="row">
        <Card @modalShow="changeModalStatus" :product="product" v-for="product in products" />
      </div>
    </div>
    <Modal @closeModal="changeModalStatus" :modalProduct="modalProduct" v-if="isModalOpen" />
  </main>
</template>
