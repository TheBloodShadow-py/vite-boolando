<script>
import NavBar from "./components/NavBar.vue";
import Cards from "./components/Cards.vue";
import Footer from "./components/Footer.vue";

import { store } from "./store";
import axios from "axios";

import CardsSkeleton from "./components/CardsSkeleton.vue";

export default {
  data() {
    return {
      loader: true,
      productsDB: store.products,
    };
  },
  components: {
    NavBar,
    Cards,
    Footer,
    CardsSkeleton,
  },
  created() {
    axios.get("http://localhost:3000/products/").then((resp) => (this.productsDB = resp.data));
    setTimeout(() => {
      this.loader = false;
    }, 2000);
  },
};
</script>

<template>
  <NavBar />
  <CardsSkeleton v-if="loader" />
  <Cards v-show="!loader" :products="productsDB" />
  <Footer />
</template>
