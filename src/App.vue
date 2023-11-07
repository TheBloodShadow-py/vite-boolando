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
    };
  },
  components: {
    NavBar,
    Cards,
    Footer,
    CardsSkeleton,
  },
};
</script>

<template>
  <NavBar />
  <!-- <CardsSkeleton /> -->

  <Cards :products="ProductsDb" />
  <Footer />
</template>
