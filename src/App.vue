<script>
import NavBar from "./components/NavBar.vue";
import Cards from "./components/Cards.vue";
import Footer from "./components/Footer.vue";

import ProductsDb from "./json/db.json";

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
  },
};
</script>

<template>
  <NavBar />
  <Cards :products="ProductsDb" />
  <Footer />
</template>
