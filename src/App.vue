<script>
import NavBar from "./components/NavBar.vue";
import Cards from "./components/Cards.vue";
import Footer from "./components/Footer.vue";

import ProductsDb from "./json/db.json";
import CardsSkeleton from "./components/CardsSkeleton.vue";

export default {
  data() {
    return {
      ProductsDb: ProductsDb.products,
      loader: true,
    };
  },
  components: {
    NavBar,
    Cards,
    Footer,
    CardsSkeleton,
  },
  created() {
    setTimeout(() => {
      this.loader = false;
    }, 2000);
  },
};
</script>

<template>
  <NavBar />
  <CardsSkeleton v-if="loader" />
  <Cards v-show="!loader" :products="ProductsDb" />
  <Footer />
</template>
